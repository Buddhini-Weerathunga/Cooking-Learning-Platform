import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Removed unused import
import "bootstrap/js/dist/dropdown"; // Ensure Bootstrap JavaScript is loaded
import { NavLink } from "react-router-dom";
// No additional code is required at the $PLACEHOLDER$ location for this component to function correctly.
function SideMenu() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div
          className={`bg-dark text-white d-flex flex-column justify-content-between min-vh-100 p-3 ${
            isExpanded ? "col-auto col-sm-2" : "col-auto col-sm-1 text-center"
          }`}
          style={{ transition: "width 0.3s" }} // Smooth transition effect
        >
          {/* Toggle Button */}
          <button
            className="btn text-white mb-1 mt-1"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <img
              src="/images/navlogo.png"
              alt="Logo"
              className="img-fluid"
              style={{
                width: isExpanded ? "200px" : "160px", // Smaller when collapsed, larger when expanded
                height: isExpanded ? "200px" : "100px",
                transition: "all 0.3s ease-in-out", // Smooth animation
                marginTop: "-20px",
              }}
            />
          </button>

          <button
            className="btn text-white mb-1"
            onClick={() => setIsExpanded(!isExpanded)}
            style={{ marginTop: "-30px" }}
          ></button>

          {/* Sidebar Links */}
          <ul className="nav flex-column" style={{ marginBottom: "400px" }}>
            <li className="nav-item">
              <a
                className="nav-link text-white d-flex align-items-center"
                href="javascript:void(0)"
              >
                <i className="bi bi-speedometer2 fs-5"></i>
                {isExpanded && <span className="ms-2">Dashboard</span>}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white d-flex align-items-center"
                href="#"
              >
                {isExpanded && <span className="ms-2">Bookings</span>}
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link text-white d-flex align-items-center"
                href="#"
              >
                {isExpanded && <span className="ms-2">Users</span>}
              </a>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link text-white d-flex align-items-center"
                to="/admin/destination/index"
              >
                {isExpanded && <span className="ms-2">Destinations</span>}
              </NavLink>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white d-flex align-items-center"
                href="#"
              >
                {isExpanded && <span className="ms-2">Tours</span>}
              </a>
            </li>

            <NavLink
              to="/admin/feedback"
              className="nav-link text-white d-flex align-items-center"
            >
              {isExpanded && <span className="ms-2">Feedback</span>}
            </NavLink>

            <li className="nav-item">
              <a
                className="nav-link text-white d-flex align-items-center"
                href="#"
              >
                {isExpanded && <span className="ms-2">Settings</span>}
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link text-white d-flex align-items-center"
                href="#"
              >
                <i className="bi bi-box-arrow-right fs-5"></i>
                {isExpanded && <span className="ms-2">Logout</span>}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
