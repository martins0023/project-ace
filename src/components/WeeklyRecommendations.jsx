import { ace10, ace11, ace12, ace13 } from "../assets";

import React from "react";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"; // Example icons from lucide-react
import BookingWidget from "./BookingWidget";

export default function WeeklyRecommendations() {
  const pills = ["Nearby", "Recommended", "Cheaper", "Exclusive", "Popular"];
  // Mock data for demonstration
  // const ace10 = ace10; // Replace with your image
  const smallImages = [ace12, ace11, ace13];
  const rating = 4.9;
  const totalReviews = 38;

  return (
    <div className="mt-20 px-4">
      {/* Section Heading */}
      <div className="sm:flex-row sm:flex">
        <h2 className="text-2xl sm:text-3xl font-monument lg:text-4xl text-center my-8 tracking-wide">
          Weekly Recommendations
        </h2>

        {/* Scrollable Pills Row */}
        <div className="flex flex-nowrap items-center space-x-3 overflow-x-auto mb-8">
          {pills.map((pill, idx) => (
            <span
              key={idx}
              className="bg-none border border-black rounded-full font-host-grotesk text-sm sm:text-base font-medium px-4 py-2 whitespace-nowrap"
            >
              {pill}
            </span>
          ))}
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left Column: Big Image with Overlays */}
        <BookingWidget />

        {/* Right Column: Details */}
        <div className="flex flex-col space-y-4">
          {/* Navigation Arrows */}
          <div className="flex items-center justify-between">
            <button className="p-3 rounded-full border-2 border-[#E0E0E0] hover:bg-gray-200 focus:outline-none">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="p-3 rounded-full border-2 border-[#E0E0E0] hover:bg-gray-200 focus:outline-none">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Title and Description */}
          <div>
            <h3 className="font-montserrat text-2xl sm:text-2xl lg:text-3xl font-medium">
              Ibadan, Oyo State
            </h3>
            <p className="text-md sm:text-base mt-1 font-host-grotesk font-normal">
              Check out this event centre out for your next ceremony, choose
              needed services accordingly to your need.
            </p>
          </div>

          {/* Categories or Tags */}
          <div className="flex flex-wrap gap-2 font-host-grotesk">
            <span className="bg-[#E6E6E6] text-black  border-black rounded-full px-3 py-1 text-xs sm:text-sm">
              Catering
            </span>
            <span className="bg-[#E6E6E6] text-black  border-black rounded-full px-3 py-1 text-xs sm:text-sm">
              Artists
            </span>
            <span className="bg-[#E6E6E6] text-black  border-black rounded-full px-3 py-1 text-xs sm:text-sm">
              Stage performance
            </span>
            <span className="bg-[#E6E6E6] text-black  border-black rounded-full px-3 py-1 text-xs sm:text-sm">
              Photography
            </span>
            <span className="bg-[#E6E6E6] text-black  border-black rounded-full px-3 py-1 text-xs sm:text-sm">
              +10
            </span>
          </div>

          {/* Small Images and Rating */}
          <div className="flex items-center pt-10">
            {/* Thumbnails */}
            <div className="flex space-x-2">
              {smallImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Thumbnail ${idx + 1}`}
                  className="w-28 h-30 object-cover rounded-xl border-2 border-white"
                />
              ))}
            </div>

            {/* Rating */}
            <div className="bg-black ml-auto flex flex-col items-center p-5 rounded-2xl justify-center">
              <p className="text-3xl font-normal font-host-grotesk text-white">
                {rating}
              </p>
              <div className="bg-[#E6E6E6] rounded-full py-1 px-3 mt-2">
                <p className="text-sm text-black"> Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
