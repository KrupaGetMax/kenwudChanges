import React from "react";
import Hero from "./Hero";
import ChooseUs from "./ChooseUs";
import Products from "../shop/Products";
import Expricences from "./Expricences";
import Materials from "./Materials";
import Testimonials from "./Testimonials";
import CompanySlider from "./CompanySlider";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        {/* Title */}
        <title>
          KENWUD Furniture: Premium Home, Office & Children's Furniture
        </title>

        {/* Description */}
        <meta
          name="description"
          content="Shop high-quality, stylish furniture for home, office, and kids at KENWUD. Explore durable designs, customizable options, and excellent customer service."
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://ken-doors.com" />

        {/* Open Graph (OG) tags */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="KENWUD Furniture: Premium Home, Office & Children's Furniture"
        />
        <meta
          property="og:description"
          content="Shop high-quality, stylish furniture for home, office, and kids at KENWUD. Explore durable designs, customizable options, and excellent customer service."
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
          content="KENWUD Furniture: Premium Home, Office & Children's Furniture"
        />
        <meta
          name="twitter:description"
          content="Shop high-quality, stylish furniture for home, office, and kids at KENWUD. Explore durable designs, customizable options, and excellent customer service."
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
      "name": "GetMax",
      "alternateName": "GetMax Transformation",
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
      "description": "Shop high-quality, stylish furniture for home, office, and kids at KENWUD. Explore durable designs, customizable options, and excellent customer service.",
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
      <Hero />
      <ChooseUs />
      {/* <CompanySlider/> */}
      <Products headline="Best Selling Product" />
      <Expricences />
      <Materials />
      <Testimonials />
    </>
  );
};

export default Home;
