import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import SongCard from "../components/SongCard";

export default function PlaylistPage() {
  const ApiUrl = import.meta.env.VITE_API_URL;
  const [musics, setMusics] = useState(null);
  const { id } = useParams();
  const cleanId = id.slice(1);

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
        setMusics(data);
      } catch (error) {
        throw new Error(error);
      }
    };
    getMusics();
  }, [ApiUrl, cleanId, id]);
  return (
    <>
      {musics !== null && <h3>{musics.name}</h3>}
      {musics !== null &&
        musics.map((music) => <SongCard song={music} key={music.id} />)}
    </>
  );
}
