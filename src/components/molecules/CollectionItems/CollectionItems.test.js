import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../../actions/collectionItem';
import * as types from '../../../constants/action-types';
import CollectionItemList from './CollectionItems';

configure({ adapter: new Adapter() });

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
let props;
let wrapper;
let store;
let mockLoadMore;
let mockFilter;

describe('CollectionItemListContainer', () => {
    it('should render correctly', () => {
        wrapper = shallow(<CollectionItemList store={store} {...props} />).dive();
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

    it('loadMoreItems method should be called', () => {
        global.fetch.mockResponse(JSON.stringify(
            { objects: [{ id: '18732757', text: 'test', images: ['1', '2'] }] },
        ));
        wrapper = mount(<CollectionItemList store={store} {...props} />);

        mockLoadMore = jest.spyOn(wrapper.instance(), 'loadMoreItems').mockImplementation(() => true);
        mockFilter = jest.spyOn(wrapper.instance(), 'filter').mockImplementation(() => true);
        wrapper.instance().loadMoreItems();
        expect(mockLoadMore).toHaveBeenCalledTimes(1);
        wrapper.instance().forceUpdate();
        expect(mockFilter).toHaveBeenCalledTimes(1);
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
    });

    afterEach(() => {
        fetch.resetMocks();
    });
});
