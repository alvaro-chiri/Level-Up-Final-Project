import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/loggedinnavbar.css";
import { Context } from "../store/appContext";

export const LoggedInNavbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container-fluid">
        <Link to="/">
          <span className="navbar-brand">LEVEL UP</span>
        </Link>
        {/* everything under this are the contents in the navbar, need to add all of the links to other pages still - Alvaro */}
        <div className="d-flex flex-row-reverse bd-highlight">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbaf-toggler icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  User
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Trainer
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/search">
                  Search
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
              {!store.token ? (
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    <button className="btn btn-sm btn-success"> Login</button>
                  </a>
                </li>
              ) : (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      className="pfpNavbar"
                      src="https://simplyilm.com/wp-content/uploads/2017/08/temporary-profile-placeholder-1.jpg"
                    />{" "}
                    Profile
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Profile
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Clients
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        History
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Schedule
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown"></hr>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#"> <button onClick={() => actions.logout()}>
                        Logout</button>
                      </a>
                    </li>
                  </ul>
                </li>
              )}
            </ul>
          </div>
          {/* <Link to="/">
            {/* need to change the link to the actual tab later */
          /*}
          </Link> */}
        </div>
      </div>
    </nav>
  );
};
