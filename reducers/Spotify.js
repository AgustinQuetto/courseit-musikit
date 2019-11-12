export const initialState = {
  accessToken: false,
  user: {},
  menuPlaylists: {},
  featuredPlaylists: {}
};

export const Spotify = (state = initialState, action) => {
  switch (action.type) {
    case "SetAccessToken":
      return Object.assign({}, state, {
        accessToken: action.value
      });
    case "UserMe":
      return Object.assign({}, state, {
        user: action.value
      });
    case "GetUserMenuPlaylists":
      return Object.assign({}, state, {
        menuPlaylists: action.value
      });
    case "FeaturedPlaylists":
      console.log(action.value);
      return Object.assign({}, state, {
        featuredPlaylists: action.value
      });
    default:
      return state;
  }
};
