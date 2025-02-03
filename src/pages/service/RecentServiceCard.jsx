import { FaArrowLeft, FaArrowRight, FaWhatsapp } from "react-icons/fa";
import { useRef, useState } from "react";

import { Transition } from "react-transition-group";

const MyServices = () => { 

const [Services, setServices] = useState([
    {
      id: 1,
      title: "Custom Web Application Development",
      description:
        " Custom web application development involves building tailored web applications from scratch to meet specific business requirements.",
      image:[
        "https://i.ibb.co/jfLzYTz/Custom-Web-Application-Development-min.jpg",
        "https://i.ibb.co/jfLzYTz/Custom-Web-Application-Development-min.jpg",
        "https://i.ibb.co/jfLzYTz/Custom-Web-Application-Development-min.jpg",
        "https://i.ibb.co/jfLzYTz/Custom-Web-Application-Development-min.jpg",
        "https://i.ibb.co/jfLzYTz/Custom-Web-Application-Development-min.jpg"
      ],
      galleryImage:[
        "https://i.ibb.co/VVBdZbG/Responsive-Frontend-Development-min.jpg",
        "https://i.ibb.co/sbpDZ3X/React-js-Developer-min.jpg",
        "https://i.ibb.co/Hr3S61Y/Design-to-HTML-CSS-Conversion-min.jpg",
        "https://i.ibb.co/LxX7BZM/Backend-Development-Services-min.jpg",
        "https://i.ibb.co/WnmFbtk/Server-Side-Rendering-SSR-min.jpg",
        "https://i.ibb.co/bFw97Jr/Database-Design-and-Optimization-min.jpg"
      ],
      keyFeatures: [
        "Customized functionality",
        "Scalability",
        "Seamless user experience",
      ],
      technologies: [
        "HTML5",
        "CSS",
        "Bootstrap",
        "Tailwind CSS",
        "React.js",
        "backend frameworks (Express.js)",
        "Databases (NoSQL)",
      ],
      githubLink: "https://github.com/your-username/project-a",
      liveDemoLink: "https://www.example.com/project-a",
    },
    {
      id: 2,
      title: "Responsive Frontend Development",
      description:
        "Responsive frontend development focuses on creating user interfaces that adapt to different screen sizes and devices for a seamless user experience.",
      image: "https://i.ibb.co/VVBdZbG/Responsive-Frontend-Development-min.jpg",
      keyFeatures: [
        "Mobile-friendly interfaces",
        "Optimized layouts",
        "Responsive design",
      ],
      technologies: ["HTML5", "CSS", "Bootstrap", "Tailwind CSS", "React.js"],
      githubLink: "https://github.com/your-username/project-b",
      liveDemoLink: "https://www.example.com/project-b",
    },

    {
      id: 3,
      title: "React.js Developer",
      description:
        "A React.js developer specializes in developing web applications using the React.js library.",
      image: "https://i.ibb.co/sbpDZ3X/React-js-Developer-min.jpg",
      keyFeatures: [
        " Building reusable components",
        "Managing state",
        "Implementing React-specific patterns",
      ],
      technologies: [
        "React.js",
        "JSX",
        "Redux(state management)",
        "React Router",
      ],
      githubLink: "https://github.com/your-username/project-b",
      liveDemoLink: "https://www.example.com/project-b",
    },
    {
      id: 4,
      title: "Design to HTML/CSS Conversion",
      description:
        "Converting design files (Figma, PSD, AI, etc.) into functional HTML and CSS code to bring the design to life on the web.",
      image: "https://i.ibb.co/Hr3S61Y/Design-to-HTML-CSS-Conversion-min.jpg",
      keyFeatures: [
        "Pixel-Perfect Conversion: Ensuring that the HTML and CSS code accurately reflects the original design, maintaining the visual fidelity and alignment.",
        "Cross-Browser Compatibility: Developing responsive web pages that render consistently across different browsers and devices.",
        "Semantic Markup: Utilizing proper HTML tags and structure to enhance accessibility, search engine optimization (SEO), and maintainability.",
        "Responsive Design: Creating web pages that adapt to various screen sizes and devices, providing a seamless user experience.",
        "Optimized Performance: Optimizing code and assets for fast loading times, reducing file sizes, and implementing best practices for performance.",
        "CSS Preprocessors: Utilizing CSS preprocessors like Sass or Less to enhance code maintainability and modularity.",
        "SEO Best Practices: Incorporating SEO-friendly techniques such as optimized meta tags, semantic markup, and clean code structure.",
        "Accessibility Compliance: Implementing web accessibility standards (WCAG) to ensure that the website is usable by people with disabilities.",
      ],
      technologies: [
        "HTML5: Markup language used for structuring the content of web pages.",
        "CSS3: Style sheet language used for designing the layout, appearance, and styling of web pages.",
        "JavaScript: Used to add interactivity and dynamic functionality to web pages, if required.",
        "CSS Preprocessors: Sass, Less, or Stylus for writing modular and reusable CSS.",
        "Responsive Frameworks: Bootstrap, Tailwind CSS to build responsive and mobile-first web pages.",
        "Image Optimization Tools: Tools like ImageOptim or TinyPNG for optimizing image files to improve page load times.",
        "Version Control: Git for managing code versions and collaboration with other developers.",
      ],
      githubLink: "https://github.com/your-username/project-b",
      liveDemoLink: "https://www.example.com/project-b",
    },
    {
      id: 5,
      title: "Backend Development Services",
      description:
        "A backend developer focuses on server-side development, handling the logic and functionality behind web applications.",
      image: "https://i.ibb.co/LxX7BZM/Backend-Development-Services-min.jpg",
      keyFeatures: [
        " Implementing server-side APIs",
        "Database integration",
        "Business logic implementation",
      ],
      technologies: [
        "Node.js",
        "Express.js",
        "backend frameworks",
        "databases",
      ],
      githubLink: "https://github.com/your-username/project-b",
      liveDemoLink: "https://www.example.com/project-b",
    },
    {
      id: 6,
      title: "Full-Stack(MERN) Web Application Developer",
      description:
        "A full-stack developer is proficient in both frontend and backend development, capable of handling end-to-end web application development.",
      image:
        "https://i.ibb.co/crKpCJF/Full-Stack-MERN-Web-Application-Developer-min.jpg",
      keyFeatures: [
        " Building complete web applications",
        "Integrating frontend and backend components",
        "Managing data flow",
      ],
      technologies: [
        "HTML5",
        "CSS",
        "Bootstrap",
        "Tailwind CSS",
        "React.js",
        "Node.js",
        "Backend frameworks (Express.js)",
        "Databases (NoSQL)",
      ],
      githubLink: "https://github.com/your-username/project-b",
      liveDemoLink: "https://www.example.com/project-b",
    },
    {
      id: 7,
      title: "API Development and Integration",
      description:
        "API development involves designing and implementing application programming interfaces (APIs) for communication between different software systems.",
      image: "https://i.ibb.co/qJRrHTk/API-Development-and-Integration-min.jpg",
      keyFeatures: [
        " Creation of RESTful or GraphQL APIs",
        "Data exchange between systems",
        "Third-party integrations",
      ],
      technologies: ["Node.js", "Express.js,"],
      githubLink: "https://github.com/your-username/project-b",
      liveDemoLink: "https://www.example.com/project-b",
    },
    {
      id: 8,
      title: "Server-Side Rendering (SSR)",
      description:
        " Server-Side Rendering renders web pages on the server and sends them to the client, improving performance and SEO",
      image: "https://i.ibb.co/WnmFbtk/Server-Side-Rendering-SSR-min.jpg",
      keyFeatures: [
        " Faster initial page load times",
        "Better SEO",
        "Improved performance on low-powered devices",
      ],
      technologies: ["Next.js", "Nuxt.js", "Server-side rendering frameworks"],
      githubLink: "https://github.com/your-username/project-b",
      liveDemoLink: "https://www.example.com/project-b",
    },
    {
      id: 9,
      title: "Single-Page Application (SPA) Development",
      description:
        "Single-Page Application development involves creating web applications that dynamically update content without page reloads.",
      image:
        "https://i.ibb.co/SJ5V4Qz/Single-Page-Application-SPA-Development-min.jpg",
      keyFeatures: [
        "Interactive user interfaces",
        "Smooth navigation",
        "Efficient data loading",
      ],
      technologies: ["React.js", "Client-side routing"],
      githubLink: "https://github.com/your-username/project-b",
      liveDemoLink: "https://www.example.com/project-b",
    },
    {
      id: 10,
      title: "User Authentication and Authorization",
      description:
        "User authentication and authorization involve implementing secure mechanisms for user identification and access control.",
      image:
        "https://i.ibb.co/tQRG88X/User-Authentication-and-Authorization-min.jpg",
      keyFeatures: [
        "User registration",
        "Login/logout functionality",
        "Role-based access control",
      ],
      technologies: [
        "JSON Web Tokens (JWT)",
        "Firebase",
        "OAuth",
        "Passport.js",
      ],
      githubLink: "https://github.com/your-username/project-b",
      liveDemoLink: "https://www.example.com/project-b",
    },

    {
      id: 11,
      title: "MongoDB Developer",
      description:
        "A MongoDB developer specializes in working with MongoDB, a popular NoSQL database.",
      image: "https://i.ibb.co/XtJKxps/Mongo-DB-Developer-min.jpg",
      keyFeatures: [
        "Designing and modeling MongoDB databases",
        "Implementing CRUD operations",
        "Optimizing queries",
      ],
      technologies: ["MongoDB", "Mongoose (ODM)", "Indexing", "Caching"],
      githubLink: "https://github.com/your-username/project-b",
      liveDemoLink: "https://www.example.com/project-b",
    },
    {
      id: 12,
      title: "Database Design and Optimization",
      description:
        "Database design and optimization involve designing efficient database structures and optimizing queries for improved performance.",
      image:
        "https://i.ibb.co/bFw97Jr/Database-Design-and-Optimization-min.jpg",
      keyFeatures: [
        "Database schema design",
        "Query optimization",
        "Data integrity",
      ],
      technologies: [
        "Relational databases",
        "NoSQL databases (e.g., MongoDB)",
        "Indexing techniques",
      ],
      githubLink: "https://github.com/your-username/project-b",
      liveDemoLink: "https://www.example.com/project-b",
    },
    {
      id: 13,
      title: "Performance Optimization",
      description:
        "Performance optimization focuses on improving the speed and efficiency of web applications.",
      image: "https://i.ibb.co/tmHGkT5/Performance-Optimization-min.jpg",
      keyFeatures: [
        "Code optimization, caching",
        "Image compression",
        "Lazy loading",
      ],
      technologies: [
        "Performance profiling tools",
        "Caching strategies",
        "Image optimization libraries",
      ],
      githubLink: "https://github.com/your-username/project-b",
      liveDemoLink: "https://www.example.com/project-b",
    },
    {
      id: 14,
      title: "Maintenance and Support",
      description:
        " Maintenance and support services ensure the smooth operation and ongoing improvement of web applications.",
      image: "https://i.ibb.co/VwfB6P8/Maintenance-and-Support-min.jpg",
      keyFeatures: [
        " Bug fixing, updates",
        "Security patches",
        "Technical support",
      ],
      technologies: [
        "Issue tracking systems",
        "Version control",
        "Monitoring tools",
      ],
      githubLink: "https://github.com/your-username/project-b",
      liveDemoLink: "https://www.example.com/project-b",
    },
    {
      id: 15,
      title: "Project Manager",
      description:
        "A project manager oversees the development process, coordinating team efforts and ensuring project success.",
      image: "https://i.ibb.co/PNWzmqn/Project-Manager-min.jpg",
      keyFeatures: [
        "Planning and organizing project resources",
        "Setting goals",
        "Managing communication and stakeholders",
      ],
      technologies: [
        "Project management tools",
        "Communication tools",
        "Documentation tools",
      ],
      githubLink: "https://github.com/your-username/project-b",
      liveDemoLink: "https://www.example.com/project-b",
    },
    // Add more Services here...
  ]);    
  
  const [selectedProject, setSelectedProject] = useState(null); // Stores the currently selected project 
  const [previousScrollPosition, setPreviousScrollPosition] = useState(0); // Saves the previous scroll position
  const [showAllServices, setShowAllServices] = useState(false); // Toggles between limited and full service list

  // Reference for the services section (used for scrolling back)
  const servicesRef = useRef(null);

  // Reference for the details section (used for scrolling to details)
  const detailsRef = useRef(null);

  /**
 * Handles clicking on a project to display its details.
 * Scrolls smoothly to the project details section.
 */
const handleProjectClick = (project) => {
  // Save the current scroll position
  setPreviousScrollPosition(window.scrollY);

  // Set the selected project for detailed view
  setSelectedProject(project);

  // Scroll to the details section manually
  requestAnimationFrame(() => { // Ensure layout has settled before scrolling
    if (detailsRef.current) {
      const rect = detailsRef.current.getBoundingClientRect(); // Get the element's position
      const scrollPosition = rect.top + window.scrollY; // Calculate exact position

      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth", // Smooth scrolling for a better user experience
      });
    }
  });
};




  /**
   * Handles closing the project details view.
   * Scrolls back to the previous position in the services section.
   */
  const handleCloseProject = () => {
    setSelectedProject(null);

    // Scroll back to the previously saved scroll position
    window.scrollTo({
      top: previousScrollPosition,
      behavior: "smooth", // Smooth scrolling for better UX
    });
  };

  /**
   * Toggles displaying all services.
   */
  const handleShowAllServices = () => {
    setShowAllServices(true);
  };

  /**
   * CSS transition styles for animating the project details.
   */
  const articleTransitionStyles = {
    entering: "opacity-0 transform scale-75",
    entered: "opacity-100 transform scale-100",
    exiting: "opacity-0 transform scale-75",
    exited: "opacity-0 transform scale-0",
  };

  // Display limited or all services based on the `showAllServices` state
  const displayedServices = showAllServices ? Services : Services.slice(0, 15);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <h1 className="text-center text-3xl font-bold mb-4">Our Services</h1>
      <h2 className="text-center text-lg font-semibold mb-12">
        Delivering High-Quality Solutions to Meet Your Needs
      </h2>

      {/* Reference for scrolling back */}
      <div ref={servicesRef}></div>

      {/* Display Project Details or Services */}
      {selectedProject ? (
        <Transition in={true} timeout={300} mountOnEnter unmountOnExit>
          {(state) => (
            <div
      ref={detailsRef} // Attach ref for scrolling to details section
      className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 transition-all duration-300"
    >
      {/* Project Image */}
      <div className="mb-6 overflow-hidden rounded-lg shadow-md">
        <img
          src={selectedProject.image}
          alt={selectedProject.title}
          className="w-full object-cover"
        />
      </div>

      {/* Project Title & Description */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">
          {selectedProject.title}
        </h2>
        <p className="text-gray-600 leading-relaxed">{selectedProject.description}</p>
      </div>

      {/* Key Features Section */}
      {selectedProject.keyFeatures?.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Key Features</h3>
          <ul className="list-disc list-inside text-gray-600">
            {selectedProject.keyFeatures.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Technologies Section */}
      {selectedProject.technologies?.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Technologies Used</h3>
          <ul className="list-disc list-inside text-gray-600">
            {selectedProject.technologies.map((technology, index) => (
              <li key={index}>{technology}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Work Gallery Section */}
      {selectedProject.galleryImage?.length > 0 && (
        <div className="mt-8">
          <h1 className="text-center text-3xl font-bold text-gray-800 mb-4">
            Work Gallery of {selectedProject.title}
          </h1>
        

          <div className="flex flex-wrap -m-1">
            <div className="flex flex-wrap w-1/2">
              {selectedProject.galleryImage.slice(0, 3).map((gallery, index) => (
                <div key={index} className={`p-1 ${index === 2 ? "w-full" : "w-1/2"}`}>
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full rounded-lg shadow-md"
                    src={gallery}
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-wrap w-1/2">
              {selectedProject.galleryImage.slice(3, 6).map((gallery, index) => (
                <div key={index} className={`p-1 ${index === 0 ? "w-full" : "w-1/2"}`}>
                  <img
                    alt="gallery"
                    className="w-full object-cover h-full rounded-lg shadow-md"
                    src={gallery}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Back to Services Button */}
      {/* <div className="flex justify-center pt-6">
        <button
          className="flex items-center bg-black text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 hover:drop-shadow-lg  transition"
          onClick={handleCloseProject}
        >
          <FaArrowLeft className="mr-2" size={16} /> Back to Services
        </button>
      </div> */}

      <div className="flex flex-wrap justify-center pt-6 gap-4">
  {/* Back to Services Button */}
  <button
    className="flex items-center bg-black text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 hover:drop-shadow-lg transition duration-300 text-base sm:text-lg"
    onClick={handleCloseProject}
  >
    <FaArrowLeft className="mr-2 text-lg sm:text-xl" /> Back to Services
  </button>

  {/* Book an Appointment Button (WhatsApp) */}
  <a
    href="https://wa.me/88096961174037" // Replace with your WhatsApp number
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-800 hover:drop-shadow-lg transition duration-300 text-base sm:text-lg"
  >
    Book an Appointment <FaWhatsapp className="ml-2 text-lg sm:text-xl" />
  </a>
</div>


      
    </div>
          )}
        </Transition>
      ) : (
        <div>
          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
  {displayedServices.map((project) => (
    <Transition
      key={project.id}
      in={true}
      timeout={300}
      mountOnEnter
      unmountOnExit
    >
      {(state) => (
        <div
          className={`bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 ${articleTransitionStyles[state]} flex flex-col`}
        >
          <div className="flex-grow p-4">
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full rounded-lg mb-4"
            />
            {/* Project Title and Short Description */}
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-500 mb-4">{project.description}</p>
          </div>

          {/* Fixed Button at Bottom */}
          {/* <div className="p-4 flex justify-center mt-auto">
            <button
              className="w-full flex items-center justify-center bg-black text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 hover:drop-shadow-lg transition"
              onClick={() => handleProjectClick(project)}
            >
              Details More <FaArrowRight className="ml-2" />
            </button>
          </div> */}

          <div className="p-4 flex flex-wrap justify-center mt-auto gap-4">
  {/* Details More Button */}
  <button
    className="w-full sm:w-auto flex items-center justify-center bg-black text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600 hover:drop-shadow-lg transition duration-300 text-base sm:text-lg"
    onClick={() => handleProjectClick(project)}
  >
    Details More <FaArrowRight className="ml-2 text-xl sm:text-2xl" />
  </button>

  {/* Book an Appointment Button (WhatsApp) */}
  <a
    href="https://wa.me/88096961174037" // Replace with your WhatsApp number
    target="_blank"
    rel="noopener noreferrer"
    className="w-full sm:w-auto flex items-center justify-center bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-800 hover:drop-shadow-lg transition duration-300 text-base sm:text-lg"
  >
    Book an Appointment <FaWhatsapp className="ml-2 text-xl sm:text-2xl" />
  </a>
</div>


        </div>
      )}
    </Transition>
  ))}
</div>



          {/* See More / Show Less Buttons */}
          {/* {!showAllServices ? (
            <div className="flex justify-center">
              <button className="btn" onClick={handleShowAllServices}>
                See More
              </button>
            </div>
          ) : (
            <div className="flex justify-center">
              <button className="btn" onClick={() => setShowAllServices(false)}>
                Show Less
              </button>
            </div>
          )} */}
        </div>
      )}
    </div>
  );
};

export default MyServices;


