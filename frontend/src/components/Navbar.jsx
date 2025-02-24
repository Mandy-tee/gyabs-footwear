import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "/src/assets/logo.jpg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Activate effect when scrolled 50px
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full py-4 px-5 z-50 transition-all duration-300 
          ${isScrolled ? "bg-gray-900/60 backdrop-blur-md shadow-md" : "bg-gray-900"}`}
      >
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img src={logo} className="w-36" alt="Brand Logo" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center space-x-6">
            <ul className="flex gap-6 text-lg font-medium">
              {["Home", "Products", "About", "Works", "Contact", "Shop Now"].map((name, i) => (
                <a
                href={`#${name.toLowerCase().replace(" ", "-")}`}
                className="hover:text-gray-300 transition-all text-[#F5DEB3]"
              >
                {name}
              </a>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <button className="sm:hidden text-2xl text-[#F5DEB3]">
            <FiMenu />
          </button>
        </div>
      </nav>

      {/* Extra margin to prevent overlap with Hero Section */}
      <div className="mt-24"></div>
    </>
  );
};

export default Navbar;
