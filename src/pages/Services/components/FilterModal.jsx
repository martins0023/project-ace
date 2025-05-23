import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import SidebarFilters from "./SidebarFilters";

export default function FilterModal({ isOpen, onClose, ...props }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-40 z-50 flex"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white w-3/4 max-w-xs h-full p-4"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
          >
            <button
              onClick={onClose}
              className="text-gray-500 flex gap-1 items-center hover:text-black mb-4"
            >
              <X className="w-5 h-5" />
              <p>close</p>
            </button>
            <SidebarFilters {...props} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
