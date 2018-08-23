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

const isFetching = (state = false, action) => {
    if (action.type === 'REQUEST_ITEMS') {
        return action.isFetching;
    }

    if (action.type === 'REQUEST_DONE') {
        return action.isFetching;
    }
    return state;
};

export { allCollectionItems, isFetching };
