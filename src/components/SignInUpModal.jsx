import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import { useGoogleLogin } from "@react-oauth/google";
import * as jwtDecodeModule from "jwt-decode";
import { useAuth } from "../contexts/AuthContext";
import { logo } from "../assets";

export default function SignInUpModal({ isOpen, onClose }) {
  const navigate = useNavigate();
  const { user, loginWithGoogle } = useAuth();

  // whenever `user` becomes non-null, we've signed in
  useEffect(() => {
    if (user) {
      toast.success(`Welcome back, ${user.user_metadata.full_name}!`);
      // navigate("/lookup-service");
    }
  }, [user, navigate]);

  // Handle the Google button click
  const handleGoogleSignIn = async () => {
    try {
      const { error } = await loginWithGoogle();
      if (error) {
        throw error;
      }
      // popup is open; onAuthStateChange in context will pick it up
    } catch (err) {
      console.error("Google sign‑in failed:", err);
      toast.error(err.message || "Google sign‑in failed");
    }
  };
  // If not open, render nothing
  if (!isOpen) return null;

  const modalContent = (
    <AnimatePresence>
      <ToastContainer position="top-center" />
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

            <div className="flex items-center gap-2">
              <img src={logo} alt="logo" className="w-20 h-20" />
              <p className="font-monument">project ace</p>
            </div>

            <div className="space-y-5 font-poppins">
              <p className="font-medium text-gray-800 text-center text-lg">
                Create or login into your account using your email
              </p>

              <div className="flex flex-col gap-3 pb-5 pt-2">
                <button onClick={handleGoogleSignIn} className="w-full bg-black rounded-lg hover:rounded-full h-fit p-5 justify-center flex cursor-pointer hover:bg-gray-800">
                  <img
                    src="https://img.icons8.com/color/48/000000/google-logo.png"
                    className="w-5 h-5 mr-2"
                  />
                  <p className="text-white">Sign up with Google</p>
                </button>

                <button className="flex flex-row items-center gap-2">
                  <div className="border-b border-gray-300 w-full" />
                  <p className="text-gray-400">or</p>
                  <div className="border-b border-gray-300 w-full" />
                </button>

                <div className="w-full bg-none border border-1 rounded-lg hover:rounded-full h-fit p-5 justify-center cursor-pointer flex hover:bg-gray-100">
                  <img
                    src="https://img.icons8.com/ios/50/000000/email.png"
                    className="w-5 h-5 mr-2"
                  />
                  <p className="text-black">Sign up with Email</p>
                </div>
              </div>

              <p className="text-gray-500 text-xs text-center mb-4">
                By creating an account you agree with our{" "}
                <span className="underline">
                  Terms of Service, Policy, Privacy,{" "}
                </span>{" "}
                and our default{" "}
                <span className="underline">Notification Settings</span>
              </p>

              <p className="text-gray-500 text-center pb-4">
                Already have an account?{" "}
                <a href="/login" className="underline cursor-pointer">Log In</a>
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // Portal into document.body
  return createPortal(modalContent, document.body);
}
