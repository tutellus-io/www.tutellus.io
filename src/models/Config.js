//@flow
import {types} from 'mobx-state-tree';
import {createStorable} from './firebase_store';

const Advisor = types.model({
    name: types.string,
    photo: types.string,
    description_i18n: types.string,
});

const Show = types.model({
    done: types.optional(types.boolean, false),
    photo: types.string,
    description_i18n: types.string,
});

const ConfigModel = types.model({
    notifybar: types.optional(types.model({
        enabled: types.optional(types.boolean, false),
        theme: types.optional(types.model({
            foreground: types.maybe(types.string),
            background: types.maybe(types.string),
        }), {}),
    }), {}),
    advisors: types.optional(types.array(Advisor), []),
    shows: types.optional(types.array(Show), []),
})
.views(self => ({
    hasAdvisors: () => self.advisors.length > 0,
    hasShows: () => self.shows.length > 0,
}));

export default types.compose(
    ConfigModel,
    createStorable({
        collection: 'config',
        read_only: true,
    })
);
