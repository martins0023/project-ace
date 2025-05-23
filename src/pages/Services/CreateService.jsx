// pages/Services/service.jsx
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import PremiumModal from "./components/PremiumModal";
import { Loader, Sparkles } from "lucide-react";
import { educationLevels } from "./constants";
import Preloader from "../../components/Preloader";
import { useAuth } from "../../contexts/AuthContext";

// Step indicator component
const Stepper = ({ steps, current }) => (
  <div className="flex items-center mb-8">
    {steps.map((step, i) => (
      <div key={i} className="flex-1">
        <div
          className={`w-10 h-10 mx-auto rounded-full text-lg flex items-center justify-center 
            ${
              i <= current ? "bg-black text-white" : "bg-gray-200 text-gray-500"
            }`}
        >
          {i + 1}
        </div>
        <p className="text-center text-sm mt-2">{step}</p>
        {i < steps.length - 1 && (
          <div
            className={`h-1 bg-current mx-auto mt-2 ${
              i < current ? "w-full bg-black" : "w-1/2 bg-gray-200"
            }`}
          />
        )}
      </div>
    ))}
  </div>
);

// Navigation buttons
const StepNav = ({ current, max, onPrev, onNext, onSubmit, loading }) => (
  <div className="flex justify-between mt-6">
    {current > 0 ? (
      <button
        onClick={onPrev}
        className="px-4 py-2 bg-gray-200 text-black rounded-lg hover:bg-gray-300"
      >
        Back
      </button>
    ) : (
      <div />
    )}

    {current < max - 1 ? (
      <button
        onClick={onNext}
        disabled={loading}
        className="px-4 py-2 flex bg-black text-white rounded-lg hover:bg-gray-800"
      >
        {loading && <Loader className="animate-spin mr-2" size={20} />}
        Next
      </button>
    ) : (
      <button
        onClick={onSubmit}
        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
      >
        Finish
      </button>
    )}
  </div>
);

// Step 1: Personal Info
const Step1 = ({ data, onChange }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    {["firstName", "lastName"].map((field) => (
      <div key={field}>
        <label className="block mb-1 font-medium">
          {field === "firstName" ? "First Name" : "Last Name"}
        </label>
        <input
          placeholder="John"
          type="text"
          name={field}
          value={data[field]}
          onChange={onChange}
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>
    ))}
    <div>
      <label className="block mb-1 font-medium">Email</label>
      <input
        placeholder="Johndoe@email.com"
        type="email"
        name="email"
        value={data.email}
        onChange={onChange}
        className="w-full border rounded-lg px-3 py-2"
      />
    </div>
    <div>
      <label className="block mb-1 font-medium">Phone Number</label>
      <input
        placeholder="+234 01028898812"
        type="tel"
        name="phoneNumber"
        value={data.phoneNumber}
        onChange={onChange}
        className="w-full border rounded-lg px-3 py-2"
      />
    </div>
    <div className="">
      <label className="block mb-1 font-medium">Address</label>
      <input
        placeholder="No 8, john doe street"
        type="text"
        name="address"
        value={data.address}
        onChange={onChange}
        className="w-full border rounded-lg px-3 py-2"
      />
    </div>
    <div className="">
      <label className="block mb-1 font-medium">Country</label>
      <input
        type="text"
        name="country"
        value={data.country}
        onChange={onChange}
        className="w-full border rounded-lg px-3 py-2"
      />
    </div>
  </div>
);

// Step 2: Professional Info
const Step2 = ({ data, onChange }) => {
  const handleDeliveryType = (e) => {
    onChange({ target: { name: "deliveryType", value: e.target.value } });
    if (e.target.value !== "custom") {
      onChange({ target: { name: "deliveryCustom", value: "" } });
    }
  };
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
        <label className="block mb-1 font-medium">Profession</label>
        <input
          name="profession"
          value={data.profession}
          onChange={onChange}
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>
      <div>
        <label className="block mb-1 font-medium">Service Type</label>
        <input
          name="serviceType"
          value={data.serviceType}
          onChange={onChange}
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>
      <div>
        <label className="block mb-1 font-medium">Category</label>
        <input
          name="category"
          value={data.category}
          onChange={onChange}
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>
      <div>
        <label className="block mb-1 font-medium">Delivery Days</label>
        <select
          name="deliveryType"
          value={data.deliveryType}
          onChange={handleDeliveryType}
          className="w-full border rounded-lg px-3 py-2 mb-2"
        >
          <option value="days">Days</option>
          <option value="months">Months</option>
          <option value="custom">Custom</option>
        </select>
        {data.deliveryType === "custom" && (
          <input
            name="deliveryCustom"
            value={data.deliveryCustom}
            onChange={onChange}
            placeholder="Enter custom"
            className="w-full border rounded-lg px-3 py-2"
          />
        )}
      </div>
      <div>
        <label className="block mb-1 font-medium">Years of Experience</label>
        <input
          type="number"
          name="experience"
          value={data.experience}
          onChange={onChange}
          className="w-full border rounded-lg px-3 py-2"
        />
      </div>
      {/* <div className="sm:col-span-2">
        <p className="inline-block bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full">
          Premium feature: Create & sell courses
        </p>
      </div> */}
    </div>
  );
};

// Step 3: Education & Bio
const Step3 = ({ data, onChange }) => (
  <div className="grid grid-cols-1 gap-4">
    <div>
      <label className="block mb-1 font-medium">Education Level</label>
      <select
        name="education"
        value={data.education}
        onChange={onChange}
        className="w-full border rounded-lg px-3 py-2"
      >
        <option value="">Select level...</option>
        {educationLevels.map((lvl) => (
          <option key={lvl} value={lvl}>
            {lvl}
          </option>
        ))}
      </select>
    </div>
    <div>
      <label className="block mb-1 font-medium">Short Bio</label>
      <textarea
        name="bio"
        value={data.bio}
        onChange={onChange}
        rows="3"
        className="w-full border rounded-lg px-3 py-2"
      />
    </div>
    <div>
      <label className="block mb-1 font-medium">Why hire you?</label>
      <textarea
        name="pitch"
        value={data.pitch}
        onChange={onChange}
        rows="2"
        className="w-full border rounded-lg px-3 py-2"
      />
    </div>
    <div>
      <label className="block mb-1 font-medium">Social Links</label>
      <input
        name="social"
        value={data.social}
        onChange={onChange}
        placeholder="e.g. https://linkedin.com/..."
        className="w-full border rounded-lg px-3 py-2"
      />
    </div>
  </div>
);

// Step 4: Verification
const Step4 = ({ data, onChange }) => (
  <div className="grid grid-cols-1 gap-4">
    <div>
      <label className="block mb-1 font-medium">Phone or Email</label>
      <input
        name="verifyContact"
        value={data.verifyContact}
        onChange={onChange}
        className="w-full border rounded-lg px-3 py-2"
      />
    </div>
    <div>
      <button
        onClick={() => alert("Verification code sent!")}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Send Verification Code
      </button>
    </div>
    <div>
      <label className="block mb-1 font-medium">Enter Code</label>
      <input
        name="verifyCode"
        value={data.verifyCode}
        onChange={onChange}
        className="w-full border rounded-lg px-3 py-2"
      />
    </div>
  </div>
);

const CreateService = () => {
  const { session } = useAuth();
  const user = session?.user;
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const steps = ["Personal", "Professional", "Education", "Verification"];
  const [currentStep, setCurrentStep] = useState(0);
  const [form, setForm] = useState({
    //step 1: personal
    firstName: user?.user_metadata.full_name?.split(" ")[0] || "",
    lastName:  user?.user_metadata.full_name.split(" ").slice(1).join(" ") || "",
    email:     user?.email || "",
    phoneNumber: user?.user_metadata.phone || "",
    address: user?.user_metadata.address || "",
    country: user?.user_metadata.country || "",
    //step 2: professional
    profession: "",
    serviceType: "",
    category: "",
    deliveryType: "days",
    deliveryCustom: "",
    experience: "",
    //step 3: educational & bio
    education: "",
    bio: "",
    pitch: "",
    social: "",
    // Step 4: verification
    verifyContact: "",
    verifyCode: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

    const handleNext = () => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setCurrentStep((s) => s + 1);
        }, 500);
      };
  const handlePrev = () => setCurrentStep((s) => s - 1);
  const handleSubmit = () => {
    console.log("Ready to send to backend:", form);
    // TODO: call your API here
  };

  const StepComponents = [Step1, Step2, Step3, Step4];
  const ActiveStep = StepComponents[currentStep];

  // useEffect(() => {
  //   // simulate data fetch
  //   setTimeout(() => setLoading(false), 2000);
  // }, []);

  // if (loading) return <Preloader />;

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="p-4 w-full max-w-screen-xl mx-auto">
        <h2 className="font-host-grotesk text-2xl sm:text-3xl font-bold mb-4">
          Create a new service
        </h2>

        <p className="mb-8 sm:text-base text-sm font-host-grotesk">
          Got a skill or passion you want to turn into income? Our platform is
          designed to help freelancers, creators, experts, and entrepreneurs
          launch their services in minutes—no tech skills needed.
          {/* This is your platform to shine. With intuitive tools to build, promote, and manage
          your service, you'll be ready to: 🚀 Launch your service effortlessly
          📄 Showcase your value with high-converting descriptions 💳 Accept
          orders and payments securely 🤝 Connect with clients who need what you
          do Don't just be good at what you do—get paid for it. */}
        </p>

        {/* Stepper */}
        <Stepper steps={steps} current={currentStep} />

        {/* Active Form Step */}
        {/* Animated Active Step */}
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <ActiveStep data={form} onChange={handleChange} />
          </motion.div>
        </AnimatePresence>

        {/* Premium Pill (only on step 2) */}
        {currentStep === 1 && (
          <div className="sm:col-span-2 mt-4">
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-200 to-orange-200 text-yellow-800 px-4 py-2 rounded-full border border-yellow-300 hover:shadow-md hover:scale-100 transition-all duration-300 cursor-pointer"
            >
              <Sparkles className="w-5 h-5 text-orange-600 animate-pulse" />
              <span className="font-semibold text-left">
                Premium feature: Create & sell courses
              </span>
            </button>
          </div>
        )}

        {/* Navigation */}
        <StepNav
          current={currentStep}
          max={steps.length}
          onPrev={handlePrev}
          onNext={handleNext}
          onSubmit={handleSubmit}
          loading={loading}
        />
      </div>

      {/* Premium Feature Modal */}
      <PremiumModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onConfirm={(plan, billing) => {
          console.log("Plan:", plan, billing);
          setModalOpen(false);
        }}
      />
    </div>
  );
};

export default CreateService;
