import React from "react";
import { Link } from "react-router-dom";
import { AuthState } from "../context/authContext";
import Logo from "../img/logo1.png";

const NavBar = () => {
  const { currentUser } = AuthState();
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <img src={Logo} alt={Logo} />
        </div>
        <div className="links">
          <Link className="link" to="/?cat=art">
            <h6>Home</h6>
          </Link>

          <span>{currentUser?.username}</span>
          <span>Logout</span>
          <span className="write">
            <Link className="link" to="/write">
              Blogs
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
