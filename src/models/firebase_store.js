import firebase from './firebase';
import Rebase from 're-base';
import {types, onSnapshot, getSnapshot, applySnapshot} from 'mobx-state-tree';
import {isEmpty, assign} from 'lodash';

export function createStorable(collection, attribute) {
    const database = Rebase.createClass(firebase.database());
    return types.model({}).actions(self => {
        let ref;
        const endpoint = `${ collection }/${ self[attribute] }`;
        return {
            bind: () => {
                ref = database.listenTo(endpoint, {
                    context: self,
                    then(payload) {
                        if (!isEmpty(payload)) {
                            self.updateValues(payload);
                        }
                    },
                });
            },
            getValues: () => getSnapshot(self),
            updateValues: new_values => {
                const old_values = self.getValues();
                const snapshot = assign({}, old_values, new_values);
                applySnapshot(self, snapshot);
            },
            save: async() =>
                await database.update(endpoint, {
                    data: getSnapshot(self), //eslint-disable-line id-blacklist
                }),
            afterCreate: () => {
                self.bind();
                onSnapshot(self, self.save);
            },
            beforeDestroy: () => {
                database.removeBinding(ref);
            },
        };
    });
}
