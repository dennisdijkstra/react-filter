import * as types from '../constants/action-types';

const requestItems = () => (
    {
        type: types.IS_FETCHING,
        payload: true,
    }
);

const receiveItems = (page, items) => (
    {
        type: page === 1 ? types.RECEIVED_ITEMS : types.LOAD_MORE_ITEMS,
        payload: items.objects.filter(result => result.images[0]),
    }
);

const receiveError = () => (
    {
        type: types.REQUEST_ERROR,
    }
);

const requestDone = () => (
    {
        type: types.IS_FETCHING,
        payload: false,
    }
);

const fetchData = page => (dispatch) => {
    dispatch(requestItems());
    return fetch(`https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.exhibitions.getObjects&access_token=471a50573b4a17c04ea2b0daaaa0f6c0&query=typography&year_acquired=gt1980&has_images=1&per_page=30&page=${page}`)
        .then(items => items.json())
        .then((items) => {
            dispatch(receiveItems(page, items));
            dispatch(requestDone());
        })
        .catch(() => dispatch(receiveError()));
};

export {
    requestItems,
    receiveItems,
    requestDone,
    fetchData,
};
