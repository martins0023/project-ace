import React from "react";
import { ace10 } from "../assets";
import { ArrowRight, ChevronRightCircle } from "lucide-react";

const BrowseSection = () => {
  return (
    <div className="relative mt-10 border border-neutral-300 rounded-2xl overflow-hidden h-fit w-full mx-auto">
      {/* Background Image */}
      <img
        src={ace10} //
        alt="Event Centre"
        className="w-full h-[400px] sm:fit md:fit object-cover"
      />

      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-40" />

      <div className="absolute inset-0 flex flex-col justify-center items-center p-4 text-white">
        {/* Title */}
        <h3 className="font-poppins text-center text-2xl sm:text-2xl font-medium sm:font-semibold mb-4">
          Check out this outstanding event centres specially curated for your
          next events and ceremonies today!
        </h3>

        <div className="bg-white rounded-full p-3 mt-5 w-fit h-fit justify-center items-center flex gap-2">
          <p className="text-black font-host-grotesk">Browse All</p>
          <ChevronRightCircle className="text-gray-800 w-5 h-5" />
        </div>
      </div>
    </div>
  );
};

export default BrowseSection;
