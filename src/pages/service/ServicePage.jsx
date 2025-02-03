import React from "react";
import RecentServiceCard from "./RecentServiceCard";
import ParallaxSection from "../reusable/Parallax";
import PageTitle from "../reusable/PageTitle";

const ServicePage = () => {
  return (
    <div>
     <PageTitle title="mhkm-programmer | Service" />
      <ParallaxSection
        imagePath="https://i.ibb.co/bJ6rJQC/coding-man-1-min.jpg"
        title=""
        subTitle=""
      />

      <RecentServiceCard />
    </div>
  );
};

export default ServicePage;
