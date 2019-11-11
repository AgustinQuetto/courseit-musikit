import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import {
    initialState as spotifyInitialState,
    SpotifyReducer
} from "../reducers/Spotify";

const initialState = { SpotifyReducer: spotifyInitialState };

export function initializeStore() {
    return createStore(
        combineReducers({ SpotifyReducer }),
        initialState,
        applyMiddleware(thunkMiddleware)
    );
}
