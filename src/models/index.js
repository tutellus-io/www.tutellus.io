//@flow
import {types} from 'mobx-state-tree';
import {createManagement} from './firebase_mng';
import Backer from './Backer';
import Config from './Config';
import Modal from './Modal';

const StoreModel = types.model({
    autoLogged: types.optional(types.boolean, false),
    logged: types.optional(types.boolean, false),
    backer: types.maybe(Backer),
    config: types.maybe(Config),
    modal: types.maybe(Modal),
})
.actions(self => ({
    afterCreate: () => {
        self.createModal();
        self.createConfig();
    },
    initialize: () => {
        self.autoLogged = false;
        self.logged = false;
        self.backer = null;
        self.createModal();
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
    createModal: () => {
        const new_modal = Modal.create({});
        self.modal = new_modal;
    },
    createBacker: backer_info => {
        self.setLogged(true);
        const new_backer = Backer.create(backer_info);
        self.setBacker(new_backer);
    },
}))
.views(self => ({
    isBackerLoaded: () => self.logged && self.backer !== null,
    isAutoLoggable: () => self.autoLogged || self.logged,
    isVisibleModal: () => {
        const backer_verified = (self.backer && self.backer.verified_ok) || false;
        return self.isBackerLoaded() && !backer_verified && self.modal.isVisible();
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
