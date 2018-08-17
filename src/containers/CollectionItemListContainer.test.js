import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import CollectionItemListContainer from './CollectionItemListContainer';

configure({ adapter: new Adapter() });

const mockStore = configureStore();
let store;
let props;

describe('CollectionItemListContainer', () => {
    it('should render correctly', () => {
        const wrapper = shallow(
            <CollectionItemListContainer store={store} {...props} />,
        );
        expect(wrapper).toMatchSnapshot();
    });

    beforeEach(() => {
        props = {
            selectCategories: [{ id: '3445', type: 'all' }],
            search: '',
            select: 'all',
        };
        store = mockStore(props);
    });
});
