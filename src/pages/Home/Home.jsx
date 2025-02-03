import Contact from "../contact/Contact";
import CustomerReviews from "./CustomerReviews";
import HeroSlider from "./heroBanner.jsx/HeroSlider";
import OurClient from "./OurClient";
import PageTitle from "../reusable/PageTitle";
import RecentServiceCard from "../service/RecentServiceCard";
import WhyChoose from "./WhyChoose";

const Home = () => {
  return (
    <div>
    <PageTitle title="Al-FWZ Trading & Contracting | Home"/>
      <HeroSlider />
      <WhyChoose/>
      <RecentServiceCard />
      {/* <MyProjects />
      <Blog /> */}
      <OurClient/>
      <CustomerReviews/>
      {/* <Contact /> */}
    </div>
  );
};

export default Home;
