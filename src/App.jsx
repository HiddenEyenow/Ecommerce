import React from "react";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
const App = () => {
  return (
    <Router>
      <Home />
      <Routes>
        <Route path='/' />
        <Route path='/products' />
        <Route path='/reviews' />
        <Route path='/About' element={<Footer />} />
      </Routes>
    </Router>
  );
};

export default App;