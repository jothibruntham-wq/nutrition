import React from "react";
import { Link } from "react-router-dom";
import "../assets/style/style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top custom-navbar">
      <div className="container">

        <Link className="navbar-brand brand-logo" to="/">
          <span className="brand-icon">
            <i className="bi bi-leaf-fill"></i>
          </span>
          Nutri<span>Nova</span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">

          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/programs">
                Programs
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/mealplans">
                Meal Plans
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/recipes">
                Recipes
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/bmi">
                BMI
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/trainers">
                Trainers
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>

          </ul>

          <Link to="/contact" className="btn btn-nutri">
            Start Journey
            <i className="bi bi-arrow-up-right ms-2"></i>
          </Link>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
