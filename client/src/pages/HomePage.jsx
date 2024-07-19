// import { useState } from 'react';

import "./HomePage.css";
import HomeForms from "../components/Forms/HomeForms";
import SearchBar from "../components/SearchBar";
import PlaylistComponent from "../components/PlaylistComponent";
import { useUserContext } from "../contexts/UserContext";

export default function HomePage() {
  const { auth } = useUserContext();
  return (
    <div className={`home ${auth === null ? "row" : ""}`}>
      <div className={`welcomeDiv ${auth === null ? "row" : ""}`}>
        <p>
          Welcome to BidouillePlaylist ! Search for your favorite songs and
          start to <span className="bidouille">“bidouille”</span> a new
          playlist. Or simply browse down below for existing playlists made by
          fellow music lovers
        </p>
        {auth === null && <HomeForms />}
      </div>
      <div id="BrowsePlaylists">
        <SearchBar />
        <div className={`playlistDiv ${auth === null ? "row" : ""}`}>
          <PlaylistComponent auth={auth} />
        </div>
      </div>
    </div>
  );
}
