import * as types from '../../constants/action-types';

const setInputValue = (name, value) => (
    async (dispatch) => {
        dispatch({
            type: types.SET_INPUT_VALUE,
            payload: value,
            name,
        });
    }
);

const setSelectCategories = value => (
    {
        type: types.SET_SELECT_CATEGORIES,
        payload: value,
    }
);

export {
    setInputValue,
    setSelectCategories,
};
