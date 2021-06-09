import React from "react";
import { HomeBanner, HomeInfo } from "../styled-components/styled-components";
import BannerImage from "../images/coffee-circle.png";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <HomeInfo>Start the day off with a cup of art</HomeInfo>
      <HomeBanner src={BannerImage}></HomeBanner>
      <Footer></Footer>
    </div>
  );
}
