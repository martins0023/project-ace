import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { plans } from "../constants";
import { X, CheckCircle2 } from "lucide-react";

export default function PremiumModal({ isOpen, onClose, onConfirm }) {
  const [billing, setBilling] = useState("Yearly");
  const [selectedPlan, setSelectedPlan] = useState(plans.plans[0].name);

  const currentPlan = plans.plans.find((p) => p.name === selectedPlan);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-xl w-11/12 max-w-md p-6 relative font-poppins"
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

            <h2 className="text-xl font-semibold mb-4">Upgrade your plan</h2>

            {/* Billing Toggle */}
            <div className="flex bg-gray-100 rounded-full p-1 mb-6">
              {plans.billingOptions.map((opt) => (
                <button
                  key={opt}
                  onClick={() => setBilling(opt)}
                  className={`flex-1 text-center py-2 rounded-full transition ${
                    billing === opt
                      ? "bg-green-600 text-white"
                      : "text-gray-600"
                  }`}
                >
                  {opt}
                  {opt === "Yearly" && (
                    <span className="ml-1 text-xs bg-green-200 text-green-800 px-1 rounded">
                      Save 20%
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Plan Options */}
            <div className="space-y-4 mb-6">
              {plans.plans.map((plan) => {
                const price = plan.price[
                  billing.toLowerCase()
                ].toLocaleString();
                return (
                  <button
                    key={plan.name}
                    onClick={() => setSelectedPlan(plan.name)}
                    className={`w-full border rounded-lg p-4 flex justify-between items-center transition ${
                      selectedPlan === plan.name
                        ? "border-green-600"
                        : "border-gray-300"
                    }`}
                  >
                    <div className="text-left">
                      <p className="font-semibold">{plan.name}</p>
                      <p className="text-gray-600">${price}/month</p>
                    </div>
                    <input
                      type="radio"
                      checked={selectedPlan === plan.name}
                      readOnly
                      className="form-radio text-green-600"
                    />
                  </button>
                );
              })}
            </div>

            {/* Features List */}
            <div className="mb-6 space-y-2">
              {currentPlan.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="text-green-600 mt-1" size={16} />
                  <span className="text-gray-700">{feat}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-4">
              <button
                onClick={onClose}
                className="text-gray-600 hover:text-black"
              >
                Maybe later
              </button>
              <button
                onClick={() => onConfirm(selectedPlan, billing)}
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center"
              >
                Continue with {selectedPlan}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
