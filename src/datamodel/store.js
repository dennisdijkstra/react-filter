import { createStore } from 'redux';
import reducer from './reducers';

const initialState = {
    search: '',
};

const store = createStore(reducer, initialState);

export { store as default };
