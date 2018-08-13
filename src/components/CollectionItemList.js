import React from 'react';
import PropTypes from 'prop-types';
import CollectionItem from './CollectionItem';


const CollectionItemList = (props) => {
    const { fetching, filtered, loadMoreItems } = props;

    return (
        <div className="content">
            <div className="exhibition-list-items">
                { fetching ? (
                    <div className="spinner">
                        <div className="bounce1" />
                        <div className="bounce2" />
                        <div className="bounce3" />
                    </div>
                ) : (null) }
                {filtered.map(collectionItem => (
                    <CollectionItem key={collectionItem.id} collectionItem={collectionItem} />
                ))}
            </div>
            { fetching ? (null) : (
                <button className="exhibition-list-load-more" onClick={loadMoreItems} type="button">Load more</button>
            )}
        </div>
    );
};

export default CollectionItemList;

CollectionItemList.propTypes = {
    fetching: PropTypes.bool.isRequired,
    filtered: PropTypes.arrayOf(PropTypes.object).isRequired,
    loadMoreItems: PropTypes.func.isRequired,
};
