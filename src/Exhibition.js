import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Exhibition = ({ exhibition }) => {
    const { title_raw: titleRaw, id } = exhibition;

    return (
        <div>
            <Link to={id}>
                <p className="exhibition-name">{titleRaw}</p>
            </Link>
        </div>
    );
};

export default Exhibition;

Exhibition.propTypes = {
    exhibition: PropTypes.shape({
        title_raw: PropTypes.string.isRequired,
    }).isRequired,
};
