import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CollectionItemListContainer from './CollectionItemListContainer';

configure({ adapter: new Adapter() });

const wrapper = shallow(<CollectionItemListContainer />);
const testFunction = wrapper.instance().testFunction;

describe(testFunction, () => {
    it('should output testing with Jest and Enzyme', () => {
        expect(testFunction()).toBe('Testing with Jest and Enzyme');
    });
});
