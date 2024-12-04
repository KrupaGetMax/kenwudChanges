import React from "react";
import expriencesImg from "../../assets/expricences.png";
import Button from "../../components/Button";

const Expricences = () => {
  return (
    <section className="my-24 section-container flex flex-col md:flex-row items-center justify-between md:gap-20 gap-8 px-4 md:px-12">
      <div className="md:w-1/2 md:h-[547px]">
        <img src={expriencesImg} alt="" className="h-full w-full" />
      </div>
      <div className="md:w-1/2 mx-auto">
        <h3 className="text-lg font-semibold text-primary mb-4">Experiences</h3>
        <h2 className="text-4xl font-bold mb-4 capitalize lg:w-1/2">
          we provide you the best experience
        </h2>
        <p className="text-secondary dark:text-white mb-5 lg:w-2/3">
          <strong>THE TECHNOLOGY </strong>
          KEN TEXTURED VENEER is a company that has developed a new generation
          of Laminates created for furniture and construction industry. Our
          productive technology is called KEN CLPL (continuous low pressure
          laminates) and grants laminates with high technical performances and
          low polluting impact.
        </p>
    
      </div>
    </section>
  );
};

export default Expricences;
