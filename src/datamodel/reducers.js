import { combineReducers } from 'redux';
import { form, selectCategories } from './Filter/reducers';
import { allCollectionItems, isFetching } from './CollectionItem/reducers';

export default combineReducers({
    isFetching,
    form,
    selectCategories,
    allCollectionItems,
});
