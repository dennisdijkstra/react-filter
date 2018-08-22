import { RECEIVED_ITEMS } from '../../constants/action-types';

const allCollectionItems = (state = [], action) => {
    if (action.type === RECEIVED_ITEMS) {
        return action.items;
    }
    return state;
};

export default allCollectionItems;
