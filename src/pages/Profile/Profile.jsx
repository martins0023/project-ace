// src/pages/profile/Profile.jsx
import React, { useState, useRef, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { countries } from "../../constants/countries";
import {
  User,
  Briefcase,
  MessageCircle,
  Bell,
  Settings,
  Lock,
  Trash2,
  LogOut,
  Star,
  Menu,
  SearchIcon,
  Share2,
  Linkedin,
  Twitter,
  Facebook,
  X,
} from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";
import Navbar from "../../components/Navbar";
import Preloader from "../../components/Preloader";
import { supabase } from "../../lib/supabaseClient";
import SignInUpModal from "../../components/SignInUpModal";

const sections = [
  {
    group: "General",
    items: [
      { key: "profile", label: "User Details", icon: <User /> },
      { key: "services", label: "Services Created", icon: <Briefcase /> },
      { key: "inbox", label: "Inbox", icon: <MessageCircle /> },
      { key: "notifications", label: "Notifications", icon: <Bell /> },
    ],
  },
  {
    group: "Settings",
    items: [
      { key: "change-password", label: "Change Password", icon: <Lock /> },
      { key: "delete-account", label: "Delete Account", icon: <Trash2 /> },
      { key: "logout", label: "Logout", icon: <LogOut /> },
    ],
  },
  {
    group: "Share",
    items: [
      { key: "rate-us", label: "Rate on App Store", icon: <Star /> },
      { key: "linkedin", label: "Follow on LinkedIn", icon: <Linkedin /> },
      { key: "twitter", label: "Follow on X", icon: <Twitter /> },
      { key: "facebook", label: "Like on Facebook", icon: <Facebook /> },
    ],
  },
];

function getDialCode(countryName) {
  const c = countries.find((c) => c.name === countryName);
  return c?.dial_code || "";
}

export default function Profile() {
  const { session, logout } = useAuth();
  const user = session?.user;
  const [active, setActive] = useState("profile");
  const [searchTerm, setSearchTerm] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);
  const mainRef = useRef(null);
  const [loading, setLoading] = useState(true);

  // loading & form state
  const [saving, setSaving] = useState(false);
  const [profileData, setProfileData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    address: "",
    country: "",
    location: "",
  });

  console.log("🔑 AUTH USER:", user, "→ loading:", loading);

  // 1) Load from Supabase on mount
  useEffect(() => {
    if (!user?.id) return; // wait for user to exist

    console.log("👤 user is ready:", user.id);
    setLoading(true);

    async function fetchOrInit() {
      let { data, error } = await supabase
        .from("users")
        .select("*")
        .eq("id", user.id)
        .single();

      if (error && error.code === "PGRST116") {
        console.log("➕ No row found, inserting one…");
        // no row yet → create it
        const insertResult = await supabase
          .from("users")
          .insert({ id: user.id, email: user.email })
          .single();
        data = insertResult.data;
        error = insertResult.error;
      }

      if (error) {
        toast.error("Error loading profile");
      } else {
        setProfileData({
          first_name: data.first_name || "",
          last_name: data.last_name || "",
          email: data.email || "",
          phone: data.phone || "",
          address: data.address || "",
          country: data.country || "",
          location: data.location || "",
        });
      }
      console.log("✔️ fetchOrInit complete");
      setLoading(false);
    }

    fetchOrInit();
  }, [user?.id]);

  // When active changes on mobile, auto-scroll into view
  useEffect(() => {
    if (window.innerWidth < 1024 && mainRef.current) {
      mainRef.current.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  }, [active]);

  // filter items by label
  const filtered = sections.map((sect) => ({
    ...sect,
    items: sect.items.filter((it) =>
      it.label.toLowerCase().includes(searchTerm.toLowerCase())
    ),
  }));

  if (!user) {
    // either redirect to your login route:
    // return <Navigate to="/login" replace />;
    // …or show your modal:
    return <SignInUpModal />;
  }

  if (loading) return <Preloader />;

  // form handlers
  const handleChange = (e) =>
    setProfileData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSave = async () => {
    setSaving(true);
    const { data: updated, error } = await supabase
      .from("users")
      .update(profileData)
      .eq("id", user.id)
      .select() // ← ask supabase to return the updated row
      .single(); // ← pick the single record

    if (error) {
      console.error("Supabase update error:", error);
      toast.error(`Update failed: ${error.message}`);
    } else {
      setProfileData({
        first_name: updated.first_name,
        last_name: updated.last_name,
        email: updated.email,
        phone: updated.phone,
        address: updated.address,
        country: updated.country,
        location: updated.location,
      });
      toast.success("Profile updated!");
    }
    setSaving(false);
  };

  const renderContent = () => {
    switch (active) {
      case "profile":
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Your Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                ["First Name", "first_name"],
                ["Last Name", "last_name"],
                ["Email", "email"],
                ["Address", "address"],
                ["Country", "country"],
                ["Phone", "phone"],
                ["Location", "location"],
              ].map(([label, key]) => {
                // Country dropdown
                if (key === "country") {
                  return (
                    <div key={key}>
                      <label className="block text-sm font-medium text-gray-600">
                        {label}
                      </label>
                      <select
                        name="country"
                        value={profileData.country}
                        onChange={(e) => {
                          const selected = e.target.value;
                          setProfileData((p) => ({
                            ...p,
                            country: selected,
                            // when country changes, auto‑prefix phone if empty
                            phone: p.phone.startsWith(getDialCode(selected))
                              ? p.phone
                              : getDialCode(selected),
                          }));
                        }}
                        className="w-full mt-1 border rounded-md px-3 py-2 bg-white"
                      >
                        <option value="">Select country…</option>
                        {countries.map((c) => (
                          <option key={c.code} value={c.name}>
                            {c.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  );
                }

                // Phone input with dynamic prefix
                if (key === "phone") {
                  return (
                    <div key={key}>
                      <label className="block text-sm font-medium text-gray-600">
                        {label}
                      </label>
                      <div className="flex">
                        {/* prefix (read‑only) */}
                        <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 bg-gray-100 text-gray-700">
                          {getDialCode(profileData.country) || "+"}
                        </span>
                        <input
                          type="tel"
                          name="phone"
                          value={
                            // strip prefix on change, but display full
                            profileData.phone
                          }
                          onChange={(e) =>
                            setProfileData((p) => ({
                              ...p,
                              phone: e.target.value,
                            }))
                          }
                          className="w-full mt-1 border rounded-r-md px-3 py-2"
                          placeholder="e.g. 555-1234"
                        />
                      </div>
                    </div>
                  );
                }

                // all other fields
                return (
                  <div key={key}>
                    <label className="block text-sm font-medium text-gray-600">
                      {label}
                    </label>
                    <input
                      type={key === "email" ? "email" : "text"}
                      name={key}
                      value={profileData[key] || ""}
                      onChange={handleChange}
                      readOnly={key === "email"}
                      className={`w-full mt-1 border rounded-md px-3 py-2 ${
                        key === "email" ? "bg-gray-100 cursor-not-allowed" : ""
                      }`}
                    />
                  </div>
                );
              })}
            </div>
            <button
              onClick={handleSave}
              disabled={saving}
              className={`mt-4 px-6 py-2 rounded-md text-white ${
                saving ? "bg-gray-400" : "bg-secondary hover:bg-secondary/90"
              }`}
            >
              {saving ? "Saving…" : "Save Changes"}
            </button>
          </div>
        );
      case "services":
        return <div>— Your services listing goes here —</div>;
      case "inbox":
        return <div>— Your messages go here —</div>;
      case "notifications":
        return <div>— Notification settings go here —</div>;
      case "change-password":
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Change Password</h2>
            <input
              type="password"
              placeholder="Current password"
              className="w-full border rounded-md px-3 py-2"
            />
            <input
              type="password"
              placeholder="New password"
              className="w-full border rounded-md px-3 py-2"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
              Update Password
            </button>
          </div>
        );
      case "delete-account":
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-red-600">
              Delete Account
            </h2>
            <p className="text-gray-700">
              Permanently delete your account. This action cannot be undone.
            </p>
            <button className="bg-red-600 text-white px-4 py-2 rounded-md">
              Delete My Account
            </button>
          </div>
        );
      case "logout":
        logout();
        return null;
      case "rate-us":
      case "linkedin":
      case "twitter":
      case "facebook":
        return <div>— Redirecting to share action… —</div>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      <ToastContainer position="top-center" />
      <Navbar />
      <div className="pt-10 pb-5 sm:pb-10 p-4 max-w-7xl mx-auto flex flex-col lg:grid-cols-4 gap-2">
        <p className="text-2xl sm:text-2xl font-semibold font-montserrat-alternates">
          App Settings
        </p>
        <p className="text-md sm:text-xl font-normal">modify your settings</p>
      </div>

      <div className="max-w-7xl mx-auto lg:flex">
        {/* mobile menu button */}
        <div className="lg:hidden px-4 mb-2">
          <button
            onClick={() => setMobileOpen((o) => !o)}
            className="p-2 border rounded-md"
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Sidebar */}
        {(mobileOpen || window.innerWidth >= 1024) && (
          <nav className="lg:w-1/4 border-b lg:border-b-0 lg:border-r px-4 ">
            {/* search */}
            <div className="relative my-4">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search…"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border rounded-md focus:outline-none"
              />
            </div>

            {filtered.map(({ group, items }) =>
              items.length > 0 ? (
                <div key={group} className="mb-6">
                  <h3 className="text-gray-500 uppercase text-xs font-semibold mb-2">
                    {group}
                  </h3>
                  <ul className="space-y-1">
                    {items.map(({ key, label, icon }) => (
                      <li key={key}>
                        <button
                          onClick={() => setActive(key)}
                          className={`w-full flex items-center gap-2 px-3 py-2 rounded-md ${
                            active === key
                              ? "bg-primary text-white"
                              : "hover:bg-gray-100 text-gray-700"
                          }`}
                        >
                          <span className="w-5 h-5">{icon}</span>
                          <span className="flex-1 text-left">{label}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null
            )}
          </nav>
        )}

        {/* Main Content */}
        <main ref={mainRef} className="flex-1 p-6 bg-white lg:bg-transparent">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
