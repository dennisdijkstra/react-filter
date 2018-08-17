import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Filters from './Filters';

configure({ adapter: new Adapter() });
const filters = new Filters();

beforeAll(() => {
    jest.spyOn(filters, 'getInput').mockImplementation(() => true);
});


describe('Filters', () => {
    it('should be defined', () => {
        expect(filters).toBeDefined();
    });

    it('should render correctly', () => {
        const selectCategories = [{ id: '3445', type: 'all' }];
        const component = shallow(
            <Filters selectCategories={selectCategories} />,
        );
        expect(component).toMatchSnapshot();
    });

    it('getInput should be defined', () => {
        expect(filters.getInput).toBeDefined();
    });

    it('getInput should be called', () => {
        filters.getInput();
        expect(filters.getInput).toHaveBeenCalled();
    });
});
