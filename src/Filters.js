import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Filters extends Component {
    static propTypes = {
        updateSearchValue: PropTypes.func.isRequired,
        search: PropTypes.string.isRequired,
    };

    getSearchValue = (event) => {
        const { updateSearchValue } = this.props;
        const search = event.target.value;

        updateSearchValue(search);
    }

    render() {
        const { search } = this.props;
        return (
            <div className="filters">
                <h2 className="filters-title">Filters</h2>
                <p className="filters-input-title">Search:</p>
                <input type="text" onChange={this.getSearchValue} value={search} />
            </div>
        );
    }
}

export default Filters;
