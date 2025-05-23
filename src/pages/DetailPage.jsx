// DetailPage.jsx
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { lookups } from "../constants";
import { MapPin, Star, Verified } from "lucide-react";
import Navbar from "../components/Navbar";

export default function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the item by ID
  const lookup = lookups.find((item) => item.id === Number(id));

  if (!lookup) {
    return <div>Item not found</div>;
  }

  return (
    <div className="w-full">
      <Navbar />

      {/* Header Section */}
      <div className="p-4 max-w-screen-xl mx-auto flex flex-col sm:flex-row gap-6">
        {/* Main Image */}
        <div className="w-full sm:w-1/2 rounded-lg overflow-hidden shadow-md">
          <img
            src={lookup.image}
            alt={lookup.lookupName}
            className="w-full h-64 sm:h-96 object-cover"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col w-full sm:w-1/2 justify-between">
          <div>
            {/* Title */}
            <h1 className="font-host-grotesk text-2xl sm:text-3xl font-bold">
              {lookup.lookupName} {lookup.verification === "Verified" && `${<Verified className="w-6 h-6 text-black" />}`}
            </h1>
            {/* Location & Distance */}
            <p className="flex items-center gap-2 mt-1 text-sm sm:text-base">
              <MapPin className="w-4 h-4" />
              {lookup.lookupLocation}, {lookup.distance} kilometers away
            </p>

            {/* Tagline */}
            <p className="mt-3 text-sm sm:text-base text-gray-700">
              {lookup.tagline}
            </p>

            {/* Price & Rating */}
            <div className="flex items-center justify-between mt-4">
              <div className="flex text-yellow-500">
                {Array(Math.round(lookup.reviews))
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} className="w-4 h-4" />
                  ))}
              </div>
              <p className="font-semibold text-lg">
                ${lookup.pricing?.toLocaleString()}
                <span className="text-sm text-gray-500">/24hrs</span>
              </p>
            </div>

            {/* Services */}
            <div className="flex flex-wrap gap-2 mt-4">
              {lookup.services?.map((service, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-gray-200 text-sm rounded-full"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Additional Info & Images */}
      <div className="max-w-screen-xl mx-auto px-4 mt-6">
        <h2 className="font-host-grotesk text-xl sm:text-2xl font-bold mb-3">
          More Information
        </h2>
        <div className="flex flex-wrap gap-2">
          {lookup.moreInformation?.map((info, idx) => (
            <span
              key={idx}
              className="px-3 py-1 bg-gray-200 text-sm rounded-full"
            >
              {info}
            </span>
          ))}
        </div>

        {/* Example Thumbnails */}
        <div className="mt-6">
          <h3 className="font-host-grotesk text-lg sm:text-xl font-semibold mb-2">
            Interior View
          </h3>
          <div className="flex gap-3 overflow-x-auto">
            {/* Replace with real images if you have them */}
            <img
              src={lookup.image}
              alt="interior"
              className="w-24 h-24 object-cover rounded-md"
            />
            <img
              src={lookup.image}
              alt="interior"
              className="w-24 h-24 object-cover rounded-md"
            />
            <img
              src={lookup.image}
              alt="interior"
              className="w-24 h-24 object-cover rounded-md"
            />
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-6">
          <h3 className="font-host-grotesk text-lg sm:text-xl font-semibold mb-2">
            Reviews
          </h3>
          {lookup.reviewsList?.map((review, idx) => (
            <div key={idx} className="border-b py-2">
              <p className="text-sm sm:text-base font-semibold">
                {review.rating} stars | {review.reviewer}
              </p>
              <p className="text-sm text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>

        {/* Comments Section */}
        <div className="mt-6">
          <h3 className="font-host-grotesk text-lg sm:text-xl font-semibold mb-2">
            Comments
          </h3>
          {lookup.comments?.map((cmt, idx) => (
            <div key={idx} className="border-b py-2">
              <p className="text-sm font-medium">{cmt.commenter}</p>
              <p className="text-sm text-gray-700">{cmt.text}</p>
            </div>
          ))}
        </div>

        {/* Back / Book Buttons (Optional) */}
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-gray-200 text-black rounded-md hover:bg-gray-300"
          >
            Go Back
          </button>
          <button className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800">
            Book now
          </button>
        </div>
      </div>
    </div>
  );
}
