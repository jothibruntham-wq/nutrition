import React from "react";
import { Link } from "react-router-dom";
import '../assets/style/style.css';

function MealPlans() {
  return (
    <section className="inner-page">

      <div className="container">

        <div className="page-heading text-center" data-aos="fade-up">

          <span>MEAL PLANS</span>

          <h1>
            Simple food.
            <br />
            <em>Powerful nutrition.</em>
          </h1>

          <p>
            Delicious and balanced meal ideas for every
            part of your day.
          </p>

        </div>


        <div className="row g-4 mt-5">


          <div className="col-lg-3 col-md-6" data-aos="fade-up">

            <div className="meal-card">

              <img
                src="https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=600&q=80"
                alt="Breakfast"
              />

              <div className="meal-content">

                <span>BREAKFAST</span>

                <h4>Power Breakfast</h4>

                <p>
                  Oats, berries, banana and Greek yogurt.
                </p>

                <div className="meal-info">
                  <span>420 kcal</span>
                  <span>28g protein</span>
                </div>

              </div>

            </div>

          </div>


          <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">

            <div className="meal-card">

              <img
                src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80"
                alt="Lunch"
              />

              <div className="meal-content">

                <span>LUNCH</span>

                <h4>Green Power Bowl</h4>

                <p>
                  Quinoa, vegetables, avocado and chickpeas.
                </p>

                <div className="meal-info">
                  <span>520 kcal</span>
                  <span>31g protein</span>
                </div>

              </div>

            </div>

          </div>


          <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="200">

            <div className="meal-card">

              <img
                src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80"
                alt="Dinner"
              />

              <div className="meal-content">

                <span>DINNER</span>

                <h4>Protein Plate</h4>

                <p>
                  Grilled protein, vegetables and sweet potato.
                </p>

                <div className="meal-info">
                  <span>560 kcal</span>
                  <span>42g protein</span>
                </div>

              </div>

            </div>

          </div>


          <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">

            <div className="meal-card">

              <img
                src="https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=600&q=80"
                alt="Healthy snack"
              />

              <div className="meal-content">

                <span>SNACK</span>

                <h4>Energy Bites</h4>

                <p>
                  Nuts, dates, seeds and natural ingredients.
                </p>

                <div className="meal-info">
                  <span>220 kcal</span>
                  <span>10g protein</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default MealPlans;