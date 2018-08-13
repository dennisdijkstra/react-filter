import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Filters extends Component {
    static propTypes = {
        updateStateValues: PropTypes.func.isRequired,
        search: PropTypes.string.isRequired,
        select: PropTypes.string.isRequired,
        selectCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
    };

    getInput = () => {
        const { updateStateValues } = this.props;
        const search = this.search.value;
        const select = this.select.value;

        updateStateValues(search, select);
    }

    render() {
        const { search, select, selectCategories } = this.props;

        return (
            <div className="filter">
                <h2 className="filter-title">Filters</h2>
                <div className="filter-input">
                    <p className="filter-input-title">Search:</p>
                    <input type="text" onChange={this.getInput} value={search} ref={(input => this.search = input)} />
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
