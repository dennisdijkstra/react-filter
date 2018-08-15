const search = (state = {}, action) => {
    switch (action.type) {
    case 'SET_SEARCH_VALUE':
        return action.value;

    default:
        return state;
    }
};

export { search as default };
