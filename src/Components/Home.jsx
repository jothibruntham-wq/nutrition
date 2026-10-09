import React from "react";
import { Link } from "react-router-dom";
import '../assets/style/style.css';

function Home() {
  return (
    <>

      {/* HERO */}

      <section className="hero-section">

        <div className="container">

          <div className="row align-items-center min-vh-100">

            <div className="col-lg-6" data-aos="fade-right">

              <div className="hero-badge">
                <i className="bi bi-stars"></i>
                Smart Nutrition. Better Life.
              </div>

              <h1 className="hero-title">
                Nourish Your
                <span> Body.</span>
                <br />
                Transform Your
                <span> Life.</span>
              </h1>

              <p className="hero-text">
                Personalized nutrition plans, expert guidance and
                science-backed strategies designed to help you become
                the healthiest version of yourself.
              </p>

              <div className="hero-buttons">

                <Link to="/programs" className="btn btn-nutri btn-lg">
                  Explore Programs
                  <i className="bi bi-arrow-right ms-2"></i>
                </Link>

                <Link to="/bmi" className="btn btn-outline-dark btn-lg ms-2">
                  Calculate BMI
                </Link>

              </div>

              <div className="hero-trust">

                <div className="avatar-group">
                  <div>NK</div>
                  <div>AR</div>
                  <div>VS</div>
                  <div>+</div>
                </div>

                <div>
                  <strong>5,000+</strong>
                  <small>Healthy transformations</small>
                </div>

              </div>

            </div>


            <div className="col-lg-6" data-aos="zoom-in">

              <div className="hero-image-wrapper">

                <div className="hero-circle"></div>

                <img
                  src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=900&q=85"
                  alt="Healthy nutrition"
                  className="hero-image"
                />

                <div className="floating-card calorie-card">

                  <div className="floating-icon">
                    <i className="bi bi-fire"></i>
                  </div>

                  <div>
                    <small>Daily Calories</small>
                    <h4>1,850 kcal</h4>
                  </div>

                </div>


                <div className="floating-card protein-card">

                  <div className="protein-progress">
                    <i className="bi bi-activity"></i>
                  </div>

                  <div>
                    <small>Protein Goal</small>
                    <h4>82 / 100g</h4>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* STATS */}

      <section className="stats-section">

        <div className="container">

          <div className="row text-center">

            <div className="col-md-3 col-6" data-aos="fade-up">
              <h2>5K+</h2>
              <p>Happy Clients</p>
            </div>

            <div className="col-md-3 col-6" data-aos="fade-up" data-aos-delay="100">
              <h2>120+</h2>
              <p>Meal Plans</p>
            </div>

            <div className="col-md-3 col-6" data-aos="fade-up" data-aos-delay="200">
              <h2>15+</h2>
              <p>Nutrition Experts</p>
            </div>

            <div className="col-md-3 col-6" data-aos="fade-up" data-aos-delay="300">
              <h2>95%</h2>
              <p>Success Rate</p>
            </div>

          </div>

        </div>

      </section>


      {/* WHY US */}

      <section className="section-padding">

        <div className="container">

          <div className="section-heading text-center" data-aos="fade-up">

            <span>WHY NUTRINOVA</span>

            <h2>
              Nutrition that fits
              <br />
              <em>your lifestyle.</em>
            </h2>

            <p>
              No extreme diets. No complicated rules.
              Just practical nutrition strategies.
            </p>

          </div>


          <div className="row g-4 mt-4">

            <div className="col-lg-3 col-md-6" data-aos="fade-up">

              <div className="feature-card">

                <div className="feature-icon">
                  <i className="bi bi-person-heart"></i>
                </div>

                <h4>Personalized</h4>

                <p>
                  Nutrition plans created around your goals,
                  lifestyle and preferences.
                </p>

              </div>

            </div>


            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">

              <div className="feature-card">

                <div className="feature-icon">
                  <i className="bi bi-clipboard2-pulse"></i>
                </div>

                <h4>Science Based</h4>

                <p>
                  Smart nutrition strategies backed by
                  modern nutritional science.
                </p>

              </div>

            </div>


            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">

              <div className="feature-card">

                <div className="feature-icon">
                  <i className="bi bi-bar-chart-line"></i>
                </div>

                <h4>Track Progress</h4>

                <p>
                  Monitor your nutrition, habits and
                  progress with simple tracking.
                </p>

              </div>

            </div>


            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">

              <div className="feature-card">

                <div className="feature-icon">
                  <i className="bi bi-heart-pulse"></i>
                </div>

                <h4>Long-Term Health</h4>

                <p>
                  Build healthy habits that stay with
                  you for life.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="home-cta">

        <div className="container">

          <div className="cta-box" data-aos="zoom-in">

            <div>

              <span>READY TO START?</span>

              <h2>
                Your healthiest
                <br />
                chapter starts today.
              </h2>

            </div>

            <Link to="/contact" className="btn btn-light btn-lg">
              Book Consultation
              <i className="bi bi-arrow-up-right ms-2"></i>
            </Link>

          </div>

        </div>

      </section>

    </>
  );
}

export default Home;