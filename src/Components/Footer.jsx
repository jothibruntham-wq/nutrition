import React from "react";
import { Link } from "react-router-dom";
import '../assets/style/style.css';


function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer-top">

          <div className="row g-5">


            <div className="col-lg-4">

              <Link to="/" className="footer-logo">

                <span>
                  <i className="bi bi-leaf-fill"></i>
                </span>

                NutriNova

              </Link>

              <p className="footer-description">
                Modern nutrition guidance for real people,
                real lifestyles and long-term health.
              </p>


              <div className="footer-social">

                <a href="#">
                  <i className="bi bi-instagram"></i>
                </a>

                <a href="#">
                  <i className="bi bi-facebook"></i>
                </a>

                <a href="#">
                  <i className="bi bi-linkedin"></i>
                </a>

                <a href="#">
                  <i className="bi bi-youtube"></i>
                </a>

              </div>

            </div>


            <div className="col-lg-2 col-md-4">

              <h5>Explore</h5>

              <ul>

                <li>
                  <Link to="/">Home</Link>
                </li>

                <li>
                  <Link to="/programs">Programs</Link>
                </li>

                <li>
                  <Link to="/meal-plans">Meal Plans</Link>
                </li>

                <li>
                  <Link to="/recipes">Recipes</Link>
                </li>

              </ul>

            </div>


            <div className="col-lg-2 col-md-4">

              <h5>Resources</h5>

              <ul>

                <li>
                  <Link to="/bmi">BMI Calculator</Link>
                </li>

                <li>
                  <Link to="/trainers">Our Trainers</Link>
                </li>

                <li>
                  <Link to="/contact">Consultation</Link>
                </li>

                <li>
                  <Link to="/contact">Support</Link>
                </li>

              </ul>

            </div>


            <div className="col-lg-4">

              <h5>Stay nourished.</h5>

              <p>
                Get healthy recipes, nutrition tips and
                wellness insights in your inbox.
              </p>


              <div className="newsletter">

                <input
                  type="email"
                  placeholder="Your email address"
                />

                <button>
                  <i className="bi bi-arrow-right"></i>
                </button>

              </div>

            </div>


          </div>

        </div>


        <div className="footer-bottom">

          <p>
            © 2026 NutriNova. All rights reserved.
          </p>

          <div>

            <a href="#">Privacy</a>
            <a href="#">Terms</a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;