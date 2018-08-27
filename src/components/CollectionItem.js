import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const CollectionItem = ({ collectionItem }) => {
    const { images, id, year_acquired: year } = collectionItem;
    const titleRaw = collectionItem.title_raw || 'No title';

    return (
        <div className="exhibition-list-item">
            <Link to={id}>
                <img src={images[0].b.url} className="exhibition-list-item-image" alt={titleRaw} />
                { console.log(titleRaw)}
                <p className="exhibition-list-item-title">{titleRaw}</p>
                <p className="exhibition-list-item-year">{year}</p>
            </Link>
        </div>
    );
};

export default CollectionItem;

CollectionItem.propTypes = {
    collectionItem: PropTypes.shape({
        titleRaw: PropTypes.string,
    }).isRequired,
};
