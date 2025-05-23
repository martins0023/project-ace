import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { services as rawServices, premiumPromo } from "./constants/index";
import { filterOptions } from "./constants/index";
import { Heart, Filter, ArrowUpRightFromCircle } from "lucide-react";
import FilterModal from "./components/FilterModal";
import SidebarFilters from "./components/SidebarFilters";
import Navbar from "../../components/Navbar";
import FilledHeart from "./components/FilledHeart";
import Preloader from "../../components/Preloader";

// Custom filled-heart SVG (path from Heroicons Solid)

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

export default function LookupService({ svc }) {
  // Inject promo at random
  const [services, setServices] = useState([]);
  useEffect(() => {
    const shuffled = shuffle([...rawServices]);
    const idx = Math.floor(Math.random() * (shuffled.length + 1));
    shuffled.splice(idx, 0, premiumPromo);
    setServices(shuffled);
  }, []);

  const navigate = useNavigate();

  const [favorites, setFavorites] = useState([]);
  const toggleFav = (id) =>
    setFavorites((f) =>
      f.includes(id) ? f.filter((x) => x !== id) : [...f, id]
    );

  // Filters & search
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({});
  const [showFilterModal, setShowFilterModal] = useState(false);

  const applyFilter = (svc) => {
    if (search && !svc.title.toLowerCase().includes(search.toLowerCase()))
      return false;
    for (let [key, val] of Object.entries(filters)) {
      if (val && val !== "All" && svc[key] !== val) return false;
    }
    return true;
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate data fetch
    setTimeout(() => setLoading(false), 2000);
  }, []);

  if (loading) return <Preloader />;

  return (
    <div className="min-h-screen bg-gray-50 font-host-grotesk">
      <Navbar />
      <div className="p-4 max-w-screen-xl mx-auto">
        {/* Search + Filter Button */}
        <div className="flex rounded-lg items-center mb-4">
          <input
            type="text"
            placeholder="Search services..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-grow border rounded-l-lg px-3 py-2"
          />
          <button
            onClick={() => setShowFilterModal(true)}
            className="bg-white border-l-0 border px-3 py-2 rounded-r-lg hover:bg-gray-100"
          >
            <Filter className="" />
          </button>
        </div>

        <div className="flex">
          {/* Sidebar (desktop only) */}
          <div className="hidden lg:block w-64 pr-4">
            <SidebarFilters
              options={filterOptions}
              filters={filters}
              setFilters={setFilters}
            />
          </div>

          {/* Services Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.filter(applyFilter).map((svc) => (
              <AnimatePresence exitBeforeEnter>
                <div
                  key={svc.id}
                  className={`relative bg-white rounded-xl hover:shadow-xl shadow-md overflow-hidden ${
                    svc.premium ? "border-2 border-yellow-500" : ""
                  }`}
                >
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">{svc.title}</h3>
                    {svc.subtitle && (
                      <p className="text-sm text-gray-600">{svc.subtitle}</p>
                    )}
                    {!svc.premium && (
                      <>
                        <p className="text-sm mt-2">Category: {svc.category}</p>
                        <p className="text-sm">
                          Type: {svc.type}, Style: {svc.workStyle}
                        </p>

                        {/* view details */}
                        <div
                          onClick={() => navigate(`/services/${svc.id}`)}
                          className="flex items-center justify-between mt-5 cursor-pointer"
                        >
                          <p className="font-bold">${svc.price}</p>
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
      </div>

      {/* Mobile Filter Modal */}
      <FilterModal
        isOpen={showFilterModal}
        onClose={() => setShowFilterModal(false)}
        options={filterOptions}
        filters={filters}
        setFilters={setFilters}
      />
    </div>
  );
}
