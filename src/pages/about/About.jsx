import React from "react";
import aboutBgImg from "../../assets/about-background.jpg";
import expriencesImg from "../../assets/expricences.png";
import Button from "../../components/Button";
import AboutOne from "../../assets/about/about-2.jpg";
import AboutTwo from "../../assets/about/about-3.avif";
import AboutThree from "../../assets/about/about-4.webp";
import AboutFout from "../../assets/about/about-5.webp";
import imgone from "../../assets/products/d-8.jpeg";
import imgotwo from "../../assets/products/door-2.jpeg";
import imgothree from "../../assets/products/b-4.jpeg";
import imgofour from "../../assets/products/b-5.jpeg";
import imgofive from "../../assets/products/d-3.jpeg";
import { Helmet } from "react-helmet-async";
const About = () => {
  return (
    <>
      <Helmet>
        {/* Title */}
        <title>Kenwud Modular Furniture | Home, Office & Kids Solutions</title>

        {/* Description */}
        <meta
          name="description"
          content="Discover Kenwud's innovative modular furniture for homes, offices, and kids. ISO-certified, durable, stylish, and affordable solutions since 2008."
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://ken-doors.com" />

        {/* Open Graph (OG) tags */}
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Kenwud Modular Furniture | Home, Office & Kids Solutions"
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
          content="Kenwud Modular Furniture | Home, Office & Kids Solutions"
        />
        <meta
          name="twitter:description"
          content="Discover Kenwud's innovative modular furniture for homes, offices, and kids. ISO-certified, durable, stylish, and affordable solutions since 2008."
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
      "description": "Discover Kenwud's innovative modular furniture for homes, offices, and kids. ISO-certified, durable, stylish, and affordable solutions since 2008.",
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
        {/* Banner Section */}
        <div
  className="w-full h-[400px] bg-no-repeat bg-cover flex items-center justify-center text-white"
  style={{ backgroundImage: `url(${aboutBgImg})` }}
>
  <div className="text-center space-y-4">
    <h1 className="text-5xl font-bold text-black">KNOW ABOUT US</h1>
    <p className="text-lg sm:text-xl max-w-2xl mx-auto text-black">
      At KENWUD, we are dedicated to providing top-quality products and services that cater to your needs. With years of experience in the industry, we pride ourselves on our commitment to excellence and customer satisfaction. Join us as we continue to innovate and lead the way.
    </p>
  </div>
</div>


        {/* About Section */}

        <section className="my-24 px-6 md:px-12">
          <div className="section-container flex flex-col md:flex-row items-center md:items-start gap-12">
            {/* Image Section */}
            <div className="md:w-1/2">
              <img
                src={expriencesImg}
                alt="Kenwud Experience"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Content Section */}
            <div className="md:w-1/2 flex flex-col">
              <h3 className="text-lg font-semibold text-primary mb-4">
                Who We Are
              </h3>
              <h2 className="text-xl font-bold mb-4 capitalize leading-tight">
                Welcome to Kenwud
              </h2>
              <p className="text-secondary dark:text-white mb-4">
                KENWUD Home, Office, and Children’s Furniture is a fully
                integrated manufacturer, established in 2008 out of a desire to
                bring a unique, customer-oriented approach to the contract
                marketplace. We design durable, elegant furniture that meets all
                core requirements while offering a wide array of options, price
                points, and scalable solutions, empowering customers to specify
                the best fit for their needs.
              </p>

              <h2 className="text-xl font-bold mb-4 capitalize leading-tight">
                Our Facility
              </h2>
              <p className="text-secondary dark:text-white mb-4">
                We are a modular furniture company specializing in children’s,
                home, and office furniture. Our operations span a spacious
                2.5-acre factory equipped with state-of-the-art machinery
                sourced from Europe, China, and India, located in Asia's largest
                industrial cluster—MIDC Butibori, Nagpur.
              </p>

              <h2 className="text-xl font-bold mb-4 capitalize leading-tight">
                Our Mission
              </h2>
              <p className="text-secondary dark:text-white mb-4">
                At KENWUD, our mission is to deliver exceptional value by
                combining high-quality furniture with competitive pricing. We
                continuously strive to improve product quality, enhance designs,
                and provide unparalleled customer service while maintaining cost
                efficiency.
              </p>
            </div>
          </div>
          <section className="my-24 px-6 md:px-12">
            <div className="section-container flex flex-col md:flex-row items-center md:items-start gap-12">
              {/* Content Section */}
              <div className="md:w-1/2 flex flex-col">
                <h3 className="text-lg font-semibold text-primary mb-4">
                  What Sets Us Apart
                </h3>
                <h2 className="text-xl font-bold mb-4 capitalize leading-tight">
                  A Trusted Brand
                </h2>
                <p className="text-secondary dark:text-white mb-4">
                  As one of the leading manufacturers of children’s, home, and
                  office furniture, we serve a diverse clientele, including
                  esteemed corporate customers, wholesalers, and retailers. Our
                  team of home and office furniture specialists works tirelessly
                  to create elegant, functional designs tailored to various
                  needs.
                </p>

                <div className="mb-6">
                  <h2 className="text-xl font-bold mb-4 capitalize leading-tight">
                    Certifications
                  </h2>
                  <p className="text-secondary dark:text-white mb-4">
                    Our commitment to quality is reflected in our numerous
                    certifications, demonstrating our dedication to excellence
                    and adherence to industry standards:
                  </p>
                  <ul className="list-disc pl-5 text-secondary dark:text-white">
                    <li className="mb-2">MSME</li>
                    <li className="mb-2">ISO 9001:2015</li>
                    <li>ISO 14001:2015</li>
                  </ul>
                </div>

                <h2 className="text-xl font-bold mb-4 capitalize leading-tight">
                  Unmatched Quality and Engineering
                </h2>
                <p className="text-secondary dark:text-white mb-4">
                  We are recognized as a market leader in the quality, design,
                  and engineering of contract furniture. Thousands of Kenwud
                  products are installed across India, backed by an
                  industry-leading warranty and a dedication to outstanding
                  customer service.
                </p>
              </div>

              {/* Image Section */}
              <div className="md:w-1/2">
                <img
                  src={AboutThree}
                  alt="Kenwud Experience"
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
            <div className="section-container flex flex-col md:flex-row items-center md:items-start gap-12">
              {/* Image Section */}
              <div className="md:w-1/2">
                <img
                  src={AboutOne}
                  alt="Kenwud Experience"
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Content Section */}
              <div className="md:w-1/2 flex flex-col">
                <h3 className="text-lg font-semibold text-primary mb-4">
                  Social Responsibility
                </h3>
                <h2 className="text-xl font-bold mb-4 capitalize leading-tight">
                  Giving Back to the Community
                </h2>
                <p className="text-secondary dark:text-white mb-4">
                  At KENWUD, we are passionate about supporting our community.
                  Our operations and employees actively contribute to its
                  betterment through various initiatives.
                </p>

                <h2 className="text-xl font-bold mb-4 capitalize leading-tight">
                  Partner with Us
                </h2>
                <p className="text-secondary dark:text-white mb-4">
                  Kenwud is committed to partnering with small businesses. If
                  you represent a business in the following categories and are
                  willing to collaborate, we’d love to hear from you!
                </p>
              </div>
            </div>
            <div className="section-container flex flex-col md:flex-row items-center md:items-start gap-12">
              {/* Content Section */}
              <div className="md:w-1/2 flex flex-col">
                <h3 className="text-lg font-semibold text-primary mb-4">
                  Our Journey
                </h3>
                <h2 className="text-xl font-bold mb-4 capitalize leading-tight">
                  A Legacy of Excellence
                </h2>
                <p className="text-secondary dark:text-white mb-4">
                  Established in 2008, KENWUD has built a reputation for
                  providing quality furniture at competitive prices. Over the
                  years, we have expanded our manufacturing capabilities to
                  include cutting-edge technology, ensuring adherence to
                  international quality standards.
                </p>

                <div className="mb-6">
                  <h2 className="text-xl font-bold mb-4 capitalize leading-tight">
                    Innovative Design
                  </h2>
                  <p className="text-secondary dark:text-white mb-4">
                    Our furniture experts focus on creating simple, certified
                    designs before production, ensuring every product meets
                    stringent quality controls. From living rooms and dining
                    areas to workspaces and bedroom ensembles, we offer a range
                    of stylish, durable furniture to enhance your home or
                    office.
                  </p>
                </div>

                <h2 className="text-2xl font-bold mb-4 capitalize leading-tight">
                  Comfort, Style, and Design
                </h2>
                <p className="text-secondary dark:text-white mb-4">
                  KENWUD is synonymous with elegant furniture that combines
                  comfort, style, and functionality. Whether you’re furnishing
                  your home or workplace, our products are designed to deliver
                  exceptional value at the best price range.
                </p>
                <h2 className="text-xl font-bold mb-4 capitalize leading-tight">
                  Choose KENWUD
                </h2>
                <p className="text-secondary dark:text-white mb-4">
                  With a commitment to quality, design, and customer
                  satisfaction, KENWUD continues to set the standard for home,
                  office, and children’s furniture. Experience the perfect blend
                  of style, comfort, and durability today.
                </p>
              </div>

              {/* Image Section */}
              <div className="md:w-1/2">
                <img
                  src={AboutTwo}
                  alt="Kenwud Experience"
                  className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </section>
          <section className="">
            <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
                <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
                  <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                    <img
                      src={imgone}
                      alt="Cloud Solution Provider"
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                    <h3 className="text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                      {/* Cloud Solution Provider */}
                    </h3>
                  </div>
                </div>

                <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
                  <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
                    <img
                      src={imgothree}
                      alt="Team colaboration section"
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                    <h3 className=" text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                      {/* Team Colaboration */}
                    </h3>
                  </div>
                  <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                    <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                      <img
                        src={imgofour}
                        alt="GetMax AI"
                        className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                      <h3 className=" text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                        {/* GetMax */}
                      </h3>
                    </div>
                    <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
                      <img
                        src={imgofive}
                        alt="GetMaax Trusted Partner"
                        className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                      <h3 className="text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                        {/* Trusted Partner */}
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
                  <div className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
                    <img
                      src={imgotwo}
                      alt="GetMax Team "
                      className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                    <h3 className="text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                      {/* Team */}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
    </>
  );
};

export default About;
