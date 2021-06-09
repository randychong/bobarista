import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "../components/Home";
import ProductPage from "../components/ProductPage";
import Cart from "../components/Cart";
import {
  AppHeader,
  NavIcon,
  Nav,
  Info,
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
          <div>
            <Link to="/" className="nav-link">
              <NavIcon primary src={HomeIcon}></NavIcon>
              <Info link>Home</Info>
            </Link>
          </div>
          <div>
            <Link to="/menu" className="nav-link">
              <NavIcon primary src={CoffeeIcon}></NavIcon>
              <Info link>Menu</Info>
            </Link>
          </div>
          <div>
            <Link to="/cart" className="nav-link">
              <NavIcon primary src={CartIcon}></NavIcon>
              <Info link>Cart</Info>
            </Link>
          </div>
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
