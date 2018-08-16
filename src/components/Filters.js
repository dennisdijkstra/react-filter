import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filters extends Component {
    static propTypes = {
        search: PropTypes.string.isRequired,
        select: PropTypes.string.isRequired,
        setSearchValue: PropTypes.func.isRequired,
        setSelectValue: PropTypes.func.isRequired,
        filter: PropTypes.func.isRequired,
        selectCategories: PropTypes.arrayOf(PropTypes.object).isRequired,
    };

    getInput = () => {
        const { filter, setSearchValue, setSelectValue } = this.props;
        const search = this.search.value;
        const select = this.select.value;

        setSearchValue(search);
        setSelectValue(select);
        filter(search, select);
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
