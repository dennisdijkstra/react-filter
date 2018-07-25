import React from 'react';
import PropTypes from 'prop-types';

const Exhibition = ({ exhibition }) => (
    <div>
        <h1>{exhibition.title}</h1>
    </div>
);

export default Exhibition;

Exhibition.propTypes = {
    exhibition: PropTypes.shape({
        title: PropTypes.string.isRequired,
    }).isRequired,
};
