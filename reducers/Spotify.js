export const initialState = {
    code: ""
};

export const SpotifyReducer = (state = initialState, action) => {
    switch (action.type) {
        case "AUTH":
            return Object.assign({}, state, {
                code: action.value
            });
        default:
            return state;
    }
};
