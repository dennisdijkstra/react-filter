import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Filters from './Filters';

configure({ adapter: new Adapter() });
const filters = new Filters();
let props;

describe('Filters', () => {
    it('should be defined', () => {
        expect(filters).toBeDefined();
    });

    it('should render correctly', () => {
        const wrapper = shallow(
            <Filters {...props} />,
        );
        expect(wrapper).toMatchSnapshot();
    });

    it('getInput should be defined', () => {
        expect(filters.getInput).toBeDefined();
    });

    it('getInput should be called', () => {
        filters.getInput();
        expect(filters.getInput).toHaveBeenCalled();
    });

    beforeEach(() => {
        props = {
            selectCategories: [{ id: '3445', type: 'all' }],
            search: '',
            select: 'all',
            filter: jest.fn(),
            setSearchValue: jest.fn(),
            setSelectValue: jest.fn(),
        };

        jest.spyOn(filters, 'getInput').mockImplementation(() => true);
    });
});
