import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const CollectionItemDetail = (props) => {
    const { item } = props;

    return (
        <div className="content">
            <Link to="/">
                <p className="exhibition-detail-back">Back</p>
            </Link>
            <p className="exhibition-detail-title">{item.title}</p>
            <img src={item.images[0].z.url} className="exhibition-detail-image" alt={item.title} />
            <p className="exhibition-detail-text">Medium: {item.medium}</p>
        </div>
    );
};

export default CollectionItemDetail;

CollectionItemDetail.propTypes = {
    item: PropTypes.shape({
        title: PropTypes.string.isRequired,
        medium: PropTypes.string.isRequired,
    }).isRequired,
};
