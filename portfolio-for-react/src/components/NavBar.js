import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();
  return (
    <div>
      <ul className="nav nav-bar">
        <li className="nav-item">
          <Link
            to="/"
            className={
              location.pathname === "/" ? "nav-link active" : "nav-link"
            }
          >
            My work
          </Link>
        </li>
        <li className="nav-one">
          <Link
            to="/about"
            className={
              location.pathname === "/about" ? "nav-link active" : "nav-link"
            }
          >
            About
          </Link>
        </li>
        <li className="nav-two">
          <Link
            to="/work"
            className={
              location.pathname === "/work" ? "nav-link active" : "nav-link"
            }
          ></Link>
        </li>
        <li className="nav-three">
          <Link
            to="/contact"
            className={
              location.pathname === "/contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact Information
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
