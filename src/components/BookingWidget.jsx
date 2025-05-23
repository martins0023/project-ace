import { ArrowLeft } from "lucide-react";
import { ace10 } from "../assets";

export default function BookingWidget() {
  return (
    <div className="relative border border-neutral-300 rounded-xl overflow-hidden w-full max-w-md mx-auto">
      {/* Background Image */}
      <img
        src={ace10} // 
        alt="Event Centre"
        className="w-full h-[550px] sm:h-[600px] object-cover"
      />

      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Back Arrow */}
      {/* <button className="absolute top-4 left-4 p-2 bg-white bg-opacity-80 rounded-full">
        <ArrowLeft className="w-4 h-4 text-black" />
      </button> */}

      {/* Booking Widget Overlay */}
      <div className="font-host-grotesk absolute inset-0 flex flex-col justify-center p-4 text-white">
        {/* Title */}
        <h3 className="font-host-grotesk text-center text-2xl sm:text-2xl font-semibold mb-4">
          Find Events Centre
        </h3>

        {/* Form Container */}
        <div className="bg-white bg-opacity-60 backdrop-blur-m rounded-xl px-3 py-7 mb-3 text-black w-full  mx-auto">
          {/* Check In / Check Out */}
          <div className="flex flex-col sm:flex-row sm:space-x-2 mb-3">
            <div className="flex-1 mb-3 sm:mb-0">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="checkin"
              >
                Check in
              </label>
              <input
                type="date"
                id="checkin"
                className="w-full px-3 py-2 rounded-md text-black border"
              />
            </div>
            <div className="flex-1">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="checkout"
              >
                Check out
              </label>
              <input
                type="date"
                id="checkout"
                className="w-full px-3 py-2 rounded-md text-black border"
              />
            </div>
          </div>

          {/* Estimated Capacity */}
          <div className="mb-1 pt-1">
            <span className="text-[#292929] font-host-grotesk font-normal mb-1 text-xl">
              Estimated Capacity
            </span>
          </div>
          <div className="flex flex-col sm:flex-row sm:space-x-2 mb-3">
            <div className="flex-1 mb-3 sm:mb-0">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="minCapacity"
              >
                Min
              </label>
              <input
                type="number"
                id="minCapacity"
                placeholder="300"
                className="w-full px-3 py-2 rounded-md text-black border"
              />
            </div>
            <div className="flex-1">
              <label
                className="block text-sm font-medium mb-1"
                htmlFor="maxCapacity"
              >
                Max
              </label>
              <input
                type="number"
                id="maxCapacity"
                placeholder="2000"
                className="w-full px-3 py-2 rounded-md text-black border"
              />
            </div>
          </div>

          {/* Search Button */}
          <button className="w-full mt-1 bg-black text-md text-white font-medium py-4 rounded-full hover:bg-gray-800">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
