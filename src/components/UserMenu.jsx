import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function UserMenu({ avatarUrl, displayName, onLogout, onProfile }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      {/* Trigger */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full transition"
      >
        <img
          src={avatarUrl}
          alt={displayName}
          className="w-8 h-8 rounded-full object-cover border-2 border-white shadow-sm"
          onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/40"; }}
        />
        <span className="font-medium text-gray-800">Hi, {displayName.split(" ")[0]}</span>
        <ChevronDown className="w-4 h-4 text-gray-600" />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
          onMouseLeave={() => setOpen(false)}
        >
          <button
            onClick={onProfile}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700"
          >
            My Profile
          </button>
          <button
            onClick={onLogout}
            className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
