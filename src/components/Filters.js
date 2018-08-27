import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filters extends Component {
    static propTypes = {
        form: PropTypes.shape({
            search: PropTypes.string,
            select: PropTypes.string,
        }).isRequired,
        setInputValue: PropTypes.func.isRequired,
        filter: PropTypes.func.isRequired,
        selectCategories: PropTypes.arrayOf(PropTypes.object).isRequired,
    };

    getInput = (e) => {
        const { filter, setInputValue } = this.props;
        const curr = e.currentTarget;
        const name = curr.name;
        const value = curr.value.toLowerCase();

        setInputValue(name, value).then(() => filter());
    }

    render() {
        const { form, selectCategories } = this.props;
        const { search, select } = form;

        return (
            <div className="filter">
                <h2 className="filter-title">Filters</h2>
                <form>
                    <div className="filter-input">
                        <p className="filter-input-title">Search:</p>
                        <input name="search" type="text" onChange={this.getInput} value={search} />
                    </div>
                    <div className="filter-input">
                        <p className="filter-input-title">Type of object:</p>
                        <select name="select" onChange={this.getInput} value={select}>
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
                </form>
            </div>
        );
    }
}

export default Filters;
