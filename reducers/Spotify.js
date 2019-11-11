export const initialState = {
    user: {},
    accessToken: false
};

export const Spotify = (state = initialState, action) => {
    switch (action.type) {
        case "UserMe":
            return Object.assign({}, state, {
                user: action.value
            });
        case "SetAccessToken":
            return Object.assign({}, state, {
                accessToken: action.value
            });
        default:
            return state;
    }
};
