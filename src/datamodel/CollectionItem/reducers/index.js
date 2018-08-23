import * as types from '../../constants/action-types';

const allCollectionItems = (state = [], action) => {
    if (action.type === types.RECEIVED_ITEMS) {
        return action.items;
    }

    if (action.type === types.LOAD_MORE_ITEMS) {
        return [...state, ...action.items];
    }
    return state;
};

const isFetching = (state = false, action) => {
    if (action.type === types.IS_FETCHING) {
        return action.isFetching;
    }
    return state;
};

export { allCollectionItems, isFetching };
