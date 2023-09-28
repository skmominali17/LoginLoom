import React, { useState, useEffect } from "react";
import "./Register.css";
import { useDb } from "../contexts/DataBaseContext";
import { useLogged } from "../contexts/UserLogged";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();
  const { addName, name } = useLogged();

  const [userDetails, setUserDetails] = useState({
    username: "",
    password: "",
  });

  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    if (isLogged) {
      navigate("/home");
    }
  }, [isLogged]);

  const [userFound, setUserFound] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const { db } = useDb();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    const usernameToSearch = userDetails.username;
    const passwordToSearch = userDetails.password;

    const foundUser = db.find(
      (user) =>
        user.username === usernameToSearch && user.password === passwordToSearch
    );

    if (foundUser) {
      setUserFound(true);
      setUserDetails({
        username: "",
        password: "",
      });
      addName(foundUser.username);
      setIsLogged(true);
    } else {
      setUserFound(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  return (
    <div className="container">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="JohnDoe123"
            name="username"
            className="username-input input"
            required
            value={userDetails.username}
            onChange={handleInputChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="password-input input"
            required
            value={userDetails.password}
            onChange={handleInputChange}
          />
          <button type="submit">Login</button>
        </form>
        <h4 style={{ marginTop: "1.5rem", textAlign: "center" }}>
          Haven't Registered? <Link to={"/"} style={{color: "#218838", textDecoration: "none"}}>Register</Link>
        </h4>
        <div style={{ color: "black" }}>
          {formSubmitted && userFound ? (
            <h3>Login Successfully user = {name}</h3>
          ) : (
            formSubmitted && <h3>Login Failed</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
