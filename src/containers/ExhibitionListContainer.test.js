import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ExhibitionListContainer from './ExhibitionListContainer';

configure({ adapter: new Adapter() });

const wrapper = shallow(<ExhibitionListContainer />);
const testFunction = wrapper.instance().testFunction;

describe(testFunction, () => {
    it('should output testing with Jest and Enzyme', () => {
        expect(testFunction()).toBe('Testing with Jest and Enzyme');
    });
});
