import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Exhibition = ({ exhibition }) => {
    const { title, images, id } = exhibition;

    return (
        <div>
            <Link to={id}>
                <h1>{title}</h1>
                <img src={images[0].b.url} className="exhibition-image" alt={title} />
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
