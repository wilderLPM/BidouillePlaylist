/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useNavigate } from "react-router-dom";
import "./NavBar.css";
import BurgerMenu from "./BurgerMenu";
import LogOutButton from "../buttons/LogOutButton";
import { useUserContext } from "../../contexts/UserContext";

export default function NavBar() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  const { auth, setAuth } = useUserContext();
  return (
    <div className={auth === null ? "title" : "navBar"}>
      {auth !== null && <BurgerMenu />}
      <h1 onClick={handleClick}>
        <span className="bidouille">Bidouille</span>Playlist
      </h1>
      {auth !== null && <LogOutButton setAuth={setAuth} />}
    </div>
  );
}
