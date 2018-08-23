import * as types from '../../constants/action-types';

const requestItems = () => (
    {
        type: types.IS_FETCHING,
        isFetching: true,
    }
);

const receiveItems = (page, items) => (
    {
        type: page === 1 ? types.RECEIVED_ITEMS : types.LOAD_MORE_ITEMS,
        items: items.objects.filter(result => result.images[0]),
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
        isFetching: false,
    }
);


const fetchData = page => (
    async (dispatch) => {
        dispatch(requestItems());
        try {
            const results = await fetch(`https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.exhibitions.getObjects&access_token=491c2e66a84e1faf2e7e906ff6f24579&query=typography&year_acquired=gt1980&has_images=1&per_page=30&page=${page}`);
            const items = await results.json();
            dispatch(receiveItems(page, items));
            dispatch(requestDone());
        } catch (e) {
            dispatch(receiveError(e));
        }
    }
);

export {
    requestItems,
    receiveItems,
    requestDone,
    fetchData,
};
