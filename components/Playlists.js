import React from "react";
import { connect } from "react-redux";
import { GetUserMenuPlaylists } from "../actions/Spotify";
import _ from "lodash";

class Playlists extends React.Component {
  constructor(props) {
    super(props);
    const { accessToken, dispatch } = this.props;
    dispatch(GetUserMenuPlaylists(accessToken.access_token));
  }
  render() {
    const playlists = _.get(this.props, "menuPlaylists.items");
    return (
      <div className="section">
        <header>PLAYLISTS</header>
        <ul>
          <li className="add-playlist">
            <div className="add-square">+</div>
            <label>Crear playlist</label>
          </li>
          {playlists &&
            playlists.map(pl => {
              return <li>{pl.name}</li>;
            })}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    accessToken: state.Spotify.accessToken,
    menuPlaylists: state.Spotify.menuPlaylists
  };
}

export default connect(mapStateToProps)(Playlists);
