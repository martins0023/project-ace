import React from "react";
import { features, nearby } from "../constants";

const NearbySection = () => {
  return (
    <div className="relative mt-10 ">
      <div className="flex p-2 flex-row items-start text-center lg:gap-16 gap-5">
        <div className="mt-2">
          <span className="bg-none border-black border font-host-grotesk rounded-full h-6 text-lg font-medium px-5 py-3">
            Nearby
          </span>
        </div>

        <div>
          <h2 className="text-lg font-poppins text-left sm:text-2xl lg:text-2xl tracking-wide">
            Find unique stays, unforgettable experiences, and endless
            exploration-where project x meets wonder,{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
              adventure, and discovery.
            </span>
          </h2>
        </div>
      </div>
      {/* Image Carousel: Horizontally scrollable */}
      <div className="mt-5 overflow-x-auto p-3">
        <div className="flex space-x-4 ">
          {nearby.map((nearbys, index) => (
            <div key={index}>
              <div className="flex-none w-56 h-56">
                <img
                  src={nearbys.image}
                  className="w-full h-full object-cover rounded-xl"
                  alt={`Nearby ${index + 1}`}
                />
              </div>
              <div className="mt-2 flex flex-row justify-between">
                <div className="flex flex-col">
                  <p className="font-poppins font-medium">{nearbys.title}</p>
                  <p className="font-poppins text-[#3c3c3ce1] font-medium">
                    {nearbys.kilometres} metres away
                  </p>
                </div>
                <div className="bg-none border h-fit font-poppins rounded-md border-[#00000057] p-1">
                  {nearbys.type}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NearbySection;
