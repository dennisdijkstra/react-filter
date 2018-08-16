import React, { Component } from 'react';
import PropTypes from 'prop-types';
import store from '../datamodel/store';
import { setSearchValue, setSelectValue } from '../datamodel/Filter/actions';


class Filters extends Component {
    static propTypes = {
        select: PropTypes.string.isRequired,
        filter: PropTypes.func.isRequired,
        selectCategories: PropTypes.arrayOf(PropTypes.object).isRequired,
    };

    getInput = () => {
        const { filter } = this.props;
        const search = this.search.value;
        const select = this.select.value;

        store.dispatch(setSearchValue(search));
        store.dispatch(setSelectValue(select));
        filter(search, select);
    }

    render() {
        const { selectCategories, select } = this.props;

        return (
            <div className="filter">
                <h2 className="filter-title">Filters</h2>
                <div className="filter-input">
                    <p className="filter-input-title">Search:</p>
                    <input type="text" onChange={this.getInput} value={store.getState().search} ref={(input => this.search = input)} />
                </div>
                <div className="filter-input">
                    <p className="filter-input-title">Type of object:</p>
                    <select name="type" onChange={this.getInput} value={select} ref={(input => this.select = input)}>
                        <option value="all">All</option>
                        {selectCategories.map(category => (
                            <option
                                key={category.id}
                                value={category.type}
                            >
                                {category.type.charAt(0).toUpperCase() + category.type.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        );
    }
}

export default Filters;
