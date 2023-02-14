import React, { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState();

  const calculateBmi = (e) => {
    e.preventDefault();
    let bmiValue;
    if (weight && weight > 0 && height && height > 0) {
      bmiValue = weight / (height / 100) ** 2;
      setBmi(bmiValue);
    } else {
      alert("Weight or Height has invalid value");
    }
  };

  const onResetClick = () => {
    setWeight();
    setHeight();
  };

  return (
    <div className="box">
      <div className="form-box">
        <form onSubmit={calculateBmi}>
          <h2 className={!bmi ? "pb-sm" : ""}>BMI CALCULATOR</h2>
          {bmi && (
            <div className="bmi">
              Your Body Mass Index is:{" "}
              <b>
                {bmi} Kg/m
                <sup>2</sup>
              </b>
            </div>
          )}

          <input
            className="form-input"
            type="number"
            onChange={(e) => {
              setWeight(e.target.value);
            }}
            placeholder="Weight in Kilogram"
          ></input>
          <input
            className="form-input"
            type="number"
            placeholder="Height in Centimeter"
            onChange={(e) => {
              setHeight(e.target.value);
            }}
          ></input>
          <button type="submit" className="form-button-primary">
            Calculate
          </button>
          <button
            type="reset"
            onClick={onResetClick}
            className="form-button-outline mt-sm mb-sm"
          >
            Reset
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
