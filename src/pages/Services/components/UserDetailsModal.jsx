import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export default function UserDetailsModal({ isOpen, onClose, user }) {
  if (!user) return null;
  const { firstName, lastName, email, phone, address, social } = user;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-xl w-11/12 max-w-md p-6 relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              <X size={20} />
            </button>

            <h2 className="text-xl font-semibold mb-4">
              {firstName} {lastName}
            </h2>

            <div className="space-y-3">
              {[
                ["Email", email],
                ["Phone", phone],
                ["Address", address],
              ].map(([label, value]) => (
                <div key={label}>
                  <label className="block text-sm font-medium text-gray-600">
                    {label}
                  </label>
                  <input
                    type="text"
                    readOnly
                    value={value}
                    className="w-full border rounded px-3 py-2 bg-gray-100 text-gray-700"
                  />
                </div>
              ))}

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  Social Links
                </label>
                <ul className="flex flex-row items-center space-x-1">
                  {Object.entries(social).map(([platform, url]) => (
                    <li key={platform}>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline text-sm"
                      >
                        {platform.charAt(0).toUpperCase() + platform.slice(1)} |
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600 mb-2">
                  View full profile
                </label>
                <div className="flex items-center gap-2 text-blue-600 hover:underline cursor-pointer">
                  <p className="text-sm">{firstName}'s profile</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-square-arrow-out-up-right-icon lucide-square-arrow-out-up-right"
                  >
                    <path d="M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6" />
                    <path d="m21 3-9 9" />
                    <path d="M15 3h6v6" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
