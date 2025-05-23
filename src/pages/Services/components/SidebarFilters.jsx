import React from "react";

export default function SidebarFilters({ options, filters, setFilters }) {
    return (
      <div className="bg-white p-4 rounded-xl shadow">
        {Object.entries(options).map(([key, vals]) => (
          <div key={key} className="mb-4">
            <h4 className="font-semibold mb-2 capitalize">{key}</h4>
            {key === "priceRanges" ? (
              vals.map((r) => (
                <label key={r.label} className="flex items-center mb-1">
                  <input
                    type="radio"
                    name="priceRange"
                    onChange={() =>
                      setFilters((f) => ({ ...f, price: r }))
                    }
                    checked={filters.price === r}
                    className="mr-2"
                  />
                  {r.label}
                </label>
              ))
            ) : (
              <select
                value={filters[key] || "All"}
                onChange={(e) =>
                  setFilters((f) => ({ ...f, [key]: e.target.value }))
                }
                className="w-full border rounded px-2 py-1"
              >
                <option>All</option>
                {vals.map((v) => (
                  <option key={v}>{v}</option>
                ))}
              </select>
            )}
          </div>
        ))}
      </div>
    );
  }
  