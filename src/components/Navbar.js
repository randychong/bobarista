import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "../components/Home";
import ProductPage from "../components/ProductPage";
import Cart from "../components/Cart";
import {
  AppHeader,
  NavIcon,
  Nav,
} from "../styled-components/styled-components";
import HomeIcon from "../images/home.png";
import CoffeeIcon from "../images/coffee-cup.png";
import CartIcon from "../images/shopping-cart.png";
import Page404 from "../components/Page404";

export default function Navbar() {
  return (
    <div>
      <AppHeader>The Bobarista</AppHeader>
      <Router>
        <Nav primary>
          <p>
            <Link to="/">
              <NavIcon primary src={HomeIcon}></NavIcon>
            </Link>
          </p>
          <p>
            <Link to="/menu">
              <NavIcon primary src={CoffeeIcon}></NavIcon>
            </Link>
          </p>
          <p>
            <Link to="/cart">
              <NavIcon primary src={CartIcon}></NavIcon>
            </Link>
          </p>
        </Nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/menu" component={ProductPage} />
          <Route exact path="/cart" component={Cart} />
          <Route component={Page404} />
        </Switch>
      </Router>
    </div>
  );
}
