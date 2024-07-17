import "./HomePage.css";

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
        <div id="forms">
          <div id="chooseForm">
            <button type="button">Log In</button>
            <button type="button">Sign Up</button>
          </div>
          <button type="button">Submit</button>
        </div>
      </div>
      <div id="allPlaylistsDiv">
        <p>SearchBar</p>
        <p>PlaylistComponent</p>
      </div>
    </>
  );
}
