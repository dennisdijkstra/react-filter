export default {
    firstReducer(state, action) {
        return {
            ...state,
            newState: 'new value',
        };
    },
};
