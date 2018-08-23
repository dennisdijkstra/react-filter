import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../datamodel/CollectionItem/actions';
import * as types from '../datamodel/constants/action-types';
import CollectionItemListContainer from './CollectionItemListContainer';

configure({ adapter: new Adapter() });

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
let props;
let wrapper;
let store;

describe('CollectionItemListContainer', () => {
    it('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('calls IS_FETCHING and RECEIVED_ITEMS when fetchData is called with parameter 1', () => {
        global.fetch.mockResponse(JSON.stringify(
            { objects: [{ id: '18732757', text: 'test', images: ['1', '2'] }] },
        ));

        const expectedActions = [
            { type: types.IS_FETCHING, isFetching: true },
            { type: types.RECEIVED_ITEMS, items: [{ id: '18732757', text: 'test', images: ['1', '2'] }] },
            { type: types.IS_FETCHING, isFetching: false },
        ];

        return store.dispatch(actions.fetchData(1)).then(() => {
            expect(store.getActions()).toEqual(expectedActions);
        });
    });

    beforeEach(() => {
        props = {
            allCollectionItems: [],
            isFetching: false,
            selectCategories: [{ id: '3445', type: 'all' }],
            search: '',
            select: 'all',
        };
        store = mockStore(props);
        wrapper = shallow(
            <CollectionItemListContainer store={store} {...props} />,
        );
    });

    afterEach(() => {
        fetch.resetMocks();
    });
});
