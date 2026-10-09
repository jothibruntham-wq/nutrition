import React from "react";
import { Link } from "react-router-dom";
import '../assets/style/style.css';


function Programs() {
  return (
    <section className="inner-page">

      <div className="container">

        <div className="page-heading text-center" data-aos="fade-up">

          <span>OUR PROGRAMS</span>

          <h1>
            Nutrition programs
            <br />
            <em>built for you.</em>
          </h1>

          <p>
            Choose a program designed around your unique
            health and lifestyle goals.
          </p>

        </div>


        <div className="row g-4 mt-5">


          <div className="col-lg-6" data-aos="fade-up">

            <div className="program-card">

              <div className="program-number">01</div>

              <div className="program-icon">
                <i className="bi bi-person-check"></i>
              </div>

              <h3>Weight Management</h3>

              <p>
                Build sustainable eating habits and achieve
                healthy weight management without extreme diets.
              </p>

              <button className="program-link">
                Learn More
                <i className="bi bi-arrow-right"></i>
              </button>

            </div>

          </div>


          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">

            <div className="program-card">

              <div className="program-number">02</div>

              <div className="program-icon">
                <i className="bi bi-lightning-charge"></i>
              </div>

              <h3>Muscle & Strength</h3>

              <p>
                Fuel your training with balanced nutrition
                focused on muscle growth and recovery.
              </p>

              <button className="program-link">
                Learn More
                <i className="bi bi-arrow-right"></i>
              </button>

            </div>

          </div>


          <div className="col-lg-6" data-aos="fade-up">

            <div className="program-card">

              <div className="program-number">03</div>

              <div className="program-icon">
                <i className="bi bi-basket2"></i>
              </div>

              <h3>Healthy Lifestyle</h3>

              <p>
                Create simple everyday habits that improve
                your energy, nutrition and overall wellbeing.
              </p>

              <button className="program-link">
                Learn More
                <i className="bi bi-arrow-right"></i>
              </button>

            </div>

          </div>


          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">

            <div className="program-card">

              <div className="program-number">04</div>

              <div className="program-icon">
                <i className="bi bi-trophy"></i>
              </div>

              <h3>Sports Nutrition</h3>

              <p>
                Optimize performance, energy and recovery
                with nutrition designed for active lifestyles.
              </p>

              <button className="program-link">
                Learn More
                <i className="bi bi-arrow-right"></i>
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Programs;