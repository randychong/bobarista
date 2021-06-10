import React from "react";
import { HomeBanner, Info } from "../styled-components/styled-components";
import BannerImage from "../images/coffee-circle.png";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Info home>Start the day off with a cup of art</Info>

      <HomeBanner src={BannerImage}></HomeBanner>

      <Info home>
        There are times when you need an invigorating cup of coffee, and there
        are times when you need some refreshing boba tea.
      </Info>

      <Info home>
        A place where you can relax and dream, all while enjoying a cup from the
        Bobarista.
      </Info>

      <Footer></Footer>
    </div>
  );
}
