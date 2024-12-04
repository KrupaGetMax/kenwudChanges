// import React, { useState, useEffect, useContext } from "react";
// import { NavLink } from "react-router-dom";
// import { FaBars, FaShoppingBag, FaTimes } from "react-icons/fa"; // Using React Icons for hamburger menu
// import { CartContext } from "../context/CartContext";
// import Logo from "../assets/logo/Logo.png";

// // Define an array of nav items
// const navItems = [
//   { path: "/", label: "Home" },
//   { path: "/shop", label: "Products" },
//   { path: "/about", label: "About Us" },
//   { path: "/contact", label: "Contact Us" },
// ];

// // Reusable NavItems component with map function
// const NavItems = ({ toggleMenu }) => {
//   return (
//     <ul className="flex flex-col md:flex-row items-center md:space-x-8 gap-8">
//       {navItems.map((item, index) => (
//         <li key={index} onClick={toggleMenu}>
//           <NavLink
//             to={item.path}
//             className={({ isActive }) =>
//               isActive ? "text-blue-800 font-bold" : "hover:text-blue-800"
//             }
//           >
//             {item.label}
//           </NavLink>
//         </li>
//       ))}
//     </ul>
//   );
// };

// const Navbar = () => {
//   const { cartCount } = useContext(CartContext);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle mobile menu

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen((prevState) => !prevState); // Correctly toggle menu state
//   };

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full z-50 transition duration-300 ease-in-out ${
//         isScrolled
//           ? "bg-white shadow-md text-black"
//           : "bg-transparent text-black"
//       }`}
//     >
//       <nav className="max-w-screen-2xl container mx-auto py-6 px-4 md:px-12 flex justify-between items-center">
//         <NavLink to="/" aria-label="Home - Panto">
//           <img
//             src={Logo}
//             alt="Panto Logo"
//             className="h-14 w-auto object-contain"
//             loading="lazy"
//           />
//         </NavLink>

//         {/* Hamburger Icon for Mobile */}
//         <div className="md:hidden text-xl cursor-pointer" onClick={toggleMenu}>
//           {isMenuOpen ? null : <FaBars />}
//         </div>

//         {/* Desktop Nav Items */}
//         <div className="hidden md:flex">
//           <NavItems />
//         </div>

//         {/* Mobile Menu */}
//         <div
//           className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-80 flex flex-col items-center justify-center space-y-8 text-white transition-transform transform ${
//             isMenuOpen ? "translate-x-0" : "-translate-x-full"
//           } md:hidden`}
//         >
//           <div
//             className="absolute top-4 right-4 text-xl cursor-pointer"
//             onClick={toggleMenu}
//           >
//             <FaTimes />
//           </div>
//           <NavItems toggleMenu={toggleMenu} />
//         </div>

//         {/* <div className="hidden md:block relative cursor-pointer">
//                     <FaShoppingBag className="text-xl" />
//                     <sup className="absolute top-0 -right-3 bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
//                         {cartCount}
//                     </sup>
//                 </div> */}
//       </nav>
//     </header>
//   );
// };

// export default Navbar;
import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaShoppingBag, FaTimes } from "react-icons/fa"; // Using React Icons for hamburger menu
import { CartContext } from "../context/CartContext";
import Logo from "../assets/logo/Logo.png";

const Navbar = ({ categories = [] }) => { // Default empty array for categories
  // Accept categories as prop
  const { cartCount } = useContext(CartContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle mobile menu

  useEffect(() => {
    // Handle scroll to change navbar style
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState); // Correctly toggle menu state
  };

  // Static nav items
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/contact", label: "Contact Us" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition duration-300 ease-in-out ${
        isScrolled
          ? "bg-white shadow-md text-black"
          : "bg-transparent text-black"
      }`}
    >
      <nav className="max-w-screen-2xl container mx-auto py-6 px-4 md:px-12 flex justify-between items-center">
        <NavLink to="/" aria-label="Home - Panto">
          <img
            src={Logo}
            alt="Panto Logo"
            className="h-14 w-auto object-contain"
            loading="lazy"
          />
        </NavLink>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden text-xl cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex">
          <ul className="flex flex-col md:flex-row items-center md:space-x-8 gap-8 ">
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "text-blue-800 font-bold" : "hover:text-blue-800"
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            {/* Dynamic Categories */}
            {categories && categories.length > 0 && categories.map((category) => (
              <li key={category.id}>
                <NavLink
                  to={`/shop/${category.id}`} // Link to shop page with category ID
                  className={({ isActive }) =>
                    isActive ? "text-blue-800 font-bold" : "hover:text-blue-800"
                  }
                >
                  {category.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-80 flex flex-col items-center justify-center space-y-8 text-white transition-transform transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
        >
          <div
            className="absolute top-4 right-4 text-xl cursor-pointer"
            onClick={toggleMenu}
          >
            <FaTimes />
          </div>
          <ul className="flex flex-col items-center">
            {navItems.map((item, index) => (
              <li key={index} onClick={toggleMenu}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "text-blue-800 font-bold" : "hover:text-blue-800"
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
            {/* Mobile Categories */}
            {categories && categories.length > 0 && categories.map((category) => (
              <li key={category.id} onClick={toggleMenu}>
                <NavLink
                  to={`/shop/${category.id}`}
                  className={({ isActive }) =>
                    isActive ? "text-blue-800 font-bold" : "hover:text-blue-800"
                  }
                >
                  {category.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
