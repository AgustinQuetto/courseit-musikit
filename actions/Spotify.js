import axios from "axios";
import queryString from "query-string";

export const SetAccessToken = data => dispatch => {
    return new Promise(async (resolve, reject) => {
        let accessToken = {};
        try {
            const response = await axios.post(
                `http://${data.host}/spotify/auth?${queryString.stringify(
                    data.query
                )}`
            );
            if (response.status == 200 && response.data) {
                accessToken = response.data;
            } else {
                return reject();
            }
        } catch (e) {
            return reject();
        }
        return resolve(
            dispatch({
                type: "SetAccessToken",
                value: accessToken
            })
        );
    });
};

export const UserMe = token => async dispatch => {
    const params = {
        headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json"
        }
    };
    const response = await axios.get("https://api.spotify.com/v1/me", params);
    return dispatch({
        type: "UserMe",
        value: response.data
    });
};
