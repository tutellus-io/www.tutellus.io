import firebase, {config} from './firebase';
import {types} from 'mobx-state-tree';
import {pick, omit} from 'lodash';
import Backer from './Backer';

const Store = types.model({
    has_cookie: types.optional(types.boolean, false),
    logged: types.optional(types.boolean, false),
    backer: types.maybe(Backer),
    showModal: types.optional(types.boolean, true),
    modal_show_times: types.optional(types.number, 0),
})
.actions(self => ({
    afterCreate: () => {
        const user = localStorage.getItem(`firebase:authUser:${ config.apiKey }:[DEFAULT]`);

        if (user) {
            self.has_cookie = true;
            firebase.auth().onAuthStateChanged(auth_info => {
                if (auth_info) {
                    // No funciona ({uid = null, emailVerified = null} = {})
                    const {
                        uid,
                    } = pick(auth_info, ['uid']);

                    if (!self.logged) {
                        self.syncLogin(uid);
                    }
                }
            });
        }
    },
    initialize: () => {
        self.has_cookie = false;
        self.logged = false;
        self.showModal = true;
        self.backer = null;
        self.modal_show_times = 0;
    },
    setBacker: backer => {
        self.backer = backer;
    },
    setLogged: logged => {
        self.logged = logged;
    },
    syncLogin: async user_id =>
        await firebase.database().ref(`/backers/${ user_id }`).once('value')
        .then(snapshot => {
            self.createBacker(snapshot.val());
        }),
    createBacker: backer_info => {
        const backer = Backer.create(backer_info);
        self.setLogged(true);
        self.setBacker(backer);
    },
    register: async user_info => {
        const {
            email,
            passwd,
        } = user_info;

        const logged_info = await firebase.auth()
        .createUserWithEmailAndPassword(email, passwd);

        const create_data = {
            user_id: logged_info.uid,
            ...omit(user_info, ['passwd', 'repasswd']),
        };
        await firebase.database()
        .ref(`/backers/${ logged_info.uid }`).set(create_data);

        await self.syncLogin(logged_info.uid);
    },
    sendVerification: async() => {
        const current_user = firebase.auth().currentUser;
        if (current_user) {
            try {
                await current_user.sendEmailVerification();
                return true;
            } catch (ex) {
                return false;
            }
        }
        return false;
    },
    applyActionCode: async oobCode =>
        await firebase.auth().applyActionCode(oobCode)
        .then(() => true)
        .catch(() => false),
    login: async(email, passwd) => {
        self.initialize();
        const user_logged = await firebase.auth().signInWithEmailAndPassword(email, passwd);
        self.setLogged(true);
        await self.syncLogin(user_logged.uid);
    },
    logout: async() => {
        await firebase.auth().signOut();
        self.initialize();
    },
    toggleShowModal: () => {
        self.showModal = !self.showModal;
        self.modal_show_times += 1;
    },
}))
.views(self => ({
    isBackerLoaded: () => self.logged && self.backer !== null,
    isAutoLoggable: () => self.has_cookie || self.logged,
    isVisibleModal: () => {
        const backer_verified = self.backer && self.backer.verified_ok;
        const first_time = self.modal_show_times === 0;
        if (!self.isBackerLoaded()) {
            return false;
        }
        return !backer_verified && self.showModal && first_time;
    },
}));

const store_instance = Store.create({});

export default store_instance;
