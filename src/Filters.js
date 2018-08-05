import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Filters extends Component {
    static propTypes = {
        updateSearchValue: PropTypes.func.isRequired,
        search: PropTypes.string.isRequired,
        types: PropTypes.arrayOf(PropTypes.string).isRequired,
    };

    getSearchValue = (event) => {
        const { updateSearchValue } = this.props;
        const search = event.target.value;

        updateSearchValue(search);
    }

    render() {
        const { search, types } = this.props;
        return (
            <div className="filter">
                <h2 className="filter-title">Filters</h2>
                <div className="filter-input">
                    <p className="filter-input-title">Search:</p>
                    <input type="text" onChange={this.getSearchValue} value={search} />
                </div>
                <div className="filter-input">
                    <p className="filter-input-title">Type of object:</p>
                    <select name="type">
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
