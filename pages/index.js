import React from "react";
import Link from "next/link";
import FeaturedPlaylists from "../components/FeaturedPlaylists";

class Index extends React.Component {
  render() {
    return (
      <div>
        <FeaturedPlaylists />
      </div>
    );
  }
}

export default Index;
