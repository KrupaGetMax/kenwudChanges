import React from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
const ChooseUs = () => {
  return (
    <section className="section-container px-4 md:px-12">
      <div className="my-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center md:gap-12 gap-8 text-left ">
        <div className="text-4xl font-bold ">
          Why <br /> Choosing Us
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-3">KENWUD Furniture</h3>
          <p className="text-base mb-2">
            KENWUD, established in 2008, offers customer-focused, durable, and
            elegant furniture for home, office, and children's spaces.
          </p>
          <Link to="/contact">
            <Button text="More Info" />
          </Link>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-3">Commitment to Quality</h3>
          <p className="text-base mb-2">
            KENWUD combines high-quality furniture with competitive pricing,
            constantly improving products, designs, and service.
          </p>
          <Link to="/contact">
            <Button text="More Info" />
          </Link>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-3">Luxury facilities</h3>
          <p className="text-base mb-2">
            Our 2.5-acre factory in India’s industrial hub uses state-of-the-art
            machinery and cutting-edge technology to meet international quality
            standards
          </p>
          <Link to="/contact">
            <Button text="More Info" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
