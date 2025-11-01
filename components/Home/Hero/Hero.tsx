"use client";

import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import ParticleBackground from "./ParticleBackground";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-white overflow-hidden flex-col">
      <ParticleBackground />
      <div className="relative z-10 flex flex-col items-center">
        <Image
          src="/images/joseph.png"
          className="rounded-full border-8 border-[#0c0c48aa] overflow-hidden w-[150px] h-[150px]"
          alt="heroimage"
          style={{ objectFit: "cover" }}
          width={150}
          height={150}
        />
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-6 text-center font-bold tracking-wide">
          Criando aplicativos, <br />
          sites <span className="text-cyan-200">e backends excaláveis.</span>
        </h1>
        <h2 className="mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-center">
          Olá! Sou o José - Apaixonado em{" "}
          <span className="text-cyan-100 font-bold ">
            <Typewriter
              options={{
                strings: [
                  " Mobile Development",
                  " Backend Development",
                  " Web Development",
                ],
                autoStart: true,
                loop: true,
                delay: 74,
                deleteSpeed: 50,
                wrapperClassName: "pl-2",
              }}
            />
          </span>
        </h2>
        <button className="mt-6 px-10 py-4 bg-blue-800 hover:bg-blue-900 transition-all duration-300 cursor-pointer rounded-full text-lg font-medium">
          <span>Meus projectos</span>
          <BsArrowRight className="w-5 h-5 ml-2 inline-block" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
