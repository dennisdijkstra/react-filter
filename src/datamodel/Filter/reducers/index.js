import * as types from '../../constants/action-types';

export const form = (state = { search: '', select: 'all' }, action) => {
    if (action.type === types.SET_INPUT_VALUE) {
        return { ...state, [action.name]: action.payload };
    }
    return state;
};

export const selectCategories = (state = [], action) => {
    if (action.type === types.SET_SELECT_CATEGORIES) {
        return action.payload;
    }
    return state;
};
