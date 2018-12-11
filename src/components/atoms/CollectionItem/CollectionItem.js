import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import s from './CollectionItem.css';

const CollectionItem = ({ collectionItem }) => {
    const { images, id, year_end: year } = collectionItem;
    const titleRaw = collectionItem.title_raw || 'No title';

    return (
        <Link to={`item/${id}`}>
            <div className={s['exhibition-list-item']}>
                <img src={images[0].b.url} className={s['exhibition-list-item-image']} alt={titleRaw} />
                <p className={s['exhibition-list-item-title']}>{titleRaw}</p>
                <p className={s['exhibition-list-item-year']}>{year}</p>
                <div className={s['exhibition-list-item-overlay']}>
                    <p className={s['exhibition-list-item-overlay-text']}>More info</p>
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
