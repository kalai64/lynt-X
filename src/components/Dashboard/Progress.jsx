"use client";

import { useGetMetricsData } from "@/hooks/dashboard";
import LoadingSpinner from "../LoadingSpinner";

export default function Progress() {
  const { metrics, isLoading, isError } = useGetMetricsData();

  if (isLoading) return <LoadingSpinner />;
  if (isError || !metrics)
    return (
      <div className="text-center text-red-500">
        Failed to load progress data.
      </div>
    );

  const { finishedbatchcount, pendingbatchescount, totalbatch } = metrics;

  // Calculate counts
  const completed = finishedbatchcount ?? 0;
  const pending = pendingbatchescount ?? 0;
  const inProgress = totalbatch - (completed + pending);

  // Calculate percentages
  const completedPercentage = totalbatch ? Number(((completed / totalbatch) * 100).toFixed(2)) : 0;
  const inProgressPercentage = totalbatch ? Number(((inProgress / totalbatch) * 100).toFixed(2)) : 0;
  const pendingPercentage = totalbatch ? Number(((pending / totalbatch) * 100).toFixed(2)) : 0;

  // const completedPercentage = 80
  // const inProgressPercentage = 10
  // const pendingPercentage = 10

  const cx = 100; 
  const cy = 100; 
  const r = 90;
  const strokeWidth = 20;

  const totalAngle = 180; 
  const completedAngle = (completedPercentage / 100) * totalAngle;
  const inProgressAngle = (inProgressPercentage / 100) * totalAngle;
  const pendingAngle = (pendingPercentage / 100) * totalAngle;

  // Function to calculate arc path
  const getArcPath = (startAngle, endAngle) => {
    // Convert angles to radians, adjust for half-circle (starts at 180°, ends at 0°)
    const startRad = ((180 + startAngle) * Math.PI) / 180; // Start at left (180°)
    const endRad = ((180 + endAngle) * Math.PI) / 180;
    const largeArc = endAngle - startAngle <= 180 ? 0 : 1;
    const x1 = cx + r * Math.cos(startRad);
    const y1 = cy + r * Math.sin(startRad);
    const x2 = cx + r * Math.cos(endRad);
    const y2 = cy + r * Math.sin(endRad);
    return `M ${x1}, ${y1} A ${r}, ${r}, 0, ${largeArc}, 1, ${x2}, ${y2}`;
  };

  // Calculate start and end angles for each segment (in degrees, relative to 180° start)
  const completedStart = 0;
  const completedEnd = completedStart + completedAngle;
  const inProgressStart = completedEnd;
  const inProgressEnd = inProgressStart + inProgressAngle;
  const pendingStart = inProgressEnd;
  const pendingEnd = inProgressEnd + pendingAngle;

  return (
    <div className="w-full bg-[#f9f8f6] rounded-xl p-5 text-center max-w-md mx-auto">
      <div className="text-lg font-semibold text-black mb-4">Project Progress</div>

      <div className="bg-white rounded-xl relative w-80 h-50 mx-auto pt-4">
        <svg viewBox="0 0 200 120" className="w-full h-full">
          {/* Completed */}
          {completedPercentage > 0 && (
            <path
              d={getArcPath(completedStart, completedEnd)}
              fill="none"
              stroke="#8b5cf6"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
          )}

          {/* In Progress */}
          {inProgressPercentage > 0 && (
            <path
              d={getArcPath(inProgressStart, inProgressEnd)}
              fill="none"
              stroke="#facc15"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
          )}

          {/* Pending */}
          {pendingPercentage > 0 && (
            <path
              d={getArcPath(pendingStart, pendingEnd)}
              fill="none"
              stroke="#e5e7eb"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
            />
          )}
        </svg>

        {/* Center Label */}
        <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="text-3xl font-bold text-gray-900">
            {Math.round(completedPercentage)}%
          </div>
          <div className="text-sm text-gray-500">Project Completed</div>
        </div>
      </div>


      {/* Legend */}
      <div className="flex justify-around text-sm text-gray-700 mt-6">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#8b5cf6]" />
          Completed
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#facc15]" />
          In Progress
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#e5e7eb] border" />
          Pending
        </div>
      </div>
    </div>
  );
}