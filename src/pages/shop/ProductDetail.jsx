import React from "react";
import { useLocation } from "react-router-dom";
import { useContext, useState, useEffect } from "react";

import { Link } from "react-router-dom";
import HeroImg from "../../assets/hero.jpg";
import { Helmet } from "react-helmet-async";
import ProductCard from "./ProductCard";
import SimilarProductsSlider from "./SimilarProductsSlider ";
const ProductDetail = () => {
  const { state } = useLocation();
  const product = state?.product;
  const products = state?.products;
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [currPro, setCurrPro] = useState(product);

  useEffect(() => {
    if (product) {
      fetchRelatedProducts(product.category);
    }
  }, [currPro]); //

  const handleClick = (selectedProduct) => {
    setCurrPro(selectedProduct); // Update the main product
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const fetchRelatedProducts = (category) => {
    const filteredProducts = products.filter(
      (p) => p.category === category && p.id !== currPro.id
    );

    setRelatedProducts(filteredProducts);
  };

  // const { product, products } = location.state || {}; // Retrieve product and products
  if (!product)
    return <div className="text-center text-red-500">Product not found!</div>;

  // Replace with your hardcoded image URL
  const heroImageUrl = HeroImg;

  return (
    <>
      <Helmet>
        {/* Title */}
        <title>
          Kenwud – Buy Premium Office, Home, and Kids Furniture Online
        </title>

        {/* Description */}
        <meta
          name="description"
          content="Explore premium office, home, and kids' furniture at KENWUD. Stylish, durable, and designed for comfort. Find the perfect piece for your space today!"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://ken-doors.com" />

        {/* Open Graph (OG) tags */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Kenwud – Buy Premium Office, Home, and Kids Furniture Online"
        />
        <meta
          property="og:description"
          content="Explore premium office, home, and kids' furniture at KENWUD. Stylish, durable, and designed for comfort. Find the perfect piece for your space today!"
        />
        <meta property="og:url" content="https://ken-doors.com" />
        <meta property="og:site_name" content="Ken Engineers India" />
        <meta
          property="og:image"
          content="https://ken-doors.com/images/social-banner.png"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="629" />

        {/* Twitter tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@kenwud" />
        <meta
          name="twitter:title"
          content="Kenwud – Buy Premium Office, Home, and Kids Furniture Online"
        />
        <meta
          name="twitter:description"
          content="Explore premium office, home, and kids' furniture at KENWUD. Stylish, durable, and designed for comfort. Find the perfect piece for your space today!"
        />
        <meta
          name="twitter:image"
          content="https://ken-doors.com/images/social-banner.png"
        />

        {/* Structured Data - Schema.org */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "KENWUD",
      "alternateName": "KEN-DOORS Transformation",
      "url": "https://ken-doors.com",
      "logo": "https://ken-doors.com/images/logo.png",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+918788593667",
        "contactType": "Customer Service",
        "areaServed": "IND",
        "availableLanguage": "en"
      },
      "sameAs": [
        "https://www.linkedin.com/company/kenwud/",
        "https://twitter.com/kenwud"
      ],
      "description": "Explore premium office, home, and kids' furniture at KENWUD. Stylish, durable, and designed for comfort. Find the perfect piece for your space today!",
      "image": "https://ken-doors.com/images/social-banner.png",
      "foundingDate": "2008",
      "founder": {
        "@type": "Person",
        "name": "KENWUD"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ken Engineers India, Plot No B-40 / B-41 MIDC BUTIBORI NAGPUR Maharastra India - 441122",
        "addressLocality": "BUTIBORI NAGPUR",
        "addressCountry": "India"
      }
    }
    `}
        </script>
      </Helmet>
      <div className="relative">
        {/* Hero Section with Hardcoded Background Image */}
        <div
          className="bg-cover bg-center h-screen flex items-center justify-center"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url(${heroImageUrl})`,
            backgroundAttachment: "fixed",
            height: "70vh",
          }}
        >
          <div className="w-full h-full flex items-center justify-center text-center p-4 lg:p-8">
            <div className="max-w-4xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mb-4">
                Your Ideal Furniture Awaits
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                Discover furniture that perfectly blends elegance and
                functionality. From cozy living spaces to inspiring work
                environments, our carefully curated collections transform every
                corner of your home.
              </p>
            </div>
          </div>
        </div>

        {/* Product Detail Card */}
        <div className="container mx-auto mt-12 p-6 sm:p-8 lg:p-16">
          <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-2xl overflow-hidden max-w-5xl mx-auto">
            <div className="lg:flex lg:gap-12 p-8">
              {/* Product Image */}
              <div className="lg:w-1/3 mb-6 lg:mb-0">
                <img
                  src={currPro.image}
                  alt={currPro.name}
                  className="w-full h-auto object-cover rounded-xl shadow-md transition-transform transform hover:scale-105"
                />
              </div>

              {/* Product Details */}
              <div className="lg:w-2/3 space-y-6">
                <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
                  {currPro.name}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 uppercase">
                  {currPro.category}
                </p>

                {/* Description */}
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  {currPro.description}
                </p>

                {/* Price Section */}

                {/* Add to Cart Button */}
                <div className="flex justify-start">
                  <Link
                    to="/contact"
                    className="bg-primary hover:bg-primary text-white px-6 py-2 rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="similar-products-section">
        <h3 className="section-title">Check Out Similar Products</h3>
        <SimilarProductsSlider
          handleClick={handleClick}
          products={products}
          product={product}
          relatedProducts={relatedProducts}
        />
        <style>
          {`
        .similar-products-section {
            padding: 20px;
            margin: 30px 0;
            background-color: #f9f9f9; /* Light background to distinguish the section */
            border-radius: 10px; /* Rounded corners for a modern look */
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
        }

        .section-title {
            margin-bottom: 20px;
            font-size: 1.8rem;
            font-weight: bold;
            color: #333; /* Darker text for good contrast */
            text-align: center; /* Center align the title */
            border-bottom: 2px solid #ddd; /* Underline for emphasis */
            padding-bottom: 10px;
        }
        `}
        </style>
      </section>
    </>
  );
};

export default ProductDetail;
