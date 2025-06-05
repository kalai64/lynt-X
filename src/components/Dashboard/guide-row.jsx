"use client"

import { Eye, ArrowUp, ArrowDown } from "lucide-react"

export default function GuideRow({ id, status, name, views, change, changeType = "increase", date }) {
  return (
    <>
      <td className="py-4 text-gray-500">{id}</td>
      <td className="py-4">
        <span
          className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
            status === "Live" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
          }`}
        >
          {status === "Live" ? (
            <>
              <span className="w-1.5 h-1.5 rounded-full bg-green-600 mr-1"></span> Live
            </>
          ) : (
            <>
              <span className="w-1.5 h-1.5 rounded-full bg-gray-600 mr-1"></span> Disable
            </>
          )}
        </span>
      </td>
      <td className="py-4 font-medium">{name}</td>
      <td className="py-4">
        <div className="flex items-center gap-2">
          <Eye className="w-4 h-4 text-gray-400" />
          <span>{views}</span>
          <span
            className={`flex items-center text-xs ${changeType === "increase" ? "text-green-600" : "text-red-500"}`}
          >
            {change}%{changeType === "increase" ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
          </span>
        </div>
      </td>
      <td className="py-4 text-gray-500">{date}</td>
    </>
  )
}
