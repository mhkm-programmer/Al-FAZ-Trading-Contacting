import React from 'react';
import FAQSection from '../reusable/FAQSection';
import ParallaxSection from '../reusable/Parallax';
import PageTitle from '../reusable/PageTitle';

const FaqPage = () => {
    return (
        <div>
         <PageTitle title="mhkm-programmer | FAQs" />
             <ParallaxSection
        imagePath="https://i.ibb.co/bNDvJWf/FAQ-Help-1-min.jpg"
        // title="Unlocking Insights: Frequently Asked Questions"
        // subTitle="Answers to Your Burning Questions About My Work and Process"
      />
      <FAQSection/>

        </div>
    );
};

export default FaqPage;