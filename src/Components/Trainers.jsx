import React from "react";
import { Link } from "react-router-dom";
import '../assets/style/style.css';

function Trainers() {
  return (
    <section className="inner-page">

      <div className="container">

        <div className="page-heading text-center" data-aos="fade-up">

          <span>OUR EXPERTS</span>

          <h1>
            Meet your
            <br />
            <em>nutrition team.</em>
          </h1>

          <p>
            Learn from experienced professionals who
            understand that everyone's journey is different.
          </p>

        </div>


        <div className="row g-4 mt-5">


          <div className="col-lg-4 col-md-6" data-aos="fade-up">

            <div className="trainer-card">

              <div className="trainer-image">

                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=700&q=80"
                  alt="Nutrition coach"
                />

              </div>

              <div className="trainer-body">

                <span>CLINICAL NUTRITIONIST</span>

                <h3>Dr. Ananya Rao</h3>

                <p>
                  Specializes in personalized nutrition
                  and sustainable lifestyle changes.
                </p>

                <div className="trainer-social">

                  <i className="bi bi-linkedin"></i>
                  <i className="bi bi-instagram"></i>
                  <i className="bi bi-envelope"></i>

                </div>

              </div>

            </div>

          </div>


          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">

            <div className="trainer-card">

              <div className="trainer-image">

                <img
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=700&q=80"
                  alt="Fitness coach"
                />

              </div>

              <div className="trainer-body">

                <span>SPORTS NUTRITION COACH</span>

                <h3>Arjun Mehta</h3>

                <p>
                  Helps athletes improve performance,
                  recovery and everyday nutrition.
                </p>

                <div className="trainer-social">

                  <i className="bi bi-linkedin"></i>
                  <i className="bi bi-instagram"></i>
                  <i className="bi bi-envelope"></i>

                </div>

              </div>

            </div>

          </div>


          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">

            <div className="trainer-card">

              <div className="trainer-image">

                <img
                  src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=700&q=80"
                  alt="Wellness coach"
                />

              </div>

              <div className="trainer-body">

                <span>WELLNESS COACH</span>

                <h3>Priya Sharma</h3>

                <p>
                  Focuses on practical meal planning and
                  building healthier everyday routines.
                </p>

                <div className="trainer-social">

                  <i className="bi bi-linkedin"></i>
                  <i className="bi bi-instagram"></i>
                  <i className="bi bi-envelope"></i>

                </div>

              </div>

            </div>

          </div>


        </div>

      </div>

    </section>
  );
}

export default Trainers;