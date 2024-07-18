import { useState } from "react";
import { Link } from "react-router-dom";
import "./BurgerMenu.css";
import Burger from "../../assets/menu.svg";
import Cross from "../../assets/x.svg";
import { useUserContext } from "../../contexts/UserContext";

export default function BurgerMenu() {
  const { logout, userPlaylists } = useUserContext();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    if (isOpen === true)
      setTimeout(() => {
        setIsVisible(false);
      }, 300);
    else setIsVisible(true);
  };
  const handleLogOut = () => {
    logout();
  };
  return (
    <>
      {isOpen === false && (
        <button
          type="button"
          onClick={handleClick}
          className="burger"
          aria-expanded={isOpen}
          aria-controls="burger-menu"
        >
          <img src={Burger} alt="open burger menu" />
        </button>
      )}
      <nav
        className={`menuOpen ${isOpen === true ? "active" : ""} ${isVisible === false ? "hidden" : ""}`}
        role="navigation"
        aria-label="Main Menu"
        id="burger-menu"
      >
        <button type="button" onClick={handleClick} className="cross">
          <img src={Cross} alt="close burger menu" />
        </button>
        <ul id="burgerUl">
          <li>
            <Link to="/">HomePage</Link>
          </li>
          {userPlaylists &&
            userPlaylists.map((playlist) => (
              <li key={playlist.id}>
                <Link to={`/playlist/:${playlist.id}`}>{playlist.name}</Link>
              </li>
            ))}
          <li>
            <button id="burgerLogout" type="button" onClick={handleLogOut}>
              Log Out
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
