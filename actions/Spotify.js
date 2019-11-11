export const SetAccessToken = data => async dispatch => {
    return dispatch({
        type: "SetAccessToken",
        value: data
    });
};

export const UserMe = data => async dispatch => {
    return dispatch({
        type: "UserMe",
        value: data
    });
};
