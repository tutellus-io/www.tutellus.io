//@flow
import firebase, {config} from './firebase';
import {types} from 'mobx-state-tree';
import {get, omit} from 'lodash';

/*::
type creteManagementParams = {|
    loadUser: string,
    reset: string,
    autoLogged: string,
    collection: string,
|}
*/
export function createManagement({loadUser, reset, autoLogged, collection}/*:creteManagementParams*/) {
    return types.model({}).actions(self => ({
        afterCreate: () => {
            const logged_info = localStorage.getItem(`firebase:authUser:${ config.apiKey }:[DEFAULT]`);

            if (logged_info) {
                self[autoLogged]();
                firebase.auth().onAuthStateChanged(auth_info => {
                    const uid = get(auth_info, 'uid');
                    if (uid) {
                        self.loadByUid(uid);
                    }
                });
            }
        },
        loadByUid: async user_id => {
            const snapshot = await firebase.database()
            .ref(`/${ collection }/${ user_id }`).once('value');

            self[loadUser](snapshot.val());
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
            .ref(`/${ collection }/${ logged_info.uid }`).set(create_data);

            await self.loadByUid(logged_info.uid);
            self.sendEmailVerification();
        },
        sendEmailVerification: async() => {
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
        applyActionCode: async code =>
            await firebase.auth().applyActionCode(code),
        login: async(email, passwd) => {
            self[reset]();
            const user_logged = await firebase.auth().signInWithEmailAndPassword(email, passwd);
            await self.loadByUid(user_logged.uid);
        },
        logout: async() => {
            await firebase.auth().signOut();
            self[reset]();
        },
    }));
};
