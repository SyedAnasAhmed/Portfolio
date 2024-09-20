import React from "react";
import { InfiniteMovingCards } from "./Ui/InifiniteMovingCard";
import {  testimonials } from "@/data";

const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading md:pb-10 sm:pb-5">
        Kind words from <span className="text-purple"> satisfied clients</span>
      </h1>
      <div className="flex flex-col items-center md:mb-10 sm:mb-5 max-lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
};

export default Clients;
