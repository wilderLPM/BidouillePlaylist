import PropTypes from "prop-types";
import { createContext, useContext, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

const UserContext = createContext();

export function UserProvider({ children }) {
  const ApiUrl = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  // const notifyFail = (text) => toast.error(text);

  const [auth, setAuth] = useState(null);

  const login = (user) => {
    setAuth(user);
  };

  const logout = async (sessionExpired) => {
    try {
      const response = await fetch(`${ApiUrl}/api/auth/log-out`, {
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.status === 200) {
        setAuth(null);
        navigate(sessionExpired === true ? "/sign-up-page" : "/");
      }
    } catch (err) {
      console.error(err);
      // notifyFail("Une erreur est survenu !");
    }
  };

  const memo = useMemo(
    () => ({ auth, setAuth, login, logout }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [auth]
  );

  return <UserContext.Provider value={memo}>{children}</UserContext.Provider>;
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useUserContext = () => useContext(UserContext);
