import {types} from 'mobx-state-tree';
import {createStorable} from './firebase_store';

const ConfigModel = types.model({
    notifybar: types.optional(types.model({
        enabled: types.optional(types.boolean, false),
        theme: types.optional(types.model({
            foreground: types.maybe(types.string),
            background: types.maybe(types.string),
        }), {}),
    }), {}),
});

export default types.compose(
    ConfigModel,
    createStorable({
        collection: 'config',
        read_only: true,
    })
);
