import React, { Component } from 'react';
import PropTypes from 'prop-types';
import store from '../datamodel/store';
import updateSearchValue from '../datamodel/Filter/actions';


class Filters extends Component {
    static propTypes = {
        select: PropTypes.string.isRequired,
        selectCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
    };

    getInput = () => {
        const search = this.search.value;

        store.dispatch(updateSearchValue(search));
    }

    render() {
        const { select, selectCategories } = this.props;

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
                            <option value={category}>{category.charAt(0).toUpperCase() + category.slice(1)}</option>
                        ))}
                    </select>
                </div>
            </div>
        );
    }
}

export default Filters;
