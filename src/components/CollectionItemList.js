import React from 'react';
import PropTypes from 'prop-types';
import CollectionItem from './CollectionItem';


const CollectionItemList = (props) => {
    const { isFetching, filteredItems, loadMoreItems } = props;

    return (
        <div className="content">
            <div className="exhibition-list-items">
                { isFetching ? (
                    <div className="spinner">
                        <div className="bounce1" />
                        <div className="bounce2" />
                        <div className="bounce3" />
                    </div>
                ) : (null) }
                {filteredItems.map(collectionItem => (
                    <CollectionItem key={collectionItem.id} collectionItem={collectionItem} />
                ))}
            </div>
            { isFetching ? (null) : (
                <button className="exhibition-list-load-more" onClick={loadMoreItems} type="button">Load more</button>
            )}
        </div>
    );
};

export default CollectionItemList;

CollectionItemList.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    filteredItems: PropTypes.arrayOf(PropTypes.object).isRequired,
    loadMoreItems: PropTypes.func.isRequired,
};
