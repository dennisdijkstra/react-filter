import React from 'react';
import PropTypes from 'prop-types';
import CollectionItem from '../../atoms/CollectionItem';
import Spinner from '../../atoms/Spinner';
import s from './CollectionItems.css';

const CollectionItemList = (props) => {
    const { isFetching, initialLoad, filteredItems, loadMoreItems } = props;

    return (
        <div className={s.container}>
            <div className={s.items}>
                { isFetching && initialLoad ? <Spinner /> : null }
                {filteredItems.map(collectionItem => (
                    <CollectionItem key={collectionItem.id} collectionItem={collectionItem} />
                ))}
            </div>
            { !initialLoad ? (
                <div className={s.more}>
                    { isFetching ? null : (
                        <button
                            className={s.button}
                            onClick={loadMoreItems}
                            type="button"
                        >
                            { isFetching ? '' : 'Load more' }
                        </button>
                    )}
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
