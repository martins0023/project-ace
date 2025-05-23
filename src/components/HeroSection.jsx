import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import {
  fadeIn,
  slideInFromLeft,
  slideInFromRight,
  staggerContainer,
  textVariants,
} from "../constants/animations";
import { ace15 } from "../assets";
import SearchBar from "./SearchBar";

const HeroSection = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="relative flex items-center justify-left h-screen bg-gray-100"
    >
      <div className="absolute inset-0">
        {/* Mobile Image (shown on small screens) */}
        <img
          src={ace15}
          alt="background image"
          className="object-cover w-full h-full "
        />

        <div className="absolute inset-0 bg-black bg-opacity-50" />

        {/* <img
          src={doctorkays}
          alt="Background"
          className="object-cover w-full h-full lg:h-full"
        /> */}
      </div>
      <div className="relative z-10 max-w-4xl px-6 mt-10 text-left text-white justify-center items-center ">
        <motion.h5
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className=" md:pb-2 h-full text-4xl font-monument font-semibold sm:text-5xl lg:text-7xl text-white bg-clip-text tracking-wide"
        >
          Project Ace
        </motion.h5>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={slideInFromRight}
          className="mt-3 sm:text-xl lg:text-2xl text-2xl text-[#FDFDFD] font-bold font-host-grotesk"
        >
          Find the Next service for your Event, your next big event can come alive
          with project x
        </motion.p>
        <motion.p
          initial="hidden"
          animate="visible"
          variants={slideInFromRight}
          className="mt-3 sm:text-base lg:text-lg text-lg text-[#FDFDFD] font-light font-host-grotesk"
        >
          A platform you can trust for your next upcoming ceremonies
        </motion.p>
        <SearchBar />
      </div>
    </motion.div>
  );
};

export default HeroSection;
