/* eslint-disable react/prop-types */
export default function LogOutButton({ setAuth }) {
  const handleClick = () => {
    setAuth(null);
  };
  return (
    <button type="button" id="logoutButton" onClick={handleClick}>
      Log Out
    </button>
  );
}
