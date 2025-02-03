import React from 'react';
import MyProjects from '../myProjects/MyProjects';
import ParallaxSection from '../reusable/Parallax';
import PageTitle from '../reusable/PageTitle';

const PortfolioPage = () => {
    return (
        <div>
         <PageTitle title="mhkm-programmer | Portfolio" />
         <ParallaxSection
        imagePath="https://i.ibb.co/LZ8MFBj/programming-background-collage-1-min-1-min.jpg"
        title=""
        subTitle=""
      />

            <MyProjects/>
        </div>
    );
};

export default PortfolioPage;