import React, { useState, useEffect } from "react";
import { useDb } from "../contexts/DataBaseContext";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const { db, addToDb } = useDb();
  const [details, setDetails] = useState({
    username: "",
    password: "",
  });

  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    if (isLogged) {
      navigate("/login");
    }
  }, [isLogged]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const usernameToSearch = details.username;
    const existingUser = db.find((user) => user.username === usernameToSearch);
    if (existingUser) {
      alert("Username already exists. Please choose a different username.");
      setDetails({ username: "", password: "" });
      return;
    }
    addToDb(details);
    setDetails({ username: "", password: "" });
    setIsLogged(true);
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
            value={details.username}
            onChange={(e) =>
              setDetails({ ...details, username: e.target.value })
            }
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="password-input input"
            required
            value={details.password}
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
          />
          <button type="submit">Register</button>
        </form>
        <h4 style={{ marginTop: "1.5rem", textAlign: "center" }}>
          Already Registered? <Link to={"/login"} style={{color: "#218838", textDecoration: "none"}}>Login</Link>
        </h4>
        <div>
          <h4>Database Contents {isLogged}</h4>
          <pre style={{ color: "black" }}>{JSON.stringify(db, null, 2)}</pre>
        </div>
      </div>
    </div>
  );
};

export default Register;
