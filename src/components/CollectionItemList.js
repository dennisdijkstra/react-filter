import React from 'react';
import PropTypes from 'prop-types';
import CollectionItem from './CollectionItem';
import Spinner from './Spinner';


const CollectionItemList = (props) => {
    const { isFetching, filteredItems, loadMoreItems } = props;

    return (
        <div className="content">
            <div className="exhibition-list-items">
                { isFetching ? (
                    <Spinner />
                ) : (null) }
                {filteredItems.map(collectionItem => (
                    <CollectionItem key={collectionItem.id} collectionItem={collectionItem} />
                ))}
            </div>
            <div className="exhibition-list-load-more">
                <button
                    className="exhibition-list-load-more-button"
                    onClick={loadMoreItems}
                    type="button"
                >
                Load more
                </button>
                { isFetching ? (
                    <Spinner />
                ) : null }
            </div>
        </div>
    );
};

export default CollectionItemList;

CollectionItemList.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    filteredItems: PropTypes.arrayOf(PropTypes.object).isRequired,
    loadMoreItems: PropTypes.func.isRequired,
};
