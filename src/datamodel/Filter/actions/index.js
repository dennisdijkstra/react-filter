import { SET_SEARCH_VALUE, SET_SELECT_VALUE, SET_SELECT_CATEGORIES } from '../../constants/action-types';

const setSearchValue = value => (
    {
        type: SET_SEARCH_VALUE,
        value,
    }
);

const setSelectValue = value => (
    async (dispatch) => {
        dispatch({
            type: SET_SELECT_VALUE,
            value,
        });
    }
);

const setSelectCategories = value => (
    {
        type: SET_SELECT_CATEGORIES,
        categories: value,
    }
);

export {
    setSelectValue,
    setSearchValue,
    setSelectCategories,
};
