import React from 'react';
import PropTypes from 'prop-types';
import CollectionItem from './CollectionItem';
import Spinner from './Spinner';


const CollectionItemList = (props) => {
    const {
        isFetching,
        initialLoad,
        filteredItems,
        loadMoreItems,
    } = props;

    return (
        <div className="content">
            <div className="exhibition-list-items">
                { isFetching && initialLoad ? <Spinner /> : null }
                {filteredItems.map(collectionItem => (
                    <CollectionItem key={collectionItem.id} collectionItem={collectionItem} />
                ))}
            </div>
            { !initialLoad ? (
                <div className="exhibition-list-load-more">
                    <button
                        className="exhibition-list-load-more-button"
                        onClick={loadMoreItems}
                        type="button"
                    >
                        { isFetching ? '' : 'Load more' }
                    </button>
                    { isFetching && !initialLoad ? <Spinner /> : null }
                </div>
            ) : (null)}
        </div>
    );
};

export default CollectionItemList;

CollectionItemList.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    initialLoad: PropTypes.bool.isRequired,
    filteredItems: PropTypes.arrayOf(PropTypes.object).isRequired,
    loadMoreItems: PropTypes.func.isRequired,
};
