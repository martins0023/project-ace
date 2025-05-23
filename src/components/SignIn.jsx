// src/pages/SignIn.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../contexts/AuthContext";
import { logo } from "../assets";

export default function SignIn() {
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

  return (
    <>
      <ToastContainer position="top-center" />
      <AnimatePresence>
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
              onClick={() => navigate(-1)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt="logo" className="w-20 h-20" />
              <p className="font-monument">project ace</p>
            </div>

            <p className="font-medium font-poppins text-gray-800 text-center text-lg mb-6">
              Login or create an account using your email
            </p>

            <div className="flex flex-col gap-4">
              <button
                onClick={handleGoogleSignIn}
                className="w-full bg-black rounded-lg h-fit p-5 justify-center flex cursor-pointer hover:rounded-full"
              >
                <img
                  src="https://img.icons8.com/color/48/000000/google-logo.png"
                  className="w-5 h-5 mr-2"
                />
                <p className="text-white">Sign in with Google</p>
              </button>

              <div className="flex items-center gap-2">
                <div className="flex-1 border-b" />
                <span className="text-gray-400">or</span>
                <div className="flex-1 border-b" />
              </div>

              <button
                onClick={() => navigate("/login-email")}
                className="w-full bg-none border border-1 rounded-md h-fit p-5 justify-center cursor-pointer flex hover:rounded-full hover:bg-gray-100"
              >
                <img
                  src="https://img.icons8.com/ios/50/000000/email.png"
                  className="w-5 h-5 mr-2"
                />
                Sign in with Email
              </button>
            </div>

            <p className="text-gray-500 text-xs text-center mb-4 mt-5">
                By creating an account you agree with our{" "}
                <span className="underline">
                  Terms of Service, Policy, Privacy,{" "}
                </span>{" "}
                and our default{" "}
                <span className="underline">Notification Settings</span>
              </p>

            <p className="text-gray-500 text-sm text-center mt-6">
              Don’t have an account?{" "}
              <span
                onClick={() => navigate("/signup")}
                className="underline cursor-pointer"
              >
                Sign Up
              </span>
            </p>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
