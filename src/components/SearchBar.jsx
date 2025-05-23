import React from "react";
import { ChevronDown } from "lucide-react"; // using Lucide React icon

export default function SearchBar() {
  return (
    <div className="mt-8">
      {/* Container:
           - On mobile: flex-col and full width
           - On larger screens (sm): flex-row with horizontal spacing
           - max-w-screen-sm centers the container on desktop */}
      <div className="flex flex-col sm:flex-row items-stretch w-full max-w-screen-sm bg-white border border-gray-300 p-4 space-y-2 sm:space-y-0 sm:space-x-4">
        {/* Locations Button */}
        <button
          type="button"
          className="flex items-center justify-between px-3 py-2 rounded-full font-poppins text-sm sm:text-base text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-200 transition-colors w-full"
        >
          <span>Locations</span>
          <ChevronDown className="w-4 h-4" />
        </button>

        {/* Size Button */}
        <button
          type="button"
          className="flex items-center justify-between px-3 py-2 rounded-full font-poppins text-sm sm:text-base text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-200 transition-colors w-full"
        >
          <span>Size</span>
          <ChevronDown className="w-4 h-4" />
        </button>

        {/* City Button */}
        <button
          type="button"
          className="flex items-center justify-between px-3 py-2 rounded-full font-poppins text-sm sm:text-base text-black hover:bg-gray-100 focus:outline-none focus:bg-gray-200 transition-colors w-full"
        >
          <span>City</span>
          <ChevronDown className="w-4 h-4" />
        </button>

        {/* Search Button */}
        <button
          type="button"
          className="flex items-center justify-center px-4 py-2 rounded-full font-poppins text-sm sm:text-base text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black transition-colors w-full"
        >
          Search now
        </button>
      </div>
    </div>
  );
}
