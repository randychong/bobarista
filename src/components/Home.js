import React from "react";
import { HomeBanner } from "../styled-components/styled-components";
import BannerImage from "../images/coffee-circle.png";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <p>Start the day off with a cup of art</p>
      <HomeBanner src={BannerImage}></HomeBanner>
      <Footer></Footer>
    </div>
  );
}
