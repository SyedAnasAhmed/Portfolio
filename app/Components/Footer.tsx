import React from "react";
import MagicButton from "./Ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";
import { socialMedia } from "@/data";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full mb-[100px] md:mb-5 pb-10 " id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw] ">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center ">
          Reach out to me today and let&apos;s discuss how I can help you
          acheive your goals!
        </p>
        <a href="mailto:syedanasahmed412@gmail.com">
          <MagicButton
            title="Let's get in touch."
            position="right"
            icon={<FaLocationArrow />}
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between gap-5 items-center">
        <p className="md:text-base text-sm md:font-normal font-light ">
          Copyright © 2024 Syed Anas Ahmed
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-200"
            >
              {profile.id===1 ? 
              <Link href={"https://github.com/Syedanasahmed"} target="_blank " >
                <Image src={profile.img} width={20} height={20} alt="" />
              </Link>
              : profile.id===3 ? 
              <Link href={"https://www.linkedin.com/in/syed-anas-ahmed-0211aa249"} target="_blank " >
                <Image src={profile.img} width={20} height={20} alt="" />
              </Link> 
              :
              <Link href={"https://www.x.com/AnasAhm78817182"} target="_blank">
                <Image src={profile.img} width={20} height={20} alt="" />
              </Link> }
              
            
            
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
