/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import SongCard from "../components/SongCard";
import { useUserContext } from "../contexts/UserContext";
import "./PlaylistPage.css";
import Pencil from "../assets/pencil.svg";
import Save from "../assets/save.svg";

export default function PlaylistPage() {
  const { auth, setUpdateP } = useUserContext();
  const ApiUrl = import.meta.env.VITE_API_URL;
  const { id } = useParams();
  const cleanId = id.slice(1);
  const [musics, setMusics] = useState(null);
  const [name, setName] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [playlistName, setPlaylistName] = useState(null);
  const [isAuthor, setIsAuthor] = useState(false);

  useEffect(() => {
    const getMusics = async () => {
      try {
        const response = await fetch(
          `${ApiUrl}/api/playlists/with-musics/:${cleanId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          }
        );
        const data = await response.json();
        console.info(data);
        setPlaylistName(data[0].name);
        setName(data[0].name);
        setMusics(data[1]);
        if (auth) if (auth.id === data[0].user_id) setIsAuthor(true); // Update the state if the authentified user is the one who created the playlist
      } catch (error) {
        throw new Error(error);
      }
    };
    getMusics();
  }, [ApiUrl, auth, cleanId, id]);

  const handleDoubleClick = () => {
    setIsEditing(true);
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
        const response = await fetch(`${ApiUrl}/api/playlists/:${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ playlistName }),
          credentials: "include",
        });
        if (response.ok) {
          setName(playlistName); // makes sure to display the new name
          setUpdateP(true); // force the context to rerender
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
    <>
      {name !== null && isEditing === false && (
        <div id="playlistName">
          <h3 onDoubleClick={isAuthor ? handleDoubleClick : null}>{name}</h3>
          <img
            id="pencil"
            src={Pencil}
            onClick={handlePencil}
            alt={`Edit the name of you playlist ${name}`}
          />
        </div>
      )}
      {isEditing === true && (
        <div>
          <input
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            value={playlistName}
          />
          <img
            id="save"
            src={Save}
            onClick={handleSave}
            alt="Save your changes"
          />
        </div>
      )}
      {musics !== null &&
        musics.map((music) => <SongCard song={music} key={music.id} />)}
    </>
  );
}
