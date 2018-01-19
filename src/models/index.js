import {types} from 'mobx-state-tree';
import {createManagement} from './firebase_mng';
import Backer from './Backer';
import Config from './Config';

const StoreModel = types.model({
    autoLogged: types.optional(types.boolean, false),
    logged: types.optional(types.boolean, false),
    backer: types.maybe(Backer),
    showModal: types.optional(types.boolean, true),
    modal_show_times: types.optional(types.number, 0),
    config: types.maybe(Config),
})
.actions(self => ({
    afterCreate: () => {
        self.createConfig();
    },
    initialize: () => {
        self.autoLogged = false;
        self.logged = false;
        self.showModal = true;
        self.backer = null;
        self.modal_show_times = 0;
    },
    setAutoLogged: () =>{
        self.autoLogged = true;
    },
    setBacker: backer => {
        self.backer = backer;
    },
    setLogged: logged => {
        self.logged = logged;
    },
    createConfig: () => {
        const new_config = Config.create({});
        self.config = new_config;
    },
    createBacker: backer_info => {
        self.setLogged(true);
        const new_backer = Backer.create(backer_info);
        self.setBacker(new_backer);
    },
    toggleShowModal: () => {
        self.showModal = !self.showModal;
        self.modal_show_times += 1;
    },
}))
.views(self => ({
    isBackerLoaded: () => self.logged && self.backer !== null,
    isAutoLoggable: () => self.autoLogged || self.logged,
    isVisibleModal: () => {
        const backer_verified = self.backer && self.backer.verified_ok;
        const first_time = self.modal_show_times === 0;
        if (!self.isBackerLoaded()) {
            return false;
        }
        return !backer_verified && self.showModal && first_time;
    },
}));

const Store = types.compose(
    StoreModel,
    createManagement({
        collection: 'backers',
        loadUser: 'createBacker',
        reset: 'initialize',
        autoLogged: 'setAutoLogged',
    })
);

const store_instance = Store.create({});

export default store_instance;
