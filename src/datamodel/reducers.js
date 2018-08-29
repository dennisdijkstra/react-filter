import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import selectCategories from './Filter/reducers';
import { allCollectionItems, isFetching } from './CollectionItem/reducers';

export default combineReducers({
    isFetching,
    selectCategories,
    allCollectionItems,
    form: formReducer,
});
