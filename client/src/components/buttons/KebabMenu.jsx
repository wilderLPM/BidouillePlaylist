/* eslint-disable react/prop-types */
import Kebab from "../../assets/ellipsis-vertical.svg";
import "./KebabMenu.css";

// eslint-disable-next-line no-unused-vars
export default function KebabMenu({ song }) {
  return (
    <button type="button" id="kebabutton">
      <img src={Kebab} alt="Show the song options" />
    </button>
  );
}
