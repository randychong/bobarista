import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "../components/Home";
import ProductPage from "../components/ProductPage";
import Cart from "../components/Cart";
import { AppHeader } from "../styled-components/styled-components";

export default function Navbar() {
  return (
    <div>
      <AppHeader>The Bobarista</AppHeader>
      <Router>
        <nav>
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/menu">Menu</Link>
          </p>
          <p>
            <Link to="/cart">Cart</Link>
          </p>
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/menu" component={ProductPage} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </Router>
    </div>
  );
}
