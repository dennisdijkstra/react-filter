import { SET_SEARCH_VALUE, SET_SELECT_VALUE } from '../../constants/action-types';


const setSearchValue = value => ({ type: SET_SEARCH_VALUE, value });
const setSelectValue = value => ({ type: SET_SELECT_VALUE, value });


export { setSelectValue, setSearchValue };
