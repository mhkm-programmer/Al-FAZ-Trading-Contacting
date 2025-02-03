import React from "react";

import AboutMe from "./AboutMe";
import Parallax from "../reusable/Parallax";
import ParallaxSection from "../reusable/Parallax";
import PageTitle from "../reusable/PageTitle";

const AboutMePage = () => {
  return (
    <div>
     <PageTitle title="mhkm-programmer | About Me" />
      <ParallaxSection
        imagePath="https://i.ibb.co/CHCNVdF/About-Me-Transparent-PNG.jpg"
        title=""
        subTitle=""
      />

      <AboutMe />
    </div>
  );
};

export default AboutMePage;
