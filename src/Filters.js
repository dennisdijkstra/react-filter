import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Filters extends Component {
    static propTypes = {
        updateSearchValue: PropTypes.func.isRequired,
        updateSelectValue: PropTypes.func.isRequired,
        search: PropTypes.string.isRequired,
        types: PropTypes.arrayOf(PropTypes.string).isRequired,
    };

    getSearchInput = (event) => {
        const { updateSearchValue } = this.props;
        const input = event.target.value;

        updateSearchValue(input);
    }

    getSelectInput = (event) => {
        const { updateSelectValue } = this.props;
        const input = event.target.value;

        updateSelectValue(input);
    }

    render() {
        const { search, types } = this.props;
        return (
            <div className="filter">
                <h2 className="filter-title">Filters</h2>
                <div className="filter-input">
                    <p className="filter-input-title">Search:</p>
                    <input type="text" onChange={this.getSearchInput} value={search} />
                </div>
                <div className="filter-input">
                    <p className="filter-input-title">Type of object:</p>
                    <select name="type" onChange={this.getSelectInput}>
                        {types.map(type => (
                            <option value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>
                        ))}
                    </select>
                </div>
            </div>
        );
    }
}

export default Filters;
