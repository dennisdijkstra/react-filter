import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import s from './CollectionItem.css';

const CollectionItem = ({ collectionItem }) => {
    const { images, id, year_end: year } = collectionItem;
    const titleRaw = collectionItem.title_raw || 'No title';

    return (
        <Link to={`item/${id}`}>
            <div className={s.content}>
                <img src={images[0].b.url} className={s.image} alt={titleRaw} />
                <p className={s.title}>{titleRaw}</p>
                <p className={s.year}>{year}</p>
                <div className={s.overlay}>
                    <p>More info</p>
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
