import { ArrowDown } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center px-4 gap-20"
    >
      <div className="max-w-4xl mx-auto text-center z-10 ">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mt-20">
          <span className="text-primary opacity-0 animate-fade-in-delay-2">
            Wish Your friends And Family
            <br />
          </span>
          <span className="opacity-0 text-gradient ml-2 animate-fade-in-delay-3">
            A Happy birthday🎉
          </span>
        </h1>
      </div>
      <div className="max-w-4xl mx-auto text-center z-10 ">
          <h1 className="text-xl md:text-1xl font-bold tracking-tight mt-70 lg:mt-45">
          <span className="text-primary opacity-0 animate-fade-in-delay-2">
            Please visit the Screens first before filling the data below 👇
          </span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
