import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const ExhibitionDetail = (props) => {
    const { object } = props;

    return (
        <div className="content">
            <Link to="/">
                <p className="exhibition-detail-back">Back</p>
            </Link>
            <p className="exhibition-detail-title">{object.title}</p>
            <img src={object.images[0].z.url} className="exhibition-detail-image" alt={object.title} />
            <p className="exhibition-detail-text">Medium: {object.medium}</p>
        </div>
    );
};

export default ExhibitionDetail;

ExhibitionDetail.propTypes = {
    object: PropTypes.shape({
        title: PropTypes.string.isRequired,
        medium: PropTypes.string.isRequired,
    }).isRequired,
};
