/* eslint-disable react/prop-types */
import { formatDistanceToNow } from "date-fns";

export default function PlaylistCard({ playlist }) {
  const createdAt = new Date(playlist.created_at);
  return (
    <>
      <div id="playlistCard">
        <img src="" alt="" />
        <h2>{playlist.name}</h2>
      </div>
      <p>{`Created ${formatDistanceToNow(createdAt, { addSuffix: true })}`}</p>
    </>
  );
}
