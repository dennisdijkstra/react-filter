import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Exhibition = ({ exhibition }) => {
    const { title, images, id } = exhibition;

    return (
        <div className="exhibition-list-item">
            <Link to={id}>
                <img src={images[0].b.url} className="exhibition-list-item-image" alt={title} />
                <p className="exhibition-list-item-title">{title}</p>
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
