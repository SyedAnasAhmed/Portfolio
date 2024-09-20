import React from "react";
import { InfiniteMovingCards } from "./Ui/InifiniteMovingCard";
import { companies, testimonials } from "@/data";

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
      {/* <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10 ">
        {companies.map(({ id, name, img, nameImg }) => (
          <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
            <img src={img} className="md:w-10 w-5" alt="" />
            <img src={nameImg} alt={name} className="md:w-24 w-20" />

          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Clients;
