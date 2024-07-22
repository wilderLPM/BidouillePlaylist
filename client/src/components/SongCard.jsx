/* eslint-disable react/prop-types */
import KebabMenu from "./buttons/KebabMenu";
import "./SongCard.css";
import { useUserContext } from "../contexts/UserContext";

export default function SongCard({ song }) {
  const { auth } = useUserContext();
  const { genre } = song;

  const getGenres = () => {
    if (Array.isArray(genre)) {
      if (genre.length > 0) return "array";
    }
    return false;
  };

  return (
    <div className="songCard">
      <div id="coverContainer">
        <img src={song.cover_image} alt={song.title} />
      </div>
      <div>
        <div id="songInfosGrid">
          <h4>{song.title}</h4>
          <p id="year">{song.year ? song.year : "unknow year"}</p>
          <p id="genre">
            {getGenres() === "array"
              ? genre
                  .map((name) => `${name}, `)
                  .join("")
                  .slice(0, -2)
              : "unknow genre"}
          </p>
          {auth !== null && <KebabMenu song={song} />}
        </div>
      </div>
    </div>
  );
}
