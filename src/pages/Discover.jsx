import React, { useState, useEffect } from "react";
import { Search as SearchIcon } from "lucide-react"; // Example icon
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { popSlideVariant } from "../constants/animations";
import { features } from "../constants";
import DiscoverComponents from "../components/DiscoverComponents";
import WeeklyRecommendations from "../components/WeeklyRecommendations";
import ProjectTitle from "../components/ProjectTitle";
import Footer from "../components/Footer";
import FooterBar from "../components/FooterBar";

const rotatingTexts = ["Hotels", "Workspaces", "Venue Reservation"];

function useRotatingText(texts, interval = 2000) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, interval);
    return () => clearInterval(timer);
  }, [texts, interval]);

  return texts[index];
}

const Discover = () => {
  const rotatingText = useRotatingText(rotatingTexts, 2000);
  return (
    <div>
      <Navbar />
      <div className="p-4 w-full max-w-screen-xl mx-auto">
        {/* Heading with rotating text */}
        <h2 className="font-host-grotesk text-2xl sm:text-3xl font-bold mb-6">
          Explore Popular{" "}
          <motion.span
            key={rotatingText} // key forces re-render on change
            variants={popSlideVariant}
            initial="hidden"
            animate="visible"
            className="text-orange-600 inline-block transition-all"
          >
            {rotatingText}
          </motion.span>
        </h2>

        {/* Search Bar Container */}
        <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
          {/* Search Input (full width on mobile, partial on desktop) */}
          <div className="flex items-center border border-gray-300 rounded-full px-3 py-2 w-full sm:w-2/3">
            <SearchIcon className="text-gray-500 mr-2" />
            <input
              type="text"
              placeholder="Search your events center..."
              className="flex-grow focus:outline-none font-montserrat text-sm text-gray-700"
            />
          </div>

          {/* Search Button */}
          <button className="w-full sm:w-auto bg-black text-white font-medium px-6 py-2 rounded-full hover:bg-gray-800 transition-colors">
            Search Now
          </button>
        </div>

        {/* filter section container */}
        <div className="flex space-x-8 overflow-x-auto mt-10">
          {features.map((feature, index) => (
            <button
              key={index}
              className="flex flex-row items-center gap-2 focus:outline-none cursor-pointer"
              // onClick handler can be added here when backend is ready
            >
              <div className="flex-none flex h-14 w-14 p-2 bg-neutral-900 text-white justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div className="flex flex-col items-start w-full">
                <p className="mt-1 text-sm sm:text-xl font-medium text-left font-poppins">
                  {feature.text}
                </p>
                <p className="text-xs sm:text-lg font-normal text-left font-poppins w-full mt-1">
                  {feature.tagline}
                </p>
              </div>
            </button>
          ))}
        </div>

        <DiscoverComponents />
      </div>
      <div className="max-w-7xl mx-auto">
        <WeeklyRecommendations />
      </div>
      <div className="max-w-7xl mx-auto pt-3">
        <ProjectTitle />
      </div>
      <Footer />
      <FooterBar />
    </div>
  );
};

export default Discover;
