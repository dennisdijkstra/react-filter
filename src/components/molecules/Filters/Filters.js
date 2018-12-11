import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
import s from './Filters.css';

const Filters = (props) => {
    const { selectCategories, initialValues, filter } = props;
    const { search, select } = initialValues;

    const filterItems = () => {
        setTimeout(() => filter(), 0);
    };

    return (
        <div className={s.filter}>
            <h2 className={s['filter-title']}>Filters</h2>
            <form>
                <div className={s['filter-input']}>
                    <p className={s['filter-input-title']}>Search:</p>
                    <Field
                        name="search"
                        component="input"
                        value={search}
                        type="text"
                        onChange={filterItems}
                    />
                </div>
                <div className={s['filter-input']}>
                    <p className={s['filter-input-title']}>Type of object:</p>
                    <Field name="select" component="select" value={select} onChange={filterItems}>
                        <option value="all">All</option>
                        {selectCategories.map(category => (
                            <option
                                key={category.id}
                                value={category.type}
                            >
                                {category.type.charAt(0).toUpperCase() + category.type.slice(1)}
                            </option>
                        ))}
                    </Field>
                </div>
            </form>
        </div>
    );
};

export default reduxForm({
    form: 'filters',
})(Filters);

Filters.propTypes = {
    selectCategories: PropTypes.arrayOf(PropTypes.object).isRequired,
    filter: PropTypes.func.isRequired,
    initialValues: PropTypes.shape({
        search: PropTypes.string.isRequired,
        select: PropTypes.string.isRequired,
    }).isRequired,
};
