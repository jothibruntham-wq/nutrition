import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Components/Home";
import Programs from "./Components/Programs";
import MealPlans from "./Components/MealPlans";
import Recipes from "./Components/Recipes";
import BMICalculator from "./Components/BMICalculator";
import Trainers from "./Components/Trainers";
import Contact from "./Components/Contact";

function App() {
  return (
    <HashRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Programs" element={<Programs />} />
        <Route path="/Mealplans" element={<MealPlans />} />
        <Route path="/Recipes" element={<Recipes />} />
        <Route path="/Bmicalclator" element={<BMICalculator />} />
        <Route path="/Trainers" element={<Trainers />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>

      <Footer />
    </HashRouter>
  );
}

export default App;