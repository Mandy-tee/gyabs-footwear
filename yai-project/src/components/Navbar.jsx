import { NavLink } from "react-router-dom";
import logo from "/src/assets/logo.jpg";

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full bg-gray-900 shadow-lg text-white py-4 px-5 flex items-center justify-between z-50">
    {/* Logo */}
    <NavLink to="/">
      <img src={logo} className="w-36" alt="Brand Logo" />
    </NavLink>

    {/* Navigation Links */}
    <ul className="hidden sm:flex gap-6 text-sm">
      {["Home", "Products", "About", "Works", "Contact"].map((name, i) => (
        <NavLink
          key={i}
          to={`/${name.toLowerCase()}`}
          className={({ isActive }) =>
            `hover:text-gray-300 transition-all ${
              isActive ? "text-blue-400 font-bold" : "text-white"
            }`
          }
        >
          {name}
        </NavLink>
      ))}

      {/* Shop Now Button (Scrolls to Hero Section) */}
      <a href="#shop-now">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all">
          Shop Now
        </button>
      </a>
    </ul>
  </nav>
);

export default Navbar;
