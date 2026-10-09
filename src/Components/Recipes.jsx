import React from "react";
import { Link } from "react-router-dom";
import '../assets/style/style.css';


function Recipes() {
  return (
    <section className="inner-page">

      <div className="container">

        <div className="page-heading text-center" data-aos="fade-up">

          <span>HEALTHY RECIPES</span>

          <h1>
            Make healthy
            <br />
            <em>taste amazing.</em>
          </h1>

          <p>
            Easy recipes packed with nutrition and flavor.
          </p>

        </div>


        <div className="row g-4 mt-5">


          <div className="col-lg-4 col-md-6" data-aos="fade-up">

            <div className="recipe-card">

              <div className="recipe-image">

                <img
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80"
                  alt="Healthy bowl"
                />

                <span className="recipe-tag">
                  HIGH PROTEIN
                </span>

              </div>

              <div className="recipe-body">

                <small>25 MIN • EASY</small>

                <h3>Green Protein Bowl</h3>

                <p>
                  A colorful bowl packed with vegetables,
                  grains and plant-based protein.
                </p>

                <button>
                  View Recipe
                  <i className="bi bi-arrow-up-right"></i>
                </button>

              </div>

            </div>

          </div>


          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">

            <div className="recipe-card">

              <div className="recipe-image">

                <img
                  src="https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=800&q=80"
                  alt="Breakfast bowl"
                />

                <span className="recipe-tag">
                  BREAKFAST
                </span>

              </div>

              <div className="recipe-body">

                <small>10 MIN • EASY</small>

                <h3>Berry Power Bowl</h3>

                <p>
                  A refreshing breakfast bowl with berries,
                  yogurt, oats and natural sweetness.
                </p>

                <button>
                  View Recipe
                  <i className="bi bi-arrow-up-right"></i>
                </button>

              </div>

            </div>

          </div>


          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">

            <div className="recipe-card">

              <div className="recipe-image">

                <img
                  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80"
                  alt="Healthy salad"
                />

                <span className="recipe-tag">
                  LOW CALORIE
                </span>

              </div>

              <div className="recipe-body">

                <small>15 MIN • EASY</small>

                <h3>Garden Fresh Salad</h3>

                <p>
                  Crisp vegetables, healthy fats and a
                  delicious homemade dressing.
                </p>

                <button>
                  View Recipe
                  <i className="bi bi-arrow-up-right"></i>
                </button>

              </div>

            </div>

          </div>


        </div>

      </div>

    </section>
  );
}

export default Recipes;