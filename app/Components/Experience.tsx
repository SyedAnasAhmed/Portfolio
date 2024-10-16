import { workExperience } from "@/data";
import React from "react";
import { Button } from "./Ui/MovingBorder";
import Image from "next/image";

const Experience = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading md:pb-10 sm:pb-5">
        My <span className="text-purple">Education & Work Experience</span>
      </h1>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10 ">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            borderRadius="1.75rem"
            className="flex-1 text-white border-neutral-200 dark:border-slate-200"
            duration={Math.floor(Math.random() * 10000 + 10000)}
          >
            <div className="flex relative lg:flex-row flex-row lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <Image
                width={0}
                height={0}
                alt={card.thumbnail}
                src={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
