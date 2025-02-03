import React from 'react';
import ParallaxSection from '../reusable/Parallax';
import Contact from './Contact';
import PageTitle from '../reusable/PageTitle';

const ContactPage = () => {
    return (
        <div>
         <PageTitle title="mhkm-programmer | Hire Me" />
             <ParallaxSection
        imagePath="https://i.ibb.co/NxNW6Xx/unemployed-man-desperately-looking-job-holding-need-job-sign-1-min.jpg"
        title=""
        subTitle=""
      />
      <Contact/>

        </div>
    );
};

export default ContactPage;