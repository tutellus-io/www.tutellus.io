//@flow
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
    locales: types.optional(types.array(types.string), []),
    timer_limit: types.optional(types.number, 0),
})
.views(self => ({
    hasShows: () => self.shows.length > 0,
}));

export default types.compose(
    ConfigModel,
    createStorable({
        collection: 'config',
        read_only: true,
    })
);
