import * as types from '../constants/action-types';

const setSelectCategories = value => (
    {
        type: types.SET_SELECT_CATEGORIES,
        payload: value,
    }
);

export default setSelectCategories;
