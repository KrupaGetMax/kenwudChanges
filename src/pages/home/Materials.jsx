import React from "react";

import material3 from "../../assets/material3.png";
import material1 from "../../assets/material1.png";
import material2 from "../../assets/material2.png";
import Button from "../../components/Button";

const Materials = () => {
  return (
    <section className="my-24 section-container flex flex-col md:flex-row items-center justify-between md:gap-20 gap-8 px-4 md:px-12">
      <div className="md:w-1/2 mx-auto">
        <h3 className="text-lg font-semibold text-primary mb-4">Materials</h3>
        <h2 className="text-4xl font-bold mb-4 capitalize lg:w-1/2">
          Very serious materials for making furniture
        </h2>
        <p className="text-secondary dark:text-white mb-5 lg:w-2/3">
          The KEN CLPL patented by KEN TEXTURED VENEER are made with a unique
          technology, which gives extreme flexibility while maintaining a
          beautiful aesthetical surface. KEN CLPL Continuous Low Pressure
          Laminates are available in several families: Sinrolam, Sineromet,
          Sinerlac, Sinerolux, and all these families have different technical
          features and are able to satisfy every application. The variety of
          colours, wood imitation, metal effects, unicolor with matte and shiny
          effects have been developed by our R&D department to align with the
          new modern market tendencies.
        </p>
       
      </div>

      <div className="md:w-1/2 grid grid-cols-2 md:grid-cols-3 md:items-end items-center ">
        <div className="">
          <img src={material1} alt="" className="" />
          <img src={material2} alt="" className="" />
        </div>
        <div className="md:col-span-2 col-span-1">
          <img src={material3} alt="" className="w-full md:h-[547px]" />
        </div>
      </div>
    </section>
  );
};

export default Materials;
