import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Filters extends Component {
    static propTypes = {
        updateList: PropTypes.func.isRequired,
    };

    filterList = () => {
        const { updateList } = this.props;
        updateList();
    }

    render() {
        return (
            <div className="filters">
                <h2>Filters</h2>
                <input type="text" onChange={this.filterList} />
            </div>
        );
    }
}

export default Filters;
