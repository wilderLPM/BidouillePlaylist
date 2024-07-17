// import { useState } from 'react';

import "./HomePage.css";
import HomeForms from "../components/Forms/HomeForms";
import { useUserContext } from "../contexts/UserContext";

export default function HomePage() {
  const { auth } = useUserContext();
  return (
    <div className="home">
      <div id="welcomeDiv">
        <p>
          Welcome to BidouillePlaylist ! Search for your favorite songs and
          start to <span className="bidouille">“bidouille”</span> a new
          playlist. Or simply browse down below for existing playlists made by
          fellow music lovers
        </p>
        {auth === null && <HomeForms />}
      </div>
      <div id="BrowsePlaylists">
        <p>SearchBar</p>
        <p>PlaylistComponent</p>
      </div>
    </div>
  );
}
