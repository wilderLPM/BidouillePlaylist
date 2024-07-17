import { useState } from "react";

import LogInAction from "../../actions/LogInAction";
import SignUpAction from "../../actions/SignUpAction";

export default function HomePage() {
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
        const success = await LogInAction(formData);
        if (success === true) {
          // fetch ?
          // setAuth(true);
          // toast.success
        } else {
          // toast.error
        }
      }
    }
    if (validateFormSignUp() === true) {
      const success = await SignUpAction(formData);
      if (success === true) {
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
        <button type="button" name="log-in" onClick={handleChooseForm}>
          Log In
        </button>
        <button type="button" name="sign-up" onClick={handleChooseForm}>
          Sign Up
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        {form === "log-in" ? (
          <div id="log-in">
            <label htmlFor="username">username</label>
            <input
              type="text"
              name="username"
              aria-required="true"
              onChange={handleChange}
            />
            {errors.username !== undefined && (
              <p className="error">{errors.username}</p>
            )}

            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              aria-required="true"
              onChange={handleChange}
            />
            {errors.password !== undefined && (
              <p className="error">{errors.password}</p>
            )}
          </div>
        ) : (
          <div id="sign-up">
            <label htmlFor="newUsername">Username</label>
            <input
              name="newUsername"
              placeholder="toto"
              aria-required="true"
              onChange={handleChange}
            />
            {errors.newUsername !== undefined && (
              <p className="error">{errors.newUsername}</p>
            )}

            <label htmlFor="newPassword">Password</label>
            <input
              name="newPassword"
              aria-required="true"
              onChange={handleChange}
            />
            {errors.newPassword !== undefined && (
              <p className="error">{errors.newPassword}</p>
            )}

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              name="confirmPassword"
              aria-required="true"
              onChange={handleChange}
            />
            {errors.confirmPassword !== undefined && (
              <p className="error">{errors.confirmPassword}</p>
            )}
          </div>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
