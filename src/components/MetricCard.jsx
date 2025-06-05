"use client";

import { ArrowDown, ArrowUp } from "lucide-react";

export default function MetricCard({
  title,
  value,
  subtext,
  change,
  changeType = "increase",
  onViewClick,
}) {
  const getColorClasses = () => {
    if (change < 50) {
      return "text-yellow-600 bg-yellow-100";
    }
    return changeType === "increase"
      ? "text-green-600 bg-green-100"
      : "text-red-500 bg-red-100";
  };

  const colorClasses = getColorClasses();

  return (
    <div className="bg-[#f9f8f6] rounded-2xl p-4 transition-shadow duration-300">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-black font-medium">{title}</h3>
        {typeof change === "number" && (
          <div
            className={`flex items-center gap-1 p-1 rounded-2xl text-xs font-medium ${colorClasses}`}
          >
            <span>{change}%</span>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between gap-4">
        <h2 className="text-3xl font-bold text-gray-900">{value}</h2>
        {subtext && (
          <button
            onClick={onViewClick}
            className="text-sm text-blue-500 hover:text-blue-700 cursor-pointer"
          >
            {subtext}
          </button>
        )}
      </div>
    </div>
  );
}
