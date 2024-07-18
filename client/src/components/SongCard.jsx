/* eslint-disable react/prop-types */
import KebabMenu from "./buttons/KebabMenu";
import "./SongCard.css";

export default function SongCard({ song }) {
  return (
    <div className="songCard">
      <div id="coverContainer">
        <img src={song.cover_image} alt={song.title} />
      </div>
      <div>
        <div id="songInfosGrid">
          <h4>{song.title}</h4>
          <p id="year">{song.year ? song.year : "unknow year"}</p>
          <p id="genre">{song.genre ? song.genre : "unknow genre"}</p>
          <KebabMenu song={song} />
        </div>
      </div>
    </div>
  );
}
