import { useEffect, useState } from "react";
import PlaylistCard from "./PlaylistCard";

export default function PlaylistComponent({ auth }) {
  const ApiUrl = import.meta.env.VITE_API_URL;
  const [playlists, setPlaylists] = useState(null);

  useEffect(() => {
    async function getPlaylists() {
      if (auth === null) {
        try {
          const response = await fetch(`${ApiUrl}/api/playlists/`, {
            method: "GET",
          });
          const data = await response.json();
          setPlaylists(data);
        } catch (error) {
          throw new Error(error);
        }
      } else {
        try {
          const response = await fetch(
            `${ApiUrl}/api/playlists/order-by-user`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                id: auth.id,
              }),
              credentials: "include",
            }
          );
          const data = await response.json();
          setPlaylists(data);
        } catch (error) {
          throw new Error(error);
        }
      }
    }
    getPlaylists();
  }, [ApiUrl, auth]);

  if (playlists !== null) {
    return playlists.map((playlist) => (
      <PlaylistCard playlist={playlist} key={playlist.id} />
    ));
  }
}
