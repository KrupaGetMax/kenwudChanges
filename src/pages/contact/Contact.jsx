import React from 'react'
import contactBgImg from "../../assets/contact-background.jpg"
import Materials from '../home/Materials'
import Testimonials from '../home/Testimonials'
import ContactForm from './ContactForm'
import { Helmet } from "react-helmet-async";
const Contact = () => {
  return (
    <>
  <Helmet>
        {/* Title */}
        <title>Amazing Support: Reach Out for Your Furniture Needs | KENWUD</title>

        {/* Description */}
        <meta
          name="description"
          content="Have furniture questions? Our expert team provides amazing support for your home, office, or children's furniture. Contact KENWUD for personalized assistance today!"
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://ken-doors.com" />

        {/* Open Graph (OG) tags */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Amazing Support: Reach Out for Your Furniture Needs | KENWUD"
        />
        <meta
          property="og:description"
          content="Discover Kenwud's innovative modular furniture for homes, offices, and kids. ISO-certified, durable, stylish, and affordable solutions since 2008."
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
          content="Amazing Support: Reach Out for Your Furniture Needs | KENWUD"
        />
        <meta
          name="twitter:description"
          content="Have furniture questions? Our expert team provides amazing support for your home, office, or children's furniture. Contact KENWUD for personalized assistance today!"
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
      "description": "Have furniture questions? Our expert team provides amazing support for your home, office, or children's furniture. Contact KENWUD for personalized assistance today!",
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
    <section> 
    {/* banner */}
    <div className="w-full h-[400px] bg-no-repeat bg-cover flex items-center justify-center text-black"
  style={{ backgroundImage: `url(${contactBgImg})` }}
>
  <div className="text-center space-y-4 px-4 sm:px-8">
    <h1 className="text-5xl font-bold text-black">Contact With Us</h1>
    <p className="text-lg sm:text-xl  max-w-3xl mx-auto text-black">
      Have any questions or need assistance? We're here to help! Reach out to us through our contact form or directly via email and phone. Our team is ready to assist you with prompt responses.
    </p>
  </div>
</div>

     {/* form */}
     <ContactForm/>
     {/* materials */}
     <Materials/>
     {/* testimonials */}
     <Testimonials/>
   </section>
   </>
  )
}

export default Contact