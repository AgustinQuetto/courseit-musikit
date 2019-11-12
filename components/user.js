import React from "react";
import { connect } from "react-redux";
import Link from "next/link";
import { UserMe } from "../actions/Spotify";
import "../styles/user.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

class User extends React.Component {
  constructor(props) {
    super(props);
    const { accessToken, dispatch } = this.props;
    dispatch(UserMe(accessToken.access_token));
  }
  render() {
    let { user } = this.props;
    if (!user) return null;
    return (
      <div className="user">
        <div className="section">
          <ul>
            <li style={{ padding: "0px" }}>
              <FontAwesomeIcon icon={faDownload} /> Crear aplicación
            </li>
          </ul>
        </div>
        <hr />
        <div className="info">
          <div className="circular-portrait">
            <img
              src={
                "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=10203742028177157&height=200&width=200&ext=1576074099&hash=AeQSxy7uP1EeSDMr"
              }
            />
          </div>
          <span>{user.display_name}</span>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.Spotify.user,
    accessToken: state.Spotify.accessToken
  };
}

export default connect(mapStateToProps)(User);
