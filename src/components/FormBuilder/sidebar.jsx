"use client"

import { useDrag } from "react-dnd"
import {
  Type,
  AlignLeft,
  ListFilter,
  CheckSquare,
  Circle,
  Calendar,
  Clock,
  Hash,
  Mail,
  Phone,
  Heading,
  Layers,
} from "lucide-react"

const elementTypes = [
  {
    type: "text-input",
    icon: <Type className="h-4 w-4" />,
    label: "Text Input",
    properties: { label: "Text Input", placeholder: "Enter text", required: false, helpText: "" },
  },
  {
    type: "textarea",
    icon: <AlignLeft className="h-4 w-4" />,
    label: "Text Area",
    properties: { label: "Text Area", placeholder: "Enter text", rows: 3, required: false, helpText: "" },
  },
  {
    type: "select",
    icon: <ListFilter className="h-4 w-4" />,
    label: "Dropdown",
    properties: {
      label: "Dropdown",
      placeholder: "Select an option",
      options: ["Option 1", "Option 2", "Option 3"],
      required: false,
      helpText: "",
    },
  },
  {
    type: "checkbox",
    icon: <CheckSquare className="h-4 w-4" />,
    label: "Checkbox",
    properties: { label: "Checkbox", checked: false, required: false },
  },
  {
    type: "radio",
    icon: <Circle className="h-4 w-4" />,
    label: "Radio Group",
    properties: { groupLabel: "Radio Group", options: ["Option 1", "Option 2"], required: false },
  },
  {
    type: "date",
    icon: <Calendar className="h-4 w-4" />,
    label: "Date",
    properties: { label: "Date", required: false, helpText: "" },
  },
  {
    type: "time",
    icon: <Clock className="h-4 w-4" />,
    label: "Time",
    properties: { label: "Time", required: false, helpText: "" },
  },
  {
    type: "number",
    icon: <Hash className="h-4 w-4" />,
    label: "Number",
    properties: { label: "Number", placeholder: "Enter a number", min: "", max: "", required: false, helpText: "" },
  },
  {
    type: "email",
    icon: <Mail className="h-4 w-4" />,
    label: "Email",
    properties: { label: "Email", placeholder: "Enter your email", required: false, helpText: "" },
  },
  {
    type: "tel",
    icon: <Phone className="h-4 w-4" />,
    label: "Telephone",
    properties: { label: "Telephone", placeholder: "Enter your phone number", required: false, helpText: "" },
  },
  {
    type: "title",
    icon: <Heading className="h-4 w-4" />,
    label: "Title",
    properties: { text: "Section Title", size: "large" },
  },
  {
    type: "child-builder",
    icon: <Layers className="h-4 w-4" />,
    label: "Child Area",
    properties: { title: "Child Build Area", layout: "stack", gridCols: 2, gap: 4 },
    children: [],
  },
]

function DraggableElement({ element }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "form-element",
    item: { element, isNew: true },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  return (
    <div
      ref={drag}
      className={`flex flex-col items-center justify-center cursor-grab gap-1.5 rounded-lg border border-gray-200 bg-white p-3 shadow-sm hover:bg-indigo-50 hover:shadow-md transition-all ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-indigo-100 text-indigo-600">
        {element.icon}
      </div>
      <span className="text-xs font-medium text-gray-800 text-center">{element.label}</span>
    </div>
  )
}

export default function Sidebar() {
  return (
    <aside className="w-64 border-r bg-white p-4 shadow-lg">
      <header className="mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Form Elements</h2>
        <p className="mt-0.5 text-xs text-gray-600">Drag to build your form</p>
      </header>
      <div className="h-[calc(100vh-120px)] overflow-y-auto pr-1">
        <div className="grid grid-cols-2 gap-2">
          {elementTypes.map((element) => (
            <DraggableElement key={element.type} element={element} />
          ))}
        </div>
      </div>
    </aside>
  )
}
