"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  Legend,
} from "recharts";
import { useState } from "react";
import { useGetMetricsData } from "@/hooks/dashboard";
import LoadingSpinner from "../LoadingSpinner";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white text-gray-800 text-xs px-3 py-2 rounded-lg shadow-lg border border-gray-200">
        <p><span className="font-semibold">Finished Images:</span> {payload.find(p => p.name === "Finished Images")?.value || 0}</p>
        <p><span className="font-semibold">Pending Images:</span> {payload.find(p => p.name === "Pending Images")?.value || 0}</p>
      </div>
    );
  }
  return null;
};

export default function BatchPerformanceChart() {
  const { metrics, isLoading, isError } = useGetMetricsData();
  const [selectedYear, setSelectedYear] = useState("2025");

  if (isLoading) return <LoadingSpinner />;
  if (isError || !metrics)
    return (
      <div className="text-center text-red-500">
        Failed to load progress data.
      </div>
    );

  const data = metrics.chart[selectedYear] || [];

  return (
    <div className="w-full rounded-xl p-5 bg-[#f9f8f6]">
      <div className="flex justify-between items-center mb-2">
        <div>
          <h2 className="font-semibold text-black text-base">Batch Analysis</h2>
        </div>
        <div>
          <select
            className="border border-gray-300 rounded-md p-1 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            {Object.keys(metrics.chart).map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="w-full h-64 p-4 bg-white rounded-3xl">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barSize={20}>
            <XAxis
              dataKey="name"
              tick={{ fontSize: 12, fill: "#4b5563" }}
              axisLine={{ stroke: "#d1d5db", strokeWidth: 1, strokeDasharray: "3 3" }}
              tickLine={{ stroke: "#4b5563", strokeWidth: 1 }}
            />
            <YAxis
              tick={{ fontSize: 12, fill: "#4b5563" }}
              axisLine={{ stroke: "#d1d5db", strokeWidth: 1, strokeDasharray: "3 3" }}
              tickLine={false}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: "transparent" }} />
            <Legend verticalAlign="bottom" height={36} />
            <Bar
              dataKey="finished"
              name="Finished Images"
              radius={[10, 10, 10, 10]}
              fill="#8b5cf6"
              animationDuration={500}
            >
              {data.map((entry, index) => (
                <Cell key={`finished-${index}`} />
              ))}
            </Bar>
            <Bar
              dataKey="pending"
              name="Pending Images"
              radius={[10, 10, 10, 10]}
              fill="#f59e0b"
              animationDuration={500}
            >
              {data.map((entry, index) => (
                <Cell key={`pending-${index}`} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}