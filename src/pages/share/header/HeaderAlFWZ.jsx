import { NavLink } from "react-router-dom";
import ReactTyped from "react-typed";
import Typed from "react-typed";
import { useState } from "react";

const HeaderAlFWZ = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const menuItems = [
    { label: "HOME", to: "/" },
    { label: "ABOUT US", to: "/about" },
    { label: "OUR SERVICES", to: "/service" },
    { label: "CONTACT US", to: "/contact" },
  ];
  const handleSearch = () => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) {
      alert("Please enter a search term.");
      return;
    }

    const elements = Array.from(
      document.querySelectorAll("h1, h2, h3, p, a, input[type='number']")
    );

    const matches = elements.filter((el) => {
      const textContent = el.textContent.toLowerCase();
      const isNumeric = !isNaN(textContent.trim());
      const queryLower = query.trim().toLowerCase();

      if (isNumeric) {
        return parseFloat(textContent.trim()) === parseFloat(queryLower);
      } else {
        return textContent.includes(queryLower);
      }
    });

    if (matches.length > 0) {
      matches.forEach((match, index) => {
        match.id = `search-result-${index}`;
      });

      setSearchResults(
        matches.map((match, index) => ({
          text: match.textContent,
          elementId: `search-result-${index}`,
        }))
      );

      const firstResultId = `search-result-0`;
      setTimeout(() => {
        document.getElementById(firstResultId)?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 200);

      matches.forEach((el) => {
        el.style.backgroundColor = "yellow";
        setTimeout(() => {
          el.style.backgroundColor = "";
        }, 2000);
      });
    } else {
      setSearchResults([]);
      alert("No matches found.");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const closeSearchResults = () => {
    setSearchResults([]);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSubmenu = (index) => {
    setActiveSubmenu(activeSubmenu === index ? null : index);
  };

  return (
    <div className="sticky top-0 z-50 bg-black">
      <div className="pb-0">
        <h1 className="text-small md:text-xl text-center text-bold text-red-600 font-medium">
          <Typed
            strings={[
              "Welcome to AL-FWZ Trading and Contracting",
              "All Kind of Furniture and Upholstery",
              "Shop or Book an Appointment",
            ]}
            typeSpeed={60}
            backSpeed={40}
            loop
          />
        </h1>
      </div>
      <div className="sticky top-0 z-50 pt-0 bg-black text-white shadow-md">
        <div className="container flex justify-between items-center px-4 py-3 mx-auto">
          {/* Logo */}
          <NavLink to="/" className="flex items-center justify-center rounded bg-white">
            <img
              src="https://8upload.com/image/67979661192f3/AL-FWZ_Tradign_Contracting_Logo.png"
              alt="Logo"
              className="h-10 w-auto"
            />
          </NavLink>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex space-x-8">
            {menuItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.to}
                className={({ isActive }) =>
                  isActive ? "text-violet-400" : "hover:text-violet-400"
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Search Box */}
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Search..."
              className="w-32 lg:w-48 px-4 py-2 bg-white text-sm text-black rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button
              onClick={handleSearch}
              className="absolute inset-y-0 right-0 flex items-center px-3"
            >
              <img
                src="https://8upload.com/image/6797eb0d03c90/glass.png"
                alt="Search"
                className="h-6 w-6"
              />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
  onClick={toggleMobileMenu}
  className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md bg-white border border-gray-300 shadow-md"
>
  <img
    src={
      isMobileMenuOpen
        ? "https://8upload.com/image/6797ef8ebfe6e/close-button.png"
        : "https://8upload.com/image/6797ef8eb0c46/line.png"
    }
    alt="Menu Toggle"
    className="h-5 w-5"
  />
</button>

        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="bg-black text-white lg:hidden">
            <ul className="space-y-2 px-4 py-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      isActive
                        ? "block px-4 py-2 hover:bg-gray-700 rounded-md text-violet-400"
                        : "block px-4 py-2 hover:bg-gray-700 rounded-md"
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* Search Results Section */}
        {searchResults.length > 0 && (
          <div className="bg-gray-100 text-black p-4">
            <h2 className="font-bold text-lg mb-2">Search Results:</h2>
            <ul>
              {searchResults.map((result, index) => (
                <li key={index} className="mb-1">
                  <a
                    href={`#${result.elementId}`}
                    className="text-blue-500 underline"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(result.elementId)?.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      });
                    }}
                  >
                    {result.text}
                  </a>
                </li>
              ))}
            </ul>
            <button
              onClick={closeSearchResults}
              className="mt-4 text-red-500 underline"
            >
              Close Results
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderAlFWZ;
