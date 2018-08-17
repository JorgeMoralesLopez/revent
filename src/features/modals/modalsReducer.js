import { MODAL_OPEN, MODAL_CLOSE } from './modalConstants';
import { createReducer } from '../../app/common/util/reducerUtil';

const initialState = null;

export const openModal = (state, payload) => {
    const { modalType, modalProps } = payload;
    return { modalType, modalProps }
}

export const closeModal = (state, payload) => {
    return null;
}

export default createReducer(initialState, {
    [MODAL_OPEN]: openModal,
    [MODAL_CLOSE]: closeModal
})

/*const modalsReducer = (state = initialState, action) => {
    switch (action.type) {
        case MODAL_OPEN: 
            const { modalType, modalProps } = action.payload;
            return { modalType, modalProps }
        case MODAL_CLOSE:
            return null;

        default:
         return state;
    }
}

export default modalsReducer*/