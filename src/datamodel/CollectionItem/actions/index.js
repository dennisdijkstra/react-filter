import { RECEIVED_ITEMS, LOAD_MORE_ITEMS } from '../../constants/action-types';

// const fetchData = page => dispatch => fetch(`https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.exhibitions.getObjects&access_token=491c2e66a84e1faf2e7e906ff6f24579&query=typography&year_acquired=gt1980&has_images=1&per_page=30&page=${page}`)
//     .then(results => results.json())
//     .then((items) => {
//         dispatch({
//             type: page === 1 ? RECEIVED_ITEMS : LOAD_MORE_ITEMS,
//             items: items.objects.filter(result => result.images[0]),
//         });
//     });

const requestItems = () => {
    return {
        type: 'REQUEST_ITEMS',
        isFetching: true,
    };
};

const receiveItems = (page, items) => {
    return {
        type: page === 1 ? RECEIVED_ITEMS : LOAD_MORE_ITEMS,
        items: items.objects.filter(result => result.images[0]),
    };
};

const receiveError = () => {
    return {
        type: 'REQUEST_ITEMS_ERROR',
    };
};

const requestDone = () => {
    return {
        type: 'REQUEST_DONE',
        isFetching: false,
    };
};


const fetchData = (page) => {
    return async (dispatch) => {
        dispatch(requestItems());
        try {
            const results = await fetch(`https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.exhibitions.getObjects&access_token=491c2e66a84e1faf2e7e906ff6f24579&query=typography&year_acquired=gt1980&has_images=1&per_page=30&page=${page}`);
            const items = await results.json();
            dispatch(receiveItems(page, items));
            dispatch(requestDone());
        } catch (e) {
            dispatch(receiveError(e));
        }
    };
};

export {
    requestItems,
    receiveItems,
    requestDone,
    fetchData,
};
