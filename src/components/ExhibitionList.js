import React from 'react';
import PropTypes from 'prop-types';
import Exhibition from './Exhibition';


const ExhibitionList = (props) => {
    const { fetching, filtered } = props;

    return (
        <div className="exhibition-list-items content">
            { fetching ? (
                <div className="spinner">
                    <div className="bounce1" />
                    <div className="bounce2" />
                    <div className="bounce3" />
                </div>
            ) : (null) }
            {filtered.map(exhibition => (
                <Exhibition key={exhibition.id} exhibition={exhibition} />
            ))}
        </div>
    );
};

export default ExhibitionList;

ExhibitionList.propTypes = {
    fetching: PropTypes.bool.isRequired,
    filtered: PropTypes.arrayOf(PropTypes.object).isRequired,
};
