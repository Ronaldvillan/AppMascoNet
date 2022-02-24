import "./App.css";
import React from "react";
import NavBar from "../src/components/NavBar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Contacto from "../src/views/Contacto/Contacto";
import Home from "../src/views/Home/Home";
import Envios from "../src/views/Envios/Envios";
import { CartProvider } from "./context/CartContext"


const App = () => {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <div className="app">

          <Routes>
            <Route path="Home" element={<Home />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/envios" element={<Envios />} />

          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;
