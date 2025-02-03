import React from 'react';
import ParallaxSection from '../reusable/Parallax';
import Blog from './Blog';
import PageTitle from '../reusable/PageTitle';


const BlogPage = () => {
    return (
        <div>
         <PageTitle title="mhkm-programmer | Blog" />
              <ParallaxSection
      
        imagePath="https://i.ibb.co/tq8h1Hm/personal-blog.jpg"
       
        title=""
        subTitle=""
      />
      <Blog/>
        </div>
    );
};

export default BlogPage;