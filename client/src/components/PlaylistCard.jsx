/* eslint-disable react/prop-types */
import { formatDistanceToNow } from "date-fns";
import Edit from "../assets/pencil.svg";

export default function PlaylistCard({ playlist, auth }) {
  const createdAt = new Date(playlist.created_at);
  return (
    <div id="playlist">
      <div id="playlistCard">
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
