import React from 'react';
import Hero from "./assets/hero.jpg";

const TermsAndConditions = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900">
      {/* Banner Section */}
      <div
        className="w-full h-[400px] bg-no-repeat bg-cover flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${Hero})` }}
      >
        <h1 className="text-5xl font-bold text-black">Terms and Conditions</h1>
      </div>

      {/* Main Content Section */}
      <section className="my-12 px-6 md:px-12">
        <div className="section-container flex flex-col gap-12">
          {/* Introduction */}
          <div className="bg-white shadow-md rounded-lg p-8">
            <h2 className="text-3xl font-semibold text-primary mb-4">Introduction</h2>
            <p className="text-lg text-secondary mb-4">
              Welcome to KENWUD! By accessing and using our website and services, you agree to abide by the following terms and conditions. Please read them carefully.
            </p>
          </div>

          {/* Section 1 */}
          <div className="bg-white shadow-md rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-primary mb-4">1. General Terms</h3>
            <p className="text-lg text-secondary mb-4">
              These Terms and Conditions apply to the use of our website and services. By using our services, you agree to these terms and any updates that may occur.
            </p>
          </div>

          {/* Section 2 */}
          <div className="bg-white shadow-md rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-primary mb-4">2. Product Information</h3>
            <p className="text-lg text-secondary mb-4">
              We strive to provide accurate product descriptions and pricing information. However, errors may occur, and we reserve the right to correct them when necessary.
            </p>
          </div>

          {/* Section 3 */}
          <div className="bg-white shadow-md rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-primary mb-4">3. Payment and Shipping</h3>
            <p className="text-lg text-secondary mb-4">
              Payments for purchases on our site are processed securely through trusted payment gateways. We offer reliable shipping services to deliver your orders promptly.
            </p>
          </div>

          {/* Section 4 */}
          <div className="bg-white shadow-md rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-primary mb-4">4. Privacy Policy</h3>
            <p className="text-lg text-secondary mb-4">
              We are committed to protecting your privacy and personal information. Please refer to our Privacy Policy for details on how we collect, use, and protect your data.
            </p>
          </div>

          {/* Section 5 */}
          <div className="bg-white shadow-md rounded-lg p-8">
            <h3 className="text-2xl font-semibold text-primary mb-4">5. Changes to Terms</h3>
            <p className="text-lg text-secondary mb-4">
              We reserve the right to update or modify these terms at any time. Any changes will be effective immediately upon posting the updated terms on this page.
            </p>
          </div>

          {/* Footer Section */}
          <div className="bg-white shadow-md rounded-lg p-8 mt-12 text-center">
            <p className="text-lg text-secondary">
              If you have any questions about these Terms and Conditions, feel free to contact us.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;
