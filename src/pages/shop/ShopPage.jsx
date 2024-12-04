// import React from "react";
// import bannerImg from "../../assets/hero.jpg";
// import Products from "./Products";
// import { Helmet } from "react-helmet-async";
// const ShopPage = () => {
//   return (
//     <>
//       <Helmet>
//         {/* Title */}
//         <title>
//           Explore Premium Furniture Products for Home, Office & Kids – KENWUD
//         </title>

//         {/* Description */}
//         <meta
//           name="description"
//           content="Discover KENWUD’s wide range of premium furniture for home, office, and kids. Durable, stylish, and customizable designs for every space and budget."
//         />

//         {/* Canonical URL */}
//         <link rel="canonical" href="https://ken-doors.com" />

//         {/* Open Graph (OG) tags */}
//         <meta property="og:locale" content="en_US" />
//         <meta property="og:type" content="website" />
//         <meta
//           property="og:title"
//           content="Explore Premium Furniture Products for Home, Office & Kids – KENWUD"
//         />
//         <meta
//           property="og:description"
//           content="Discover KENWUD’s wide range of premium furniture for home, office, and kids. Durable, stylish, and customizable designs for every space and budget."
//         />
//         <meta property="og:url" content="https://ken-doors.com" />
//         <meta property="og:site_name" content="Ken Engineers India" />
//         <meta
//           property="og:image"
//           content="https://ken-doors.com/images/social-banner.png"
//         />
//         <meta property="og:image:width" content="1200" />
//         <meta property="og:image:height" content="629" />

//         {/* Twitter tags */}
//         <meta name="twitter:card" content="summary_large_image" />
//         <meta name="twitter:site" content="@kenwud" />
//         <meta
//           name="twitter:title"
//           content="Explore Premium Furniture Products for Home, Office & Kids – KENWUD"
//         />
//         <meta
//           name="twitter:description"
//           content="Discover KENWUD’s wide range of premium furniture for home, office, and kids. Durable, stylish, and customizable designs for every space and budget."
//         />
//         <meta
//           name="twitter:image"
//           content="https://ken-doors.com/images/social-banner.png"
//         />

//         {/* Structured Data - Schema.org */}
//         <script type="application/ld+json">
//           {`
//     {
//       "@context": "https://schema.org",
//       "@type": "Organization",
//       "name": "GetMax",
//       "alternateName": "GetMax Transformation",
//       "url": "https://ken-doors.com",
//       "logo": "https://ken-doors.com/images/logo.png",
//       "contactPoint": {
//         "@type": "ContactPoint",
//         "telephone": "+918788593667",
//         "contactType": "Customer Service",
//         "areaServed": "IND",
//         "availableLanguage": "en"
//       },
//       "sameAs": [
//         "https://www.linkedin.com/company/kenwud/",
//         "https://twitter.com/kenwud"
//       ],
//       "description": "Discover KENWUD’s wide range of premium furniture for home, office, and kids. Durable, stylish, and customizable designs for every space and budget.",
//       "image": "https://ken-doors.com/images/social-banner.png",
//       "foundingDate": "2008",
//       "founder": {
//         "@type": "Person",
//         "name": "KENWUD"
//       },
//       "address": {
//         "@type": "PostalAddress",
//         "streetAddress": "Ken Engineers India, Plot No B-40 / B-41 MIDC BUTIBORI NAGPUR Maharastra India - 441122",
//         "addressLocality": "BUTIBORI NAGPUR",
//         "addressCountry": "India"
//       }
//     }
//     `}
//         </script>
//       </Helmet>
//       <div className="min-h-screen">
//         {/* banner */}
//         <div
//           className="w-full h-[400px] bg-cover bg-center flex items-center justify-center text-white"
//           style={{ backgroundImage: `url(${bannerImg})` }}
//         >
//           <h1 className="text-5xl font-bold text-black">Shop Our Products</h1>
//         </div>

//         {/* product page */}
//         <Products headline="What's Your Choice" />
//       </div>
//     </>
//   );
// };

// export default ShopPage;

import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom"; // To get the category ID from URL
import axios from "axios";
import ProductCard from "./ProductCard"; // Import the ProductCard component
import { ThemeContext } from "../../context/ThemeContext";

const ShopPage = () => {
  const { isDarkMode } = useContext(ThemeContext);
  const { categoryId } = useParams(); // Get the category ID from the URL parameter
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost/core/getCategories.php?category=${categoryId}`
        ); // API to fetch products by category
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products by category:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductsByCategory();
  }, [categoryId]); // Re-fetch products when categoryId changes

  return (
    <div
      className={`${
        isDarkMode ? "bg-gray-900 text-white" : "bg-secondary-bg"
      } py-12`}
    >
      <div className="section-container px-6 md:px-12">
        {/* Category Heading */}
        <h2 className="text-4xl font-bold text-center mb-12">
          Products in Category: {categoryId}
        </h2>

        {/* Loading Indicator */}
        {loading && (
          <div className="text-center text-xl text-gray-500">
            Loading products...
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {!loading &&
            products.length > 0 &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>

        {/* No Products Found */}
        {!loading && products.length === 0 && (
          <div className="text-center text-xl text-gray-500">
            No products found in this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopPage;
