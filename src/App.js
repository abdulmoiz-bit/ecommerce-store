import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Product from "./components/Product";
import Login from "./components/Login";
import SignUp from "./components/Register";
import Cart from "./components/Cart";
//import About from "./components/About";
//import Contact from "./components/Contact";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";

window.onload = function () {
  const primaryNav = document.querySelector(".primary-navigation")
  const navToggle = document.querySelector(".mobile-nav-toggle")

  navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible')
    if (visibility === 'false') {
      primaryNav.setAttribute('data-visible', true)
    }
    else if (visibility === 'true') {
      primaryNav.setAttribute('data-visible', false)
    }
  });
};


export const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<SignUp />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:id" element={<Product />} />
        <Route exact path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer/>
    </> 
  );
};

export default App;
