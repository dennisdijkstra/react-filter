import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Exhibition = ({ exhibition }) => {
    const { title, id } = exhibition;

    return (
        <div>
            <Link to={id}>
                <p>{title}</p>
            </Link>
        </div>
    );
};

export default Exhibition;

Exhibition.propTypes = {
    exhibition: PropTypes.shape({
        title: PropTypes.string.isRequired,
    }).isRequired,
};
