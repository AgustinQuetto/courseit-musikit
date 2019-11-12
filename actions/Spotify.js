import axios from "axios";
import queryString from "query-string";

async function fromSpotify(url, token) {
  const params = {
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json"
    }
  };
  return await axios.get(url, params);
}

export const SetAccessToken = data => dispatch => {
  return new Promise(async (resolve, reject) => {
    let accessToken = {};
    try {
      const response = await axios.post(
        `http://${data.host}/spotify/auth?${queryString.stringify(data.query)}`
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
  const response = await fromSpotify("https://api.spotify.com/v1/me", token);
  return dispatch({
    type: "UserMe",
    value: response.data
  });
};

export const GetUserMenuPlaylists = token => async dispatch => {
  const response = await fromSpotify(
    "https://api.spotify.com/v1/me/playlists",
    token
  );
  return dispatch({
    type: "GetUserMenuPlaylists",
    value: response.data
  });
};

export const FeaturedPlaylists = token => async dispatch => {
  const response = await fromSpotify(
    "https://api.spotify.com/v1/browse/featured-playlists",
    token
  );
  return dispatch({
    type: "FeaturedPlaylists",
    value: response.data
  });
};
