import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav
        className="navbar fixed-top navbar-expand-lg navbar-light bg-light"
        style={{
          padding: "10px 20px",
          height: "120px",
          background: "linear-gradient(to right, #ffedd5, #fff0e6)",
        }}
      >
        <a className="navbar-brand" href="#">
          <img
            src="/images/logo.png"
            alt="Logo"
            style={{
              width: "220px",
              height: "150px",
              objectFit: "contain",
              marginTop: "10px",
              marginLeft: "60px",
            }}
          />
        </a>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul
            className="navbar-nav ml-auto" // changed from mr-auto to ml-auto
            style={{
              gap: "25px",
              fontSize: "20px",
              fontWeight: "500",
              marginLeft: "150px",
              alignItems: "center",
            }}
          >
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Courses
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                Feedbacks
              </a>
            </li>
          </ul>

          <div className="d-flex" style={{ gap: "20px", marginLeft: "200px" }}>
            <Link to="/login">
              <button
                className="btn btn-outline-dark my-2 my-sm-0"
                type="button"
              >
                Login
              </button>
            </Link>
            <Link to="/register">
              <button
                className="btn btn-outline-dark my-2 my-sm-0"
                type="button"
              >
                Register
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
