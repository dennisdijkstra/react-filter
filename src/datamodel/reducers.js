import { combineReducers } from 'redux';
import { search, select, selectCategories } from './Filter/reducers';

export default combineReducers({
    search,
    select,
    selectCategories,
});
