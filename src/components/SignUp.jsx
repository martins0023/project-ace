import React from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useGoogleLogin } from "@react-oauth/google";
import { useAuth } from "../contexts/AuthContext";
import { logo } from "../assets";
import axios from "axios";

const SignUp = () => {
  const navigate = useNavigate();
  const { user, loginWithGoogle } = useAuth();

  // If already logged in, redirect to profile
  if (user) navigate("/profile");

  const HandleBack = () => navigate(-1);
  const HandleSignIn = () => navigate("/login");
  return (
    <div>
      <AnimatePresence>
        {/* {isOpen && ( */}
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
              onClick={HandleBack}
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
                <button
                  onClick={() => loginWithGoogle()}
                  className="w-full bg-black rounded-lg h-fit p-5 justify-center flex cursor-pointer hover:rounded-full"
                >
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

                <div className="w-full bg-none border border-1 rounded-md h-fit p-5 justify-center cursor-pointer flex hover:rounded-full hover:bg-gray-100">
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
                <span
                  onClick={HandleSignIn}
                  className="underline cursor-pointer"
                >
                  Log In
                </span>
              </p>
            </div>
          </motion.div>
        </motion.div>
        {/* )} */}
      </AnimatePresence>
    </div>
  );
};

export default SignUp;
