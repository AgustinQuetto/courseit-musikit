import React from "react";
import { connect } from "react-redux";
import Link from "next/link";
import { UserMe } from "../actions/Spotify";

class User extends React.Component {
    componentDidMount() {
        const { dispatch, accessToken } = this.props;
        console.log(accessToken);
        dispatch(UserMe());
    }
    render() {
        return <div></div>;
    }
}

function mapStateToProps(state) {
    return {
        user: state.Spotify.user,
        accessToken: state.Spotify.accessToken
    };
}

export default connect(mapStateToProps)(User);
