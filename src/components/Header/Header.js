import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./header.css";
import logo from "../../asset/logo.png"


export default function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("jwt");
    navigate("/login");
  };
  return (
    <nav>
      <div class="nav-wrapper">
        {/* <a href="#" className="black-text brand-logo center">
          <img src={logo}
            style={{ height: 64, width: 170 }}
            alt="logo" />
        </a> */}
        <ul id="nav-mobile" class="left hide-on-med-and-down">
          <li>
            <a href="sass.html" className="black-text">
              BUY
            </a>
          </li>
          <li>
            <a href="badges.html" className="black-text">
              RENT
            </a>
          </li>
          <li>
            <a href="collapsible.html" className="black-text">
              SELL
            </a>
          </li>
        </ul>

        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a href="sass.html" className="black-text">
              Manage Rental
            </a>
          </li>
          <li>
            <a href="sass.html" className="black-text">
              Advertise
            </a>
          </li>
          <li>
            <Link className="black-text" to="/login">
              Sign in
            </Link>
          </li>
          <li>
            <Link className="black-text" to="/signup">
              Sign up
            </Link>
          </li>
          <li>
            <button type="button" onClick={handleLogout}>
              Log out
            </button>
          </li>
          <li>
            <a href="" className="black-text">
              <i className="material-icons left">help</i>help
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
