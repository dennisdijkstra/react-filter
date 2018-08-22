import { combineReducers } from 'redux';
import { search, select, selectCategories } from './Filter/reducers';
import allCollectionItems from './CollectionItem/reducers';

export default combineReducers({
    search,
    select,
    selectCategories,
    allCollectionItems,
});
