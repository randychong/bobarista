import React from "react";
import Instagram from "../images/instagram.png";
import Facebook from "../images/facebook.png";
import Twitter from "../images/twitter.png";
import { Nav, FooterIcon } from "../styled-components/styled-components";

export default function Footer() {
  return (
    <div>
      <Nav>
        <a href="https://www.instagram.com/">
          <FooterIcon src={Instagram}></FooterIcon>
        </a>
        <a href="https://twitter.com/">
          <FooterIcon src={Twitter}></FooterIcon>
        </a>
        <a href="https://www.facebook.com/">
          <FooterIcon src={Facebook}></FooterIcon>
        </a>
      </Nav>
      <p>©Copyright 2021</p>
    </div>
  );
}
