import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import {
    initialState as spotifyInitialState,
    Spotify
} from "../reducers/Spotify";

const initialState = { Spotify: spotifyInitialState };

export function initializeStore() {
    return createStore(
        combineReducers({ Spotify }),
        initialState,
        applyMiddleware(thunkMiddleware)
    );
}
