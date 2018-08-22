import { RECEIVED_ITEMS, LOAD_MORE_ITEMS } from '../../constants/action-types';

const allCollectionItems = (state = [], action) => {
    if (action.type === RECEIVED_ITEMS) {
        return action.items;
    }

    if (action.type === LOAD_MORE_ITEMS) {
        return [...state, ...action.items];
    }
    return state;
};

export default allCollectionItems;
