import React from 'react';
import { shallow, configure } from 'enzyme';
import fetch from 'jest-fetch-mock';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import CollectionItemListContainer from './CollectionItemListContainer';

configure({ adapter: new Adapter() });

const mockStore = configureStore();
let props;
let store;
let wrapper;

describe('CollectionItemListContainer', () => {
    it('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should call fetchData and return succesful', () => {
        fetch.mockResponseOnce(JSON.stringify({ data: 'all' }));

        wrapper.dive().instance().fetchData().then((response) => {
            expect(response.data).toEqual('all');
        });
    });

    beforeEach(() => {
        props = {
            selectCategories: [{ id: '3445', type: 'all' }],
            search: '',
            select: 'all',
        };

        store = mockStore(props);
        wrapper = shallow(
            <CollectionItemListContainer store={store} {...props} />,
        );
    });
});
