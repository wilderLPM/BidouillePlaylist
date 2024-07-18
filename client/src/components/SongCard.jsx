/* eslint-disable react/prop-types */
export default function SongCard({ song }) {
  return (
    <div className="songCard">
      <div id="coverContainer">
        <img src={song.cover_image} alt={song.title} />
      </div>
      <p>{song.title}</p>
    </div>
  );
}
