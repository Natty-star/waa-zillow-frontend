import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./header.css";
import logo from "../../asset/logo.png";

export default function Header() {
  const navigate = useNavigate();

  const [logedin, setLogedin] = useState(false);
  const [userRole, setUserRole] = useState("");
  const [loggedInUser, setloggedInUser] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("jwt");
    navigate("/login");
  };

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"));
    setloggedInUser(user);
    if (loggedInUser) {
      setUserRole(user.roles[0].name);
      console.log(userRole);
    }
  });
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
          {userRole == "admin" && (
            <li>
              <a href="/admin-dashboard" className="black-text">
                Dashboard
              </a>
            </li>
          )}
          {userRole == "admin" && (
            <li>
              <a href="/users" className="black-text">
                Manage User
              </a>
            </li>
          )}

          {userRole == "owner" && (
            <li>
              <a href="/addProperties" className="black-text">
                Add properties
              </a>
            </li>
          )}
          {userRole == "owner" && (
            <li>
              <a href="/orders" className="black-text">
                Manage Rental
              </a>
            </li>
          )}

          {loggedInUser == null && (
            <li>
              <Link className="black-text" to="/login">
                Sign in
              </Link>
            </li>
          )}

          <li>
            <Link className="black-text" to="/signup">
              Sign up
            </Link>
          </li>
          {loggedInUser && (
            <li>
              <button type="button" onClick={handleLogout}>
                Log out
              </button>
            </li>
          )}

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
