import PropTypes from "prop-types";
import { createContext, useContext, useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [auth, setAuth] = useState(null);
  const [userPlaylists, setUserPlaylists] = useState();
  const navigate = useNavigate();
  const ApiUrl = import.meta.env.VITE_API_URL;
  // const notifyFail = (text) => toast.error(text);

  useEffect(() => {
    const getUserPlaylists = async () => {
      try {
        const response = await fetch(
          `${ApiUrl}/api/playlists/from-user/:${auth.id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          }
        );
        const data = await response.json();
        setUserPlaylists(data);
      } catch (error) {
        throw new Error(error);
      }
    };
    if (auth !== null) {
      getUserPlaylists();
    }
  }, [ApiUrl, auth]);

  const login = (user) => {
    setAuth(user);
  };

  const logout = () => {
    navigate("/");
    setAuth(null);
  };

  const memo = useMemo(
    () => ({ auth, setAuth, login, logout, userPlaylists }),
    [auth, logout, userPlaylists]
  );

  return <UserContext.Provider value={memo}>{children}</UserContext.Provider>;
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useUserContext = () => useContext(UserContext);
