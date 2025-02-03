import ContactBubble from "../pages/share/ContactBubble";
import Footer from "../pages/share/footer/Footer"; // Import Footer component
import Header from "../pages/share/header/Header"; // Import Header component
import HeaderAlFWZ from "../pages/share/header/HeaderAlFWZ";
import { Outlet } from "react-router-dom"; // Ensure you are importing Outlet from react-router-dom

const Main = () => {
  return (
    <div className="main-container">
      {/* Render the Header */}
      {/* <Header /> */}
      <HeaderAlFWZ/>
      

      {/* Render child routes */}
      <main className="content">
        <Outlet />
      </main>

      {/* Render the Footer */}
      <Footer />

      {/* Render the Contact Bubble */}
      <ContactBubble/>
    </div>
  );
};

export default Main;
