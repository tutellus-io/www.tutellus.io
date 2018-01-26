//@flow
import firebase from './firebase';
import Rebase from 're-base';
import {types, onSnapshot, getSnapshot, applySnapshot} from 'mobx-state-tree';
import {isEmpty, assign} from 'lodash';

/*::
type createStorableParams = {|
    collection: string,
    attribute?: string,
    read_only?: bool,
|}
*/
export function createStorable({collection, attribute, read_only = false}/*:createStorableParams*/) {
    const database = Rebase.createClass(firebase.database());
    return types.model({
        storage_loading: types.optional(types.boolean, true),
    }).actions(self => {
        let ref;

        let endpoint = `${ collection }`;
        if (attribute) {
            endpoint = `${ collection }/${ self[attribute] }`;
        }

        return {
            bind: () => {
                ref = database.listenTo(endpoint, {
                    context: self,
                    then(payload) {
                        if (!isEmpty(payload)) {
                            self.updateValues(assign({}, payload, {
                                storage_loading: false,
                            }));
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
            save: async() => {
                const own_values = getSnapshot(self);
                return await database.update(endpoint, {
                    data: own_values, //eslint-disable-line id-blacklist
                });
            },
            afterCreate: () => {
                self.bind();
                if (!read_only) {
                    onSnapshot(self, self.save);
                }
            },
            beforeDestroy: () => {
                database.removeBinding(ref);
            },
        };
    })
    .views(self => ({
        isStorageLoading: () => self.storage_loading,
    }));
}
