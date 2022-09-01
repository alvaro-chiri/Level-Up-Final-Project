import React from "react";

export const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        height: "70px",
        display: "flex",
        "justify-content": "space-between",
        border: "0.5px solid black",
        padding: "0px",
      }}
    >
      <div className="navbar-brand" href="#">
        Level Up
      </div>

      <div
        className="navbar"
        style={{
          display: "flex",
          "justify-content": "flex-end",
          padding: "0px",
        }}
      >
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a
              className="nav-link"
              href="#"
              style={{
                borderRight: "0.5px solid black",
                borderLeft: "0.5px solid black",
              }}
            >
              User <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
              style={{
                borderRight: "0.5px solid black",
                borderLeft: "0.5px solid black",
              }}
            >
              Trainer
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="#"
              style={{
                borderRight: "0.5px solid black",
                borderLeft: "0.5px solid black",
              }}
            >
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
