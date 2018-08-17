import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Filters from './Filters';

jest.mock('./Filters');
configure({ adapter: new Adapter() });

const Filter = new Filters();
console.log(Filter);

beforeEach(() => {
    Filters.mockClear();
});

describe('Filters', () => {
    it('should be defined', () => {
        expect(Filters).toBeDefined();
    });

    it('should render correctly', () => {
        const selectCategories = [{ id: '3445', type: 'all' }];
        const component = shallow(
            <Filters selectCategories={selectCategories} />,
        );
        expect(component).toMatchSnapshot();
    });

    it('should be defined', () => {
        expect(Filter.getInput).toBeDefined();
    });
});
