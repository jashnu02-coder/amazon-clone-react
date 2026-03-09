import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import ProductPage from "./pages/ProductPage";
import SignIn from "./pages/SignIn";
import Cart from "./pages/Cart";

function App() {

  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <Router>

      <Header setSearch={setSearch} cartCount={cart.length} />

      <Routes>

        {/* Home Page */}
        <Route 
          path="/" 
          element={<Home search={search} addToCart={addToCart} />} 
        />

        {/* Product Details Page */}
        <Route 
          path="/product/:id" 
          element={<ProductPage addToCart={addToCart} />} 
        />

        {/* Login Page */}
        <Route path="/login" element={<SignIn />} />

        {/* Cart Page */}
        <Route path="/checkout" element={<Cart cart={cart} />} />

      </Routes>

    </Router>
  );
}

export default App;