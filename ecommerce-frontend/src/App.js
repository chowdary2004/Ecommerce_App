import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthForm from "./components/AuthForm";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";

const App = () => {
  const handleAuthSuccess = () => {
    window.location.href = "/";
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<AuthForm isLogin={true} onAuthSuccess={handleAuthSuccess} />} />
        <Route path="/register" element={<AuthForm isLogin={false} onAuthSuccess={handleAuthSuccess} />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<ProductList />} />
      </Routes>
    </Router>
  );
};

export default App;
