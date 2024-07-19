/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

export default function LogOutButton({ setAuth }) {
  const navigate = useNavigate();

  const handleClick = () => {
    setAuth(null);
    navigate("/");
  };
  return (
    <button type="button" id="logoutButton" onClick={handleClick}>
      Log Out
    </button>
  );
}
