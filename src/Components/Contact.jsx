import React from "react";
import { Link } from "react-router-dom";
import '../assets/style/style.css';

function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your consultation request has been submitted.");
  };

  return (
    <section className="inner-page">

      <div className="container">

        <div className="page-heading text-center" data-aos="fade-up">

          <span>GET IN TOUCH</span>

          <h1>
            Let's build your
            <br />
            <em>healthier future.</em>
          </h1>

          <p>
            Have questions? Our team is ready to help
            you begin your nutrition journey.
          </p>

        </div>


        <div className="row g-5 mt-4">


          <div className="col-lg-5" data-aos="fade-right">

            <div className="contact-info">

              <h3>
                Start a conversation.
              </h3>

              <p>
                Tell us about your goals and our nutrition
                team will help you find the right approach.
              </p>


              <div className="contact-item">

                <div className="contact-icon">
                  <i className="bi bi-envelope"></i>
                </div>

                <div>
                  <small>Email</small>
                  <h6>hello@nutrinova.com</h6>
                </div>

              </div>


              <div className="contact-item">

                <div className="contact-icon">
                  <i className="bi bi-telephone"></i>
                </div>

                <div>
                  <small>Phone</small>
                  <h6>+91 98765 43210</h6>
                </div>

              </div>


              <div className="contact-item">

                <div className="contact-icon">
                  <i className="bi bi-geo-alt"></i>
                </div>

                <div>
                  <small>Studio</small>
                  <h6>Bengaluru, India</h6>
                </div>

              </div>


            </div>

          </div>


          <div className="col-lg-7" data-aos="fade-left">

            <div className="contact-form">

              <form onSubmit={handleSubmit}>

                <div className="row">

                  <div className="col-md-6 mb-3">

                    <label>Your Name</label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter your name"
                      required
                    />

                  </div>


                  <div className="col-md-6 mb-3">

                    <label>Email Address</label>

                    <input
                      type="email"
                      className="form-control"
                      placeholder="Enter your email"
                      required
                    />

                  </div>


                  <div className="col-md-6 mb-3">

                    <label>Phone Number</label>

                    <input
                      type="tel"
                      className="form-control"
                      placeholder="+91"
                    />

                  </div>


                  <div className="col-md-6 mb-3">

                    <label>Interested In</label>

                    <select className="form-select">

                      <option>Weight Management</option>
                      <option>Muscle Building</option>
                      <option>Healthy Lifestyle</option>
                      <option>Sports Nutrition</option>

                    </select>

                  </div>


                  <div className="col-12 mb-4">

                    <label>Your Message</label>

                    <textarea
                      className="form-control"
                      rows="5"
                      placeholder="Tell us about your goals..."
                    ></textarea>

                  </div>


                  <div className="col-12">

                    <button
                      type="submit"
                      className="btn btn-nutri btn-lg"
                    >
                      Send Message
                      <i className="bi bi-arrow-up-right ms-2"></i>
                    </button>

                  </div>

                </div>

              </form>

            </div>

          </div>


        </div>

      </div>

    </section>
  );
}

export default Contact;