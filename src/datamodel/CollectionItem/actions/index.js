import { RECEIVED_ITEMS } from '../../constants/action-types';

const fetchData = () => dispatch => fetch('https://api.collection.cooperhewitt.org/rest/?method=cooperhewitt.exhibitions.getObjects&access_token=491c2e66a84e1faf2e7e906ff6f24579&query=typography&year_acquired=gt1980&has_images=1&per_page=30&page=1')
    .then(results => results.json())
    .then((items) => {
        dispatch({
            type: RECEIVED_ITEMS,
            items: items.objects.filter(result => result.images[0]),
        });
    });

export default fetchData;
