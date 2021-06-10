import React from "react";
import { HomeBanner } from "../styled-components/styled-components";
import Teapot from "../images/teapot.png";
import Footer from "../components/Footer";

export default function Page404() {
  return (
    <div>
      <p>Sorry, no coffee on this page</p>
      <HomeBanner src={Teapot}></HomeBanner>
      <Footer></Footer>
    </div>
  );
}
