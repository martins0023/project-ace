// src/components/Preloader.jsx
import React from "react";
import { motion } from "framer-motion";
import "../Preloader.css"; // for any additional CSS
import { logo } from "../assets";

export default function Preloader() {
  return (
    <div className="fixed inset-0 bg-primary flex items-center justify-center z-50 overflow-hidden">
      {/* Background pulse */}
      <motion.div
        className="absolute inset-0"
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{ backgroundColor: "#040C11" }}
      />

      {/* Logo wrapper: slow rotation */}
      <motion.div
        className="relative w-32 h-32"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
      >
        {/* SVG path‐draw + fill pulse */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.img
        src={logo}
        alt="Loading..."
        className="w-24 h-24 z-10"
      />
        </motion.div>
      </motion.div>
    </div>
);
}
