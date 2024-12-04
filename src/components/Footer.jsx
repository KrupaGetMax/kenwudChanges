// import React from 'react';
// import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import Logo from "../assets/logo/Logo.png"
// const Footer = () => {
//     return (
//         <footer className="bg-secondary-bg text-black econdary dark:bg-gray-800 dark:text-white pt-20 mt-5 pb-5">
//             <div className="section-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 px-8 md:px-12">
//                 {/* First Div: Logo and Description (Wider Column) */}
//                 <div className="md:col-span-2">
//                     <img src={Logo} alt="" />
//                     <p className=" md:mr-12">
//                         YourCompany is dedicated to providing the best quality products to enhance your home and lifestyle. We combine style and comfort to transform your living spaces into modern sanctuaries.
//                     </p>
//                 </div>

//                 {/* Second Div: Menu 1 */}
//                 <div>
//                     <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
//                     <ul className="space-y-2">
//                         <li>
//                             <a href="#" className=" hover:text-primary transition">About Us</a>
//                         </li>
//                         <li>
//                             <a href="#" className=" hover:text-primary transition">Services</a>
//                         </li>
//                         <li>
//                             <a href="#" className=" hover:text-primary transition">Contact</a>
//                         </li>
//                     </ul>
//                 </div>

//                 {/* Third Div: Menu 2 */}
//                 <div>
//                     <h3 className="text-xl font-semibold mb-4">Customer Care</h3>
//                     <ul className="space-y-2">
//                         <li>
//                             <a href="#" className=" hover:text-primary transition">FAQ</a>
//                         </li>
//                         <li>
//                             <a href="#" className=" hover:text-primary transition">Returns</a>
//                         </li>
//                         <li>
//                             <a href="#" className=" hover:text-primary transition">Support</a>
//                         </li>
//                     </ul>
//                 </div>

//                 {/* Fourth Div: Social Media */}
//                 <div>
//                     <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
//                     <div className="flex flex-col space-y-2">
//                         <a href="#" className="flex items-center space-x-2  hover:text-primary transition">
//                             <FaFacebookF /> <span>Facebook</span>
//                         </a>
//                         <a href="#" className="flex items-center space-x-2  hover:text-primary transition">
//                             <FaTwitter /> <span>Twitter</span>
//                         </a>
//                         <a href="#" className="flex items-center space-x-2  hover:text-primary transition">
//                             <FaInstagram /> <span>Instagram</span>
//                         </a>
//                     </div>
//                 </div>
//             </div>

//             {/* Bottom Footer */}
//             <div className="mt-12 section-container flex flex-col sm:flex-row sm:justify-between sm:items-center sm:text-center gap-4 text-left text-black dark:bg-gray-800 dark:text-white border-t border-gray-300 pt-4 md:px-12">
//                <p> &copy; {new Date().getFullYear()} YourCompany. All rights reserved.</p>
//                <p className='flex gap-4'>

//                 <Link  to="/">Terms & Conditions</Link>
//                 <Link to="/">Privacy Policy</Link>
//                </p>
//             </div>
//         </footer>
//     );
// };

// export default Footer;

import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../assets/logo/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary-bg text-black dark:bg-gray-800 dark:text-white pt-10 pb-5 px-6 lg:px-12">
      {/* Top Section */}
      <img src={Logo} alt="YourCompany Logo" className="h-14 w-auto mb-4" />

      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 md:gap-48 ">
        {/* Logo and Description */}
        <div className="md:col-span-2">
          <p className="text-sm mb-4">
            Founded in 2008, KENWUD delivers high-quality, modular furniture for
            home, office, and children's spaces, backed by exceptional customer
            service. Proudly serving clients across India with a commitment to
            quality and community.
          </p>
          <div className="font-sans">
            <div className="flex items-center mb-2">
              <FaPhoneAlt className="text-gray-500 mr-2 mt-1" />
              <span>(+91) 8788593667</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-gray-500 mr-2 mt-1" />
              <span>kenengineersglobal@gmail.com</span>
            </div>
          </div>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="hover:text-primary transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-primary transition">
                Products
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary transition">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer Care */}
        {/* <div className="hidden">
          <h3 className="text-lg font-semibold mb-4">Customer Care</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/contact" className="hover:text-primary transition">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary transition">
                Returns
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary transition">
                Support
              </Link>
            </li>
          </ul>
        </div> */}

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex flex-col space-y-2">
            <a
              href="https://www.facebook.com/share/kjQt88sjKrNRfN56/?mibextid=LQQJ4d"
              className="flex items-center space-x-2 hover:text-primary transition"
            >
              <FaFacebookF /> <span>Facebook</span>
            </a>
            <a
              href="https://www.facebook.com/share/kjQt88sjKrNRfN56/?mibextid=LQQJ4d"
              className="flex items-center space-x-2 hover:text-primary transition"
            >
              <FaTwitter /> <span>Twitter</span>
            </a>
            <a
              href="https://www.facebook.com/share/kjQt88sjKrNRfN56/?mibextid=LQQJ4d"
              className="flex items-center space-x-2 hover:text-primary transition"
            >
              <FaInstagram /> <span>Instagram</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-gray-300 pt-4  text-sm">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p>&copy; {new Date().getFullYear()} KENWUD. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link to="/terms-conditions" className="hover:text-primary transition">
              Terms & Conditions
            </Link>
            <Link to="/privacy-policy" className="hover:text-primary transition">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
