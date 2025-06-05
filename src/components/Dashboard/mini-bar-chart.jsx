"use client"

export default function MiniBarChart({ data = [20, 40, 30, 70, 50, 60, 35], highlightIndex = 3 }) {
  return (
    <div className="flex items-end h-full w-full gap-1">
      {data.map((value, index) => (
        <div
          key={index}
          className={`w-full rounded-sm ${index === highlightIndex ? "bg-blue-500" : "bg-gray-200"}`}
          style={{ height: `${value}%` }}
        ></div>
      ))}
    </div>
  )
}
