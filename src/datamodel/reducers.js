import { combineReducers } from 'redux';
import { search, select } from './Filter/reducers';

export default combineReducers({
    search,
    select,
});
