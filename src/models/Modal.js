import {types} from 'mobx-state-tree';

const Modal = types.model({
    showModal: types.optional(types.boolean, true),
    modal_show_times: types.optional(types.number, 0),
})
.actions(self => ({
    toggleShowModal: () => {
        self.showModal = !self.showModal;
        if (!self.showModal) {
            self.modal_show_times += 1;
        }
    },
}))
.views(self => ({
    isVisible: () => {
        const first_time = self.modal_show_times === 0;
        return self.showModal && first_time;
    },
}));

export default Modal;

