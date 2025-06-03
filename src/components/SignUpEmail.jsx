// src/components/LoginEmail.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Eye,
  EyeOff,
  Loader,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
} from "lucide-react";
import { logo } from "../assets";

export default function SignUpEmail({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      // replace this with your real login call, e.g.:
      // await api.post("/auth/login", { email, password });
      if (onLogin) await onLogin({ email, password });
    } catch (err) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <form
        onSubmit={handleSubmit}
        className="max-w-md w-full font-host-grotesk bg-white shadow-md rounded-xl p-6 space-y-6"
      >
        <Link to="/" className="flex cursor-pointer items-center gap-2 mb-4">
          <img src={logo} alt="logo" className="w-20 h-20" />
          <p className="font-monument">project ace</p>
        </Link>
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Sign Up Using Email
        </h2>

        {error && <p className="text-sm text-red-600 text-center">{error}</p>}

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="you@example.com"
          />
        </div>

        <div className="space-y-2 relative">
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type={showPwd ? "text" : "password"}
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Your password"
          />
          <button
            type="button"
            onClick={() => setShowPwd((v) => !v)}
            className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700 pt-4"
          >
            {showPwd ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full flex items-center justify-center space-x-2 px-4 py-2 rounded-md text-white ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-primary hover:bg-primary/90"
          }`}
        >
          {loading && <Loader className="animate-spin w-5 h-5" />}
          <span>{loading ? "Signing up…" : "Sign up"}</span>
        </button>

        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <a href="/login-email" className="text-primary hover:underline">
            Sign in
          </a>
        </p>
        <p className="text-gray-500 text-xs text-center mb-4">
          By creating an account you agree with our{" "}
          <span className="underline">Terms of Service, Policy, Privacy, </span>{" "}
          and our default{" "}
          <span className="underline">Notification Settings</span>
        </p>
      </form>

      <div className="mt-8 flex space-x-6">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-primary transition"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-primary transition"
        >
          <Twitter size={20} />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-primary transition"
        >
          <Facebook size={20} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-primary transition"
        >
          <Instagram size={20} />
        </a>
      </div>
    </div>
  );
}
