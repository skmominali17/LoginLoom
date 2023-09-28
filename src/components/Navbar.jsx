import React from "react";
import "./Home.css";
import { useLogged } from "../contexts/UserLogged";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const { name } = useLogged();
  const navigate = useNavigate()
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">Login Loom</div>
        <ul className="nav-list">
          <div className="user">
            <li className="list-item username">{name}</li>
          </div>
          <div>
            <li className="list-item">
              <button
                className="log"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('/')
                }}
              >
                Logout
              </button>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
