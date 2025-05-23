import React from "react";
import { lookups } from "../constants";
import { MapPin, Star, Verified } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DiscoverComponents = () => {
    //navigate
    const navigate = useNavigate();

  return (
    // Container: column on mobile, row with wrapping on larger screens
    <div>
      <div className="mt-10 flex flex-col lg:flex-row flex-wrap gap-5 w-full">
        {lookups.map((lookup, index) => (
          <div
            key={index}
            className="relative rounded-3xl w-full lg:w-[calc(33.333%-1.25rem)] overflow-hidden shadow-2xl cursor-pointer"
            onClick={() => navigate(`/detail/${lookup.id}`)}
          >
            {/* Background Image */}
            <img
              src={lookup.image}
              alt={lookup.lookupName}
              className="w-full h-48 object-cover"
            />

            {/* Lookup Name Overlay */}
            <div className="absolute top-2 left-2 rounded-full bg-white px-3 py-2">
              <p className="font-host-grotesk text-black text-sm sm:text-lg font-semibold">
                {lookup.lookupName}
              </p>
            </div>

            {/* Card Details */}
            <div className="flex flex-row font-host-grotesk justify-between p-4 bg-white">
              {/* Left Side: Location, distance, rating, price */}
              <div className="text-black w-3/4">
                <p className="font-host-grotesk sm:text-lg font-semibold text-sm flex items-center gap-1">
                  <MapPin className="w-6 h-6" />
                  {lookup.lookupLocation}
                </p>
                <p className="font-host-grotesk text-xs sm:text-base flex items-center gap-1 mt-1">
                  {lookup.distance} kilometres away
                </p>

                {/* Rating and Price */}
                <div className="flex items-center mt-2">
                  <div className="flex text-yellow-500">
                    {/* Render 'lookup.reviews' stars */}
                    {Array(Math.round(lookup.reviews))
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} className="w-3 h-3" />
                    ))}
                  </div>
                </div>
                <div className="font-semibold mt-2 text-xs sm:text-base font-host-grotesk">
                  #{lookup.pricing?.toLocaleString()}/
                  <span className="text-[#737373]">24hrs</span>
                </div>
              </div>

              {/* Right Side: Verification */}
              <div className="flex flex-row  gap-1 w-1/4 justify-end">
                <Verified className="w-6 h-6 text-black" />
                <p className="font-host-grotesk text-black text-sm sm:text-base">
                  {lookup.verification}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center mt-10 justify-center font-host-grotesk">
        <p className="font-semibold sm:text-2xl text-xl">
          Continue exploring more spaces
        </p>
        <div className="bg-black sm:text-2xl text-md p-2 text-white rounded-lg mt-2 ">
          show more
        </div>
      </div>
    </div>
  );
};

export default DiscoverComponents;
