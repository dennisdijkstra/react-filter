import * as types from '../constants/action-types';

const allCollectionItems = (state = [], action) => {
    if (action.type === types.RECEIVED_ITEMS) {
        return action.payload;
    }

    if (action.type === types.LOAD_MORE_ITEMS) {
        return [...state, ...action.payload];
    }
    return state;
};

const isFetching = (state = false, action) => {
    if (action.type === types.IS_FETCHING) {
        return action.payload;
    }
    return state;
};

export { allCollectionItems, isFetching };
