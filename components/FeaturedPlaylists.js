import React from "react";
import { connect } from "react-redux";
import { FeaturedPlaylists as FeaturedPlaylistsAction } from "../actions/Spotify";
import _ from "lodash";
import "../styles/featured-playlists.scss";

class FeaturedPlaylists extends React.Component {
  constructor(props) {
    super(props);
    const { dispatch, accessToken } = this.props;
    dispatch(FeaturedPlaylistsAction(accessToken.access_token));
  }

  render() {
    const featuredPlaylists = _.get(
      this.props,
      "featuredPlaylists.playlists.items"
    );

    return (
      <div className="featured-playlists">
        {featuredPlaylists &&
          featuredPlaylists.map(c => {
            return (
              <div>
                {c.name}
                {c.images &&
                  c.images.map(i => {
                    return <img src={i.url} />;
                  })}
              </div>
            );
          })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    accessToken: state.Spotify.accessToken,
    featuredPlaylists: state.Spotify.featuredPlaylists
  };
}

export default connect(mapStateToProps)(FeaturedPlaylists);
