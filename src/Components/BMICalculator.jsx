import React, { useState } from "react";
import '../assets/style/style.css';
import { Link } from "react-router-dom";

function BMICalculator() {

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");

  const calculateBMI = () => {

    if (!height || !weight) {
      setMessage("Please enter your height and weight.");
      setBmi(null);
      return;
    }

    const heightInMeters = Number(height) / 100;

    const result =
      Number(weight) / (heightInMeters * heightInMeters);

    setBmi(result.toFixed(1));

    if (result < 18.5) {
      setMessage("Underweight");
    } else if (result < 25) {
      setMessage("Healthy range");
    } else if (result < 30) {
      setMessage("Overweight");
    } else {
      setMessage("Obesity range");
    }
  };


  return (
    <section className="inner-page">

      <div className="container">

        <div className="page-heading text-center" data-aos="fade-up">

          <span>SMART HEALTH TOOL</span>

          <h1>
            Know your
            <br />
            <em>BMI.</em>
          </h1>

          <p>
            Get a quick BMI estimate and understand
            where you currently stand.
          </p>

        </div>


        <div className="row justify-content-center mt-5">

          <div className="col-lg-8">

            <div className="bmi-box" data-aos="zoom-in">

              <div className="row align-items-center">

                <div className="col-md-6">

                  <h3>
                    BMI Calculator
                  </h3>

                  <p>
                    Enter your basic measurements to
                    calculate your Body Mass Index.
                  </p>


                  <div className="mb-3">

                    <label>
                      Height
                    </label>

                    <div className="input-group">

                      <input
                        type="number"
                        className="form-control"
                        placeholder="Enter height"
                        value={height}
                        onChange={(e) =>
                          setHeight(e.target.value)
                        }
                      />

                      <span className="input-group-text">
                        cm
                      </span>

                    </div>

                  </div>


                  <div className="mb-4">

                    <label>
                      Weight
                    </label>

                    <div className="input-group">

                      <input
                        type="number"
                        className="form-control"
                        placeholder="Enter weight"
                        value={weight}
                        onChange={(e) =>
                          setWeight(e.target.value)
                        }
                      />

                      <span className="input-group-text">
                        kg
                      </span>

                    </div>

                  </div>


                  <button
                    className="btn btn-nutri w-100"
                    onClick={calculateBMI}
                  >
                    Calculate BMI
                    <i className="bi bi-calculator ms-2"></i>
                  </button>

                </div>


                <div className="col-md-6">

                  <div className="bmi-result">

                    <span>Your BMI</span>

                    <h2>
                      {bmi ? bmi : "--"}
                    </h2>

                    <div className="bmi-status">
                      {message || "Enter your details"}
                    </div>

                    <div className="bmi-scale">

                      <div className="scale-line"></div>

                      <div className="scale-labels">
                        <span>Under</span>
                        <span>Healthy</span>
                        <span>Over</span>
                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default BMICalculator;