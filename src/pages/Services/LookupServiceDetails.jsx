// src/pages/LookupServiceDetails.jsx
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { services, users } from "./constants/index";
import { Star, ArrowUpRightFromCircle, Heart } from "lucide-react";
import Navbar from "../../components/Navbar";
import UserDetailsModal from "./components/UserDetailsModal";
import FilledHeart from "./components/FilledHeart";

export default function LookupServiceDetails() {
  const { id } = useParams();
  const svc = services.find((s) => String(s.id) === id);
  const [userModalOpen, setUserModalOpen] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const toggleFav = (id) =>
    setFavorites((f) =>
      f.includes(id) ? f.filter((x) => x !== id) : [...f, id]
    );
  const navigate = useNavigate();

  if (!svc) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="p-8 text-center">Service not found.</div>
      </div>
    );
  }

  // Find the service owner
  const owner = users.find((u) => u.id === svc.userId);

  // Related services
  const related = services
    .filter((s) => s.id !== svc.id && !s.premium)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50 font-host-grotesk">
      <Navbar />

      {/* Hero Section */}
      <div className="w-full h-64 sm:h-96 overflow-hidden relative">
        <img
          src={svc.image}
          alt={svc.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute bottom-4 left-4 text-white">
          {/* Owner Info */}
          <div className="flex items-center gap-3 mb-5">
            <img
              src={owner.profilePic || "/images/avatar-placeholder.png"}
              alt={`${owner.firstName} ${owner.lastName}`}
              className="w-12 h-12 rounded-full border-2 border-white object-cover"
            />
            <div>
              <p className="font-semibold text-lg">
                {owner.firstName} {owner.lastName}
              </p>
              <p className="text-sm">
                Location: {owner.address.split(",").pop().trim()},{" "}
                {owner.country}
              </p>
            </div>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold">{svc.title}</h1>
          <div className="flex items-center mt-2">
            <span className="text-5xl font-extrabold mr-2">
              {svc.rating?.toFixed(1) || "4.8"}
            </span>
            <span className="text-2xl font-bold mr-2">/ 5</span>
            <div className="flex text-yellow-400">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star key={i} className="w-5 h-5" />
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4 max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-xl sm:text-2xl font-semibold">
            About this Service
          </h2>
          <p className="text-gray-700 leading-relaxed">{svc.description}</p>

          <h3 className="text-lg font-semibold">Key Features</h3>
          <ul className="list-disc list-inside space-y-2">
            {svc.features.map((feat, i) => (
              <li key={i} className="text-gray-700">
                {feat}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-1 sm:gap-4">
            <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition">
              Book This Service
            </button>
            <button
              onClick={() => setUserModalOpen(true)}
              className="mt-6 bg-white hover:bg-gray-100 text-gray-800 font-medium px-6 py-3 rounded-lg border transition"
            >
              View User Details
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="bg-white p-4 rounded-xl shadow">
            <h4 className="font-semibold mb-2">Category</h4>
            <p className="text-gray-800">{svc.category}</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow">
            <h4 className="font-semibold mb-2">Type</h4>
            <p className="text-gray-800">{svc.type}</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow">
            <h4 className="font-semibold mb-2">Price</h4>
            <p className="text-gray-800">${svc.price}</p>
          </div>
        </aside>
      </div>

      {/* You Might Also Like */}
      <div className="p-4 max-w-screen-xl mx-auto mt-12">
        <h3 className="text-2xl font-semibold mb-4 text-center">
          You Might Also Like
        </h3>
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map((rel) => (
            <AnimatePresence exitBeforeEnter>
              <div
                key={rel.id}
                className={`relative bg-white rounded-xl hover:shadow-xl shadow-md overflow-hidden ${
                  rel.premium ? "border-2 border-yellow-500" : ""
                }`}
              >
                <img
                  src={rel.image}
                  alt={rel.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{rel.title}</h3>
                  {svc.subtitle && (
                    <p className="text-sm text-gray-600">{rel.subtitle}</p>
                  )}
                  {!rel.premium && (
                    <>
                      <p className="text-sm mt-2">Category: {rel.category}</p>
                      <p className="text-sm">
                        Type: {rel.type}, Style: {rel.workStyle}
                      </p>

                      {/* view details */}
                      <div
                        onClick={() => navigate(`/services/${rel.id}`)}
                        className="flex items-center justify-between mt-5 cursor-pointer"
                      >
                        <p className="font-bold">${rel.price}</p>
                        <div className="bg-none flex justify-end hover:bg-gradient-to-r from-white to-orange-200 items-center gap-1 flex-end p-2 cursor-pointer border w-fit border-1 rounded-full">
                          <p className="text-black">view details</p>
                          <ArrowUpRightFromCircle className="w-3 h-3 flex-row-reverse" />
                        </div>
                      </div>
                    </>
                  )}
                </div>
                {/* Favorite Toggle */}
                {!svc.premium && (
                  <button
                    onClick={() => toggleFav(svc.id)}
                    className="absolute top-3 right-3 text-red-500"
                  >
                    {/* In your card render: */}
                    {favorites.includes(svc.id) ? (
                      <FilledHeart className="w-6 h-6 text-red-700" />
                    ) : (
                      <Heart className="w-6 h-6 text-red-500 hover:text-red-600 transition-colors" />
                    )}
                  </button>
                )}
              </div>
            </AnimatePresence>
          ))}
        </div>
      </div>

      {/* User Details Modal */}
      <UserDetailsModal
        isOpen={userModalOpen}
        onClose={() => setUserModalOpen(false)}
        user={owner}
      />
    </div>
  );
}
