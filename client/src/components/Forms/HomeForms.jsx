import { useState } from "react";
import "./HomeForms.css";
import LogInAction from "../../actions/LogInAction";
import SignUpAction from "../../actions/SignUpAction";
import { useUserContext } from "../../contexts/UserContext";

export default function HomePage() {
  const { login } = useUserContext();
  const [form, setForm] = useState("log-in");

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    newUsername: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChooseForm = (e) => {
    setForm(e.target.name);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateFormLogIn = () => {
    const newErrors = {};
    if (formData.username === "") {
      newErrors.username = "You need a username to log in.";
    }
    if (formData.password === "") {
      newErrors.password = "Please write your password in order to log in.";
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      return true;
    }
    return false;
  };

  const validateFormSignUp = () => {
    const newErrors = {};
    if (formData.newUsername === "") {
      newErrors.newUsername = "Please choose a username";
    } // TO DO : Check that the username is unique (fetch(`${ApiUrl}/api/users/readByUsername`)?)
    if (formData.newPassword === "") {
      newErrors.newPassword = "Please write your password in order to log in.";
    }
    if (formData.confirmPassword === "") {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (formData.confirmPassword !== formData.newPassword) {
      newErrors.confirmPassword = "The passwords don't match.";
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      return true;
    }
    return false;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form === "log-in") {
      if (validateFormLogIn() === true) {
        const user = await LogInAction(formData);
        if (user !== false) {
          // toast.success
          login(user);
        } else {
          // toast.error
        }
      }
    }
    if (validateFormSignUp() === true) {
      const success = await SignUpAction(formData);
      if (success === true) {
        setFormData({
          username: "",
          password: "",
        });
        setForm("log-in");
        // toast.success
      } else {
        // toast.error
      }
    }
  };

  return (
    <div id="forms">
      <div id="chooseForm">
        <button
          type="button"
          name="log-in"
          onClick={handleChooseForm}
          className={form === "log-in" ? "chosenForm" : ""}
        >
          Log In
        </button>
        <button
          type="button"
          name="sign-up"
          onClick={handleChooseForm}
          className={form === "sign-up" ? "chosenForm" : ""}
        >
          Sign Up
        </button>
      </div>
      <form id="homeForm" onSubmit={handleSubmit}>
        {form === "log-in" ? (
          <div id="log-in">
            <div className="input">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                aria-required="true"
                onChange={handleChange}
                value={formData.username}
              />
              {errors.username !== undefined && (
                <p className="error">{errors.username}</p>
              )}
            </div>
            <div className="input">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                aria-required="true"
                onChange={handleChange}
                value={formData.password}
              />
              {errors.password !== undefined && (
                <p className="error">{errors.password}</p>
              )}
            </div>
          </div>
        ) : (
          <div id="sign-up">
            <div className="input">
              <label htmlFor="newUsername">Username</label>
              <input
                name="newUsername"
                aria-required="true"
                onChange={handleChange}
                value={formData.newUsername}
              />
              {errors.newUsername !== undefined && (
                <p className="error">{errors.newUsername}</p>
              )}
            </div>
            <div className="input">
              <label htmlFor="newPassword">Password</label>
              <input
                type="password"
                name="newPassword"
                aria-required="true"
                onChange={handleChange}
                value={formData.newPassword}
              />
              {errors.newPassword !== undefined && (
                <p className="error">{errors.newPassword}</p>
              )}
            </div>

            <div className="input">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                aria-required="true"
                onChange={handleChange}
                value={formData.confirmPassword}
              />
              {errors.confirmPassword !== undefined && (
                <p className="error">{errors.confirmPassword}</p>
              )}
            </div>
          </div>
        )}
      </form>
      <div id="submitButton">
        <button type="submit" form="homeForm">
          Submit
        </button>
      </div>
    </div>
  );
}
