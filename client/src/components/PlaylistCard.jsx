/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import Edit from "../assets/pencil.svg";

export default function PlaylistCard({ playlist, auth }) {
  const navigate = useNavigate();
  const createdAt = new Date(playlist.created_at);
  const handleClick = () => {
    navigate(`/playlist-page/:${playlist.id}`);
  };
  return (
    <div id="playlist">
      <div id="playlistCard" onClick={handleClick}>
        <img id="cover" src="" alt="" />
        <h2>{playlist.name}</h2>
        {auth !== null && playlist.user_id === auth.id && (
          <img
            id="pencil"
            src={Edit}
            alt={`Edit the name of you playlist ${playlist.name}`}
          />
        )}
      </div>
      <p>{`Created ${formatDistanceToNow(createdAt, { addSuffix: true })}`}</p>
    </div>
  );
}
