/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import Pencil from "../assets/pencil.svg";
import Save from "../assets/save.svg";

export default function PlaylistCard({ playlist, auth }) {
  const ApiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const createdAt = new Date(playlist.created_at);
  const [name, setName] = useState(playlist.name);
  const [isEditing, setIsEditing] = useState(false);
  const [playlistName, setPlaylistName] = useState(name);

  const handleClick = () => {
    navigate(`/playlist-page/:${playlist.id}`);
  };

  const handlePencil = () => {
    setIsEditing(true);
  };

  const handleChange = (e) => {
    setPlaylistName(e.target.value);
  };

  const handleSave = async () => {
    if (playlistName !== name) {
      try {
        const response = await fetch(
          `${ApiUrl}/api/playlists/:${playlist.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ playlistName }),
            credentials: "include",
          }
        );
        if (response.ok) {
          setName(playlistName);
        }
      } catch (error) {
        throw new Error(error);
      }
    }
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSave();
  };

  return (
    <div id="playlist">
      <div id="playlistCard">
        <img id="cover" src="" alt="" />
        {isEditing ? (
          <input
            name="name"
            value={playlistName}
            onKeyDown={handleKeyDown}
            onChange={handleChange}
          />
        ) : (
          <h2 onClick={handleClick}>{name}</h2>
        )}
        {auth !== null &&
          playlist.user_id === auth.id &&
          isEditing === false && (
            <img
              id="pencil"
              src={Pencil}
              onClick={handlePencil}
              alt={`Edit the name of you playlist ${playlist.name}`}
            />
          )}
        {isEditing === true && (
          <img
            id="save"
            src={Save}
            onClick={handleSave}
            alt="Save your changes"
          />
        )}
      </div>
      <p>{`Created ${formatDistanceToNow(createdAt, { addSuffix: true })}`}</p>
    </div>
  );
}
