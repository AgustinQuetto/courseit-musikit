import React from "react";
import { connect } from "react-redux";
import Link from "next/link";
import { SetAccessToken } from "../actions/Spotify";
import axios from "axios";

class AccessToken extends React.Component {
    constructor(props) {
        super(props);
        const { dispatch, accessToken, at } = props;
        /* setInterval(async () => {
            let accessTokenTmp = false;
            const response = await axios.post(
                `${location.href}spotify/auth?code=${accessToken.refresh_token}`
            );
            if (response.status == 200 && response.data) {
                accessTokenTmp = response.data;
            }
            dispatch(SetAccessToken(accessTokenTmp));
        }, at.expires_in); */
    }
    render() {
        return null;
    }
}

function mapStateToProps(state) {
    return {
        accessToken: state.Spotify.accessToken
    };
}

export default connect(mapStateToProps)(AccessToken);
