import { useState } from "react";
import { Link } from "react-router-dom";
import "./BurgerMenu.css";
import Burger from "../../assets/menu.svg";
import Cross from "../../assets/x.svg";

export default function BurgerMenu() {
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
        <ul>
          <li>
            <Link to="/">HomePage</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
