import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Filters extends Component {
    static propTypes = {
        updateList: PropTypes.func.isRequired,
        search: PropTypes.string.isRequired,
    };

    filterList = (event) => {
        const { updateList } = this.props;
        const search = event.target.value;

        updateList(search);
    }

    render() {
        const { search } = this.props;
        return (
            <div className="filters">

                <h2 className="filters-title">Filters</h2>
                <p className="filters-input-title">Search:</p>
                <input type="text" onChange={this.filterList} value={search} />
            </div>
        );
    }
}

export default Filters;
