import React from "react";
import { Link } from "react-router-dom";
import "../contest/contestitem/item.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="">
          Coder's Calendar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <li class="nav-item dropdown">
              <Link
                class="nav-link dropdown-toggle"
                to=""
                id="navbarDropdownMenuLink"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Coding websites
              </Link>
              <div
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <Link class="dropdown-item" to="leetcode">
                  LeetCode
                </Link>
                <Link class="dropdown-item" to="codeforces">
                  CodeForces
                </Link>
                <Link class="dropdown-item" to="codechef">
                  CodeChef
                </Link>
                <Link class="dropdown-item" to="hackerearth">
                  HackerEarth
                </Link>
                <Link class="dropdown-item" to="hackerrank">
                  HackerRank
                </Link>
                <Link class="dropdown-item" to="atcoder">
                  AtCoder
                </Link>
                <Link class="dropdown-item" to="kickstart">
                  KickStart
                </Link>
                <Link class="dropdown-item" to="topcoder">
                  TopCoder
                </Link>
              </div>
            </li>
          </div>
        </div>
      
          <Link
            className="nav-link"
            style={{ color: "red", float: "right" }}
            to="/notification">
            Notification
          </Link>
        
      </nav>
    </>
  );
}
