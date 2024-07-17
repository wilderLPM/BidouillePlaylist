import "./NavBar.css";
import BurgerMenu from "./BurgerMenu";
import LogOutButton from "../buttons/LogOutButton";
import { useUserContext } from "../../contexts/UserContext";

export default function NavBar() {
  const { auth, setAuth } = useUserContext();
  return (
    <div className={auth === null ? "title" : "navBar"}>
      {auth !== null && <BurgerMenu />}
      <h1>
        <span className="bidouille">Bidouille</span>Playlist
      </h1>
      {auth !== null && <LogOutButton setAuth={setAuth} />}
    </div>
  );
}
