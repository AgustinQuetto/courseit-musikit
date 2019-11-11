export const SpotifyAuth = data => dispatch => {
    return dispatch({
        type: "AUTH",
        value: data
    });
};
