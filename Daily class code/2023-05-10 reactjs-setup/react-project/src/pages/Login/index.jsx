import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsGoogle } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import axios from "axios";
import SimpleSpinner from "../../components/SimpleLoader";

import "./style.css";

const Login = () => {
  const navigate = useNavigate();

  const [email, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmit, setSubmit] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const handleChange = (inputType) => (event) => {
    setSubmit(false);

    if (inputType == "email") {
      setUserName(event.target.value);
    }
    if (inputType == "password") {
      setPassword(event.target.value);
    }
  };

  /**
   * @description Handle Login button actions
   *
   * @param {Object} event
   */
  const handleLogin = async (event) => {
    event.preventDefault();
    if (!email || !password) return;

    try {
      setSubmit(true);
      setLoading(true);

      // const userData = { email: "eve.holt@reqres.in", password: "cityslicka" };
      //shorthand
      const userData = { email, password };
      const api = "https://reqres.in/api/login";

      const response = await axios.post(api, userData);

      console.log(response);

      // To set Data in localStorage
      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("token", response.data.token);

      // navigate to homepage
      if (email.length > 3 && password.length > 5) {
        navigate("/homepage");
      }
      setLoading(false);
    } catch (error) {
      console.error("error in login api", error);
      setLoading(false);
    }
  };

  return (
    <>
      {isSubmit && !email && alert("Please Enter a valid user name")}
      {isSubmit && !password && alert("Please Enter a valid password")}
      {isSubmit &&
        email.length <= 3 &&
        alert("Please Enter user name greater than 3 characters")}
      {isSubmit &&
        password.length <= 5 &&
        alert("Please Enter password greater than 5 characters")}

      <div className="login-page">
        {isLoading && isSubmit && <SimpleSpinner />}

        <div className="background">
          <div className="shape"></div>
          <div className="shape"></div>
        </div>

        <div className="login-credentials">
          <h5>Use this credentials</h5>
          <p>
            Email: <strong>eve.holt@reqres.in</strong>
          </p>
          <p>
            Password: <strong>cityslicka</strong>
          </p>
        </div>
        <form>
          <h3>Login Here</h3>

          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Email or Phone"
            id="username"
            onChange={handleChange("email")}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            onChange={handleChange("password")}
          />

          <button onClick={handleLogin}>Log In</button>
          <div className="social">
            <div className="go">
              <BsGoogle className="login-page-icons" fill="#0a152a" /> Google
            </div>
            <div className="fb">
              <FaFacebookF className="login-page-icons" fill="#0a152a" />{" "}
              Facebook
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
