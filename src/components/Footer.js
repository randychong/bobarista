import React from "react";
import Instagram from "../images/instagram.png";
import Facebook from "../images/facebook.png";
import Twitter from "../images/twitter.png";
import { Nav, NavIcon } from "../styled-components/styled-components";

export default function Footer() {
  return (
    <div>
      <Nav footer>
        <a href="https://www.instagram.com/">
          <NavIcon src={Instagram}></NavIcon>
        </a>
        <a href="https://twitter.com/">
          <NavIcon src={Twitter}></NavIcon>
        </a>
        <a href="https://www.facebook.com/">
          <NavIcon src={Facebook}></NavIcon>
        </a>
      </Nav>
      <p>©2021 The Bobarista</p>
    </div>
  );
}
