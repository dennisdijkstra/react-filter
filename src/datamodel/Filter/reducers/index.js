import { SET_SEARCH_VALUE, SET_SELECT_VALUE } from '../../constants/action-types';


const search = (state = '', action) => {
    if (action.type === SET_SEARCH_VALUE) {
        return action.value;
    }
    return state;
};


const select = (state = 'all', action) => {
    if (action.type === SET_SELECT_VALUE) {
        return action.value;
    }
    return state;
};

export { search, select };
