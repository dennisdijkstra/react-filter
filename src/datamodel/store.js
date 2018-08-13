import { createStore } from 'redux';
import reducer from '../reducers';

const initialState = {
    state: 'state',
};

const store = createStore(reducer, initialState);

export { store as default };
