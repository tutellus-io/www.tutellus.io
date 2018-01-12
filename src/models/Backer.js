import {types} from 'mobx-state-tree';
import {createStorable} from './firebase_store';
import firebase from './firebase';

const FileModel = types.model({
    contentType: types.string,
    name: types.string,
    original_name: types.string,
    size: types.number,
    u_on: types.number,
    url: types.string,
});

const BackerModel = types.model({
    first_name: types.maybe(types.string),
    last_name: types.maybe(types.string),
    user_id: types.identifier(types.string),
    verification_email_sended: types.optional(types.boolean, false),
    email: types.maybe(types.string),
    email_verified: types.optional(types.boolean, false),

    eth_adress: types.optional(types.string, ''),
    eth_confirm: types.optional(types.boolean, false),

    identity_front: types.optional(types.array(FileModel), []),
    identity_front_uploaded: types.optional(types.boolean, false),
    identity_back: types.optional(types.array(FileModel), []),
    identity_back_uploaded: types.optional(types.boolean, false),
    residency: types.optional(types.array(FileModel), []),
    residency_uploaded: types.optional(types.boolean, false),
    selfie: types.optional(types.array(FileModel), []),
    selfie_uploaded: types.optional(types.boolean, false),

    verified_ok: types.optional(types.boolean, false),
})
.actions(self => {
    let interval;
    return {
        uploadedFile: (prop, file) => {
            self[prop].push(file);
            self[`${ prop }_uploaded`] = true;
        },
        afterCreate: () => {
            if (!self.email_verified) {
                self.checkVerifiedEmail();
            }
        },
        verifyEmail: () =>{
            self.email_verified = true;
        },
        checkVerifiedEmail: () => {
            interval = setInterval(() => {
                firebase.auth().currentUser.reload();
                const {
                    emailVerified,
                } = firebase.auth().currentUser;
                if (emailVerified) {
                    self.verifyEmail();
                    clearInterval(interval);
                }
            //eslint-disable-next-line no-magic-numbers
            }, 5000);
        },
        beforeDestroy: () => {
            if (interval) {
                clearInterval(interval);
            }
        },
    };
})
.views(self => ({
    isVerified: () => self.verified_ok,
    isEmailVerified: () => self.email_verified,
}));


export default types.compose(
    BackerModel,
    createStorable('backers', 'user_id')
);
