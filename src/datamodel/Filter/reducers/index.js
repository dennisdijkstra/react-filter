import * as types from '../../constants/action-types';

export const search = (state = '', action) => {
    if (action.type === types.SET_SEARCH_VALUE) {
        return action.value;
    }
    return state;
};

export const select = (state = 'all', action) => {
    if (action.type === types.SET_SELECT_VALUE) {
        return action.value;
    }
    return state;
};

export const selectCategories = (state = [], action) => {
    if (action.type === types.SET_SELECT_CATEGORIES) {
        return action.categories;
    }
    return state;
};
