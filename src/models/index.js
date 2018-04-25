//@flow
import {types} from 'mobx-state-tree';
import Config from './Config';
import firebase from './firebase';

const Store = types.model({
    config: types.maybe(Config),
})
.actions(self => ({
    afterCreate: () => {
        self.createConfig();
    },
    createConfig: () => {
        const new_config = Config.create({});
        self.config = new_config;
    },
    getServerTime: () =>
        firebase.database().ref('/.info/serverTimeOffset')
        .once('value')
        .then(serverOffset => serverOffset.val() + Date.now()),
}))
.views(self => ({
    isBackerLoaded: () => self.logged && self.backer !== null,
    isAutoLoggable: () => self.autoLogged || self.logged,
    isVisibleModal: () => {
        const backer_verified = (self.backer && self.backer.verified_ok) || false;
        return self.isBackerLoaded() && !backer_verified && self.modal.isVisible();
    },
}));

const store_instance = Store.create({});

export default store_instance;
