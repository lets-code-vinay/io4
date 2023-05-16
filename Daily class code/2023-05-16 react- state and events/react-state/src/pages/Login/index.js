import React, { useState } from "react";
import "./style.css";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmit, setSubmit] = useState(false);

  const handleChange = (inputType) => (event) => {
    setSubmit(false);

    if (inputType == "userName") {
      setUserName(event.target.value);
    }
    if (inputType == "password") {
      setPassword(event.target.value);
    }
  };

  const getUserData = (event) => {
    event.preventDefault();
    setSubmit(true);
  };

  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form>
        <h3>Login Here</h3>

        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Email or Phone"
          id="username"
          onChange={handleChange("userName")}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          onChange={handleChange("password")}
        />

        <button onClick={getUserData}>Log In</button>
        <div className="social">
          <div className="go">
            <i className="fab fa-google"></i> Google
          </div>
          <div className="fb">
            <i className="fab fa-facebook"></i> Facebook
          </div>
        </div>
        <p
          style={{ backgroundColor: "brown", color: "white", marginTop: "5px" }}
        >
          User Name:<strong> {isSubmit ? userName : ""}</strong>
        </p>
        <p style={{ backgroundColor: "brown", color: "white" }}>
          Password: <strong>{isSubmit ? password : ""}</strong>
        </p>
      </form>
    </>
  );
};

export default Login;
