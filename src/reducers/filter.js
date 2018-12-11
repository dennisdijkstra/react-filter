import * as types from '../constants/action-types';

const selectCategories = (state = [], action) => {
    if (action.type === types.SET_SELECT_CATEGORIES) {
        return action.payload;
    }
    return state;
};

export default selectCategories;
