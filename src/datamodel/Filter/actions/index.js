import * as types from '../../constants/action-types';

const setSearchValue = value => (
    {
        type: types.SET_SEARCH_VALUE,
        value,
    }
);

const setSelectValue = value => (
    async (dispatch) => {
        dispatch({
            type: types.SET_SELECT_VALUE,
            value,
        });
    }
);

const setSelectCategories = value => (
    {
        type: types.SET_SELECT_CATEGORIES,
        categories: value,
    }
);

export {
    setSelectValue,
    setSearchValue,
    setSelectCategories,
};
