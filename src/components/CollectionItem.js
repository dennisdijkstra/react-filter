import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const CollectionItem = ({ collectionItem }) => {
    const { images, id, year_end: year } = collectionItem;
    const titleRaw = collectionItem.title_raw || 'No title';

    return (
        <Link to={id}>
            <div className="exhibition-list-item">
                <img src={images[0].b.url} className="exhibition-list-item-image" alt={titleRaw} />
                <p className="exhibition-list-item-title">{titleRaw}</p>
                <p className="exhibition-list-item-year">{year}</p>
                <div className="exhibition-list-item-overlay">
                    <p className="exhibition-list-item-overlay-text">More info</p>
                </div>
            </div>
        </Link>
    );
};

export default CollectionItem;

CollectionItem.propTypes = {
    collectionItem: PropTypes.shape({
        titleRaw: PropTypes.string,
    }).isRequired,
};
