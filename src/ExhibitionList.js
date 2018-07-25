import React from 'react';
import PropTypes from 'prop-types';
import Exhibition from './Exhibition';


const ExhibitionList = ({ exhibitionObjects }) => (
    <div>
        <h1 className="exhibition-list-title">Cooper Hewitt Exhibitions</h1>
        {exhibitionObjects.map(exhibition => (
            <Exhibition key={exhibition.id} exhibition={exhibition} />
        ))}
    </div>
);

export default ExhibitionList;

ExhibitionList.propTypes = {
    exhibitionObjects: PropTypes.arrayOf(PropTypes.object).isRequired,
};
