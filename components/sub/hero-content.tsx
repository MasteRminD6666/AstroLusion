"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <a href="https://lusion.co/" target="_blank" rel="noopener noreferrer">
            <h1 className="Welcome-text text-[13px]">
              Check Lusion Website
            </h1>
          </a>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Alone in the void, yet standing before{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              the unknown.
            </span>{" "}
          
          </span>
          
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Astrolusion, the most illusionary astronaut in history, is gearing up to be the FIRST to land on Mars! 🪐✨
          Forget one small step—this is a giant mind-blowing leap for all Austrolusians! We are about to journey into space!🌌
        </motion.p>

        <motion.a
          href="https://lusion.co/about"
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Check Our Team
        </motion.a>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        {/* <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        /> */}
        <Image
          src="/AustroWave.png"
          alt="work icons"
          height={650}
          width={650}
          style={{ filter: 'saturate(150%)' }}
          draggable={false}
          className="select-none shrink"
        />
      </motion.div>
      
    </motion.div>
  );
};
