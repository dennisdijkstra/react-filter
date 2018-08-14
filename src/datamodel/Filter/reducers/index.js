const firstReducer = (state = {}, action) => {
    switch (action.type) {
    case 'SET_SEARCH_VALUE':
        console.log(action.value);
        return {
            ...state,
            search: action.value,
        };

    default:
        return state;
    }
};

export { firstReducer as default };
