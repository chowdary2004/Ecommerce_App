import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
      <Switch>
        <Route path="/login">
          <AuthForm isLogin={true} onAuthSuccess={handleAuthSuccess} />
        </Route>
        <Route path="/register">
          <AuthForm isLogin={false} onAuthSuccess={handleAuthSuccess} />
        </Route>
        <Route path="/products/:id" component={ProductDetail} />
        <Route path="/cart" component={Cart} />
        <Route path="/" component={ProductList} />
      </Switch>
    </Router>
  );
};

export default App;
