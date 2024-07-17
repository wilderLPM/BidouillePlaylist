// import { useState } from 'react';

import "./HomePage.css";
import HomeForms from "../components/Forms/HomeForms";

export default function HomePage() {
  return (
    <>
      <div id="welcomeDiv">
        <p>
          Welcome to BidouillePlaylist ! Search for your favorite songs and
          start to <span className="bidouille">“bidouille”</span> a new
          playlist. Or simply browse down below for existing playlists made by
          fellow music lovers
        </p>
        <HomeForms />
      </div>
      <div id="allPlaylistsDiv">
        <p>SearchBar</p>
        <p>PlaylistComponent</p>
      </div>
    </>
  );
}
