import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import selectCategories from './filter';
import { allCollectionItems, isFetching } from './collectionItem';

export default combineReducers({
    isFetching,
    selectCategories,
    allCollectionItems,
    form: formReducer,
});
