import React from 'react';
import PropTypes from 'prop-types';
import Exhibition from './Exhibition';
import Filters from './Filters';


const ExhibitionList = ({ exhibitionObjects }) => (
    <div>
        <div className="header">
            <h1 className="exhibition-list-title">Cooper Hewitt Exhibitions</h1>
        </div>
        <div className="container">
            <Filters />
            <div className="exhibition-list-items">
                {exhibitionObjects.map(exhibition => (
                    <Exhibition key={exhibition.id} exhibition={exhibition} />
                ))}
            </div>
        </div>
    </div>
);

export default ExhibitionList;

ExhibitionList.propTypes = {
    exhibitionObjects: PropTypes.arrayOf(PropTypes.object).isRequired,
};
