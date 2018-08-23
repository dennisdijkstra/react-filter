import { combineReducers } from 'redux';
import { search, select, selectCategories } from './Filter/reducers';
import { allCollectionItems, isFetching } from './CollectionItem/reducers';

export default combineReducers({
    isFetching,
    search,
    select,
    selectCategories,
    allCollectionItems,
});
