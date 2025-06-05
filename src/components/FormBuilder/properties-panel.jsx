"use client"

import { useState, useEffect } from "react"
import { useFormElements } from "./form-element-context"
import { X, Plus, Trash2 } from "lucide-react"

export default function PropertiesPanel({ selectedElement, setSelectedElement }) {
  const { updateElement } = useFormElements()
  const [properties, setProperties] = useState({})
  const [newOption, setNewOption] = useState("")

  // Update properties state when selectedElement changes
  useEffect(() => {
    if (selectedElement) {
      // Deep clone the properties to ensure we're working with a fresh copy
      setProperties(JSON.parse(JSON.stringify(selectedElement.properties || {})))

      // Log the selected element to help with debugging
      console.log("Selected element:", selectedElement)
    }
  }, [selectedElement])

  const handleChange = (key, value) => {
    // Create a new properties object to avoid reference issues
    const updatedProperties = { ...properties, [key]: value }
    setProperties(updatedProperties)

    // Use requestAnimationFrame to ensure UI updates happen at the right time
    requestAnimationFrame(() => {
      updateElement(selectedElement.id, { properties: updatedProperties })
    })
  }

  const handleOptionsChange = (options) => {
    const optionsArray = options.split("\n").filter((option) => option.trim() !== "")
    handleChange("options", optionsArray)
  }

  const handleAddOption = () => {
    if (newOption.trim() === "") return

    const currentOptions = properties.options || []
    const updatedOptions = [...currentOptions, newOption.trim()]

    handleChange("options", updatedOptions)
    setNewOption("")
  }

  const handleRemoveOption = (indexToRemove) => {
    const currentOptions = properties.options || []
    const updatedOptions = currentOptions.filter((_, index) => index !== indexToRemove)

    handleChange("options", updatedOptions)
  }

  if (!selectedElement) {
    return (
      <div className="w-72 border-l bg-white shadow-lg">
        <div className="flex h-full flex-col items-center justify-center text-center p-4">
          <div className="rounded-full bg-indigo-100 p-2.5">
            <svg
              className="h-5 w-5 text-indigo-600"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
              <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
              <path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
              <line x1="2" x2="22" y1="2" y2="22" />
            </svg>
          </div>
          <h3 className="mt-3 text-base font-semibold text-gray-800">No Element Selected</h3>
          <p className="mt-1 text-sm text-gray-500">Select an element to edit its properties.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="w-72 border-l bg-white shadow-lg">
      <div className="border-b p-3 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-semibold text-gray-800">Properties</h2>
          <button
            className="rounded-full p-1 hover:bg-indigo-100 transition-all"
            onClick={() => setSelectedElement(null)}
          >
            <X className="h-4 w-4 text-gray-600" />
          </button>
        </div>
        <p className="text-xs text-gray-600">Customize the selected element</p>
      </div>
      <div className="h-[calc(100vh-64px)] overflow-y-auto p-4">
        <div className="space-y-4">
          {selectedElement.type !== "child-builder" &&
            selectedElement.type !== "button" &&
            selectedElement.type !== "title" && (
              <div className="space-y-3">
                <div>
                  <label className="mb-0.5 block text-xs font-medium text-gray-700">Label</label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-200 p-2 text-sm text-gray-700 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 bg-gray-50"
                    value={properties.label || ""}
                    onChange={(e) => handleChange("label", e.target.value)}
                  />
                </div>

                {(selectedElement.type === "text-input" ||
                  selectedElement.type === "textarea" ||
                  selectedElement.type === "select" ||
                  selectedElement.type === "number" ||
                  selectedElement.type === "email" ||
                  selectedElement.type === "tel") && (
                  <div>
                    <label className="mb-0.5 block text-xs font-medium text-gray-700">Placeholder</label>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-gray-200 p-2 text-sm text-gray-700 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 bg-gray-50"
                      value={properties.placeholder || ""}
                      onChange={(e) => handleChange("placeholder", e.target.value)}
                    />
                  </div>
                )}

                {(selectedElement.type === "text-input" ||
                  selectedElement.type === "textarea" ||
                  selectedElement.type === "select" ||
                  selectedElement.type === "date" ||
                  selectedElement.type === "time" ||
                  selectedElement.type === "number" ||
                  selectedElement.type === "email" ||
                  selectedElement.type === "tel") && (
                  <div>
                    <label className="mb-0.5 block text-xs font-medium text-gray-700">Help Text</label>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-gray-200 p-2 text-sm text-gray-700 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 bg-gray-50"
                      value={properties.helpText || ""}
                      onChange={(e) => handleChange("helpText", e.target.value)}
                    />
                  </div>
                )}

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="required"
                    className="h-3.5 w-3.5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-200"
                    checked={properties.required || false}
                    onChange={(e) => handleChange("required", e.target.checked)}
                  />
                  <label htmlFor="required" className="ml-1.5 text-xs text-gray-700">
                    Required
                  </label>
                </div>
              </div>
            )}

          {selectedElement.type === "textarea" && (
            <div>
              <label className="mb-0.5 block text-xs font-medium text-gray-700">Rows</label>
              <input
                type="number"
                className="w-full rounded-lg border border-gray-200 p-2 text-sm text-gray-700 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 bg-gray-50"
                value={properties.rows || 3}
                onChange={(e) => handleChange("rows", Number.parseInt(e.target.value))}
                min="1"
              />
            </div>
          )}

          {selectedElement.type === "select" && (
            <div>
              <label className="mb-0.5 block text-xs font-medium text-gray-700">Options</label>
              <div className="space-y-2 mb-2">
                {(properties.options || []).map((option, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <input
                      type="text"
                      className="w-full rounded-lg border border-gray-200 p-2 text-sm text-gray-700 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 bg-gray-50"
                      value={option}
                      onChange={(e) => {
                        const newOptions = [...properties.options]
                        newOptions[index] = e.target.value
                        handleChange("options", newOptions)
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveOption(index)}
                      className="p-1 rounded-md hover:bg-red-50 text-red-500"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-200 p-2 text-sm text-gray-700 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 bg-gray-50"
                  value={newOption}
                  onChange={(e) => setNewOption(e.target.value)}
                  placeholder="Add new option"
                  onKeyDown={(e) => e.key === "Enter" && handleAddOption()}
                />
                <button
                  type="button"
                  onClick={handleAddOption}
                  className="p-2 rounded-md bg-indigo-100 text-indigo-600 hover:bg-indigo-200"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
          )}

          {selectedElement.type === "radio" && (
            <div className="space-y-3">
              <div>
                <label className="mb-0.5 block text-xs font-medium text-gray-700">Group Label</label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-200 p-2 text-sm text-gray-700 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 bg-gray-50"
                  value={properties.groupLabel || ""}
                  onChange={(e) => handleChange("groupLabel", e.target.value)}
                />
              </div>
              <div>
                <label className="mb-0.5 block text-xs font-medium text-gray-700">Options</label>
                <div className="space-y-2 mb-2">
                  {(properties.options || []).map((option, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <input
                        type="text"
                        className="w-full rounded-lg border border-gray-200 p-2 text-sm text-gray-700 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 bg-gray-50"
                        value={option}
                        onChange={(e) => {
                          const newOptions = [...properties.options]
                          newOptions[index] = e.target.value
                          handleChange("options", newOptions)
                        }}
                      />
                      <button
                        type="button"
                        onClick={() => handleRemoveOption(index)}
                        className="p-1 rounded-md hover:bg-red-50 text-red-500"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-200 p-2 text-sm text-gray-700 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 bg-gray-50"
                    value={newOption}
                    onChange={(e) => setNewOption(e.target.value)}
                    placeholder="Add new option"
                    onKeyDown={(e) => e.key === "Enter" && handleAddOption()}
                  />
                  <button
                    type="button"
                    onClick={handleAddOption}
                    className="p-2 rounded-md bg-indigo-100 text-indigo-600 hover:bg-indigo-200"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {selectedElement.type === "checkbox" && (
            <div className="flex items-center">
              <input
                type="checkbox"
                id="checked"
                className="h-3.5 w-3.5 rounded border-gray-300 text-indigo-600 focus:ring-indigo-200"
                checked={properties.checked || false}
                onChange={(e) => handleChange("checked", e.target.checked)}
              />
              <label htmlFor="checked" className="ml-1.5 text-xs text-gray-700">
                Checked by default
              </label>
            </div>
          )}

          {selectedElement.type === "number" && (
            <div className="space-y-3">
              <div>
                <label className="mb-0.5 block text-xs font-medium text-gray-700">Minimum Value</label>
                <input
                  type="number"
                  className="w-full rounded-lg border border-gray-200 p-2 text-sm text-gray-700 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 bg-gray-50"
                  value={properties.min || ""}
                  onChange={(e) => handleChange("min", e.target.value)}
                />
              </div>
              <div>
                <label className="mb-0.5 block text-xs font-medium text-gray-700">Maximum Value</label>
                <input
                  type="number"
                  className="w-full rounded-lg border border-gray-200 p-2 text-sm text-gray-700 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 bg-gray-50"
                  value={properties.max || ""}
                  onChange={(e) => handleChange("max", e.target.value)}
                />
              </div>
            </div>
          )}

          {selectedElement.type === "child-builder" && (
            <div className="space-y-3">
              <div>
                <label className="mb-0.5 block text-xs font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-200 p-2 text-sm text-gray-700 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 bg-gray-50"
                  value={properties.title || ""}
                  onChange={(e) => handleChange("title", e.target.value)}
                />
              </div>
              <div>
                <label className="mb-0.5 block text-xs font-medium text-gray-700">Layout</label>
                <select
                  className="w-full rounded-lg border border-gray-200 p-2 text-sm text-gray-700 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 bg-gray-50"
                  value={properties.layout || "stack"}
                  onChange={(e) => handleChange("layout", e.target.value)}
                >
                  <option value="stack">Stack</option>
                  <option value="grid">Grid</option>
                  <option value="flex">Flex</option>
                </select>
              </div>
              {properties.layout === "grid" && (
                <div>
                  <label className="mb-0.5 block text-xs font-medium text-gray-700">Grid Columns</label>
                  <input
                    type="number"
                    className="w-full rounded-lg border border-gray-200 p-2 text-sm text-gray-700 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 bg-gray-50"
                    value={properties.gridCols || 2}
                    onChange={(e) => handleChange("gridCols", Number.parseInt(e.target.value))}
                    min="1"
                    max="6"
                  />
                </div>
              )}
              {(properties.layout === "grid" || properties.layout === "flex" || properties.layout === "stack") && (
                <div>
                  <label className="mb-0.5 block text-xs font-medium text-gray-700">Gap (px)</label>
                  <input
                    type="number"
                    className="w-full rounded-lg border border-gray-200 p-2 text-sm text-gray-700 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 bg-gray-50"
                    value={properties.gap || 4}
                    onChange={(e) => handleChange("gap", Number.parseInt(e.target.value))}
                    min="0"
                    max="16"
                  />
                </div>
              )}
              <div>
                <label className="mb-0.5 block text-xs font-medium text-gray-700">Border Style</label>
                <select
                  className="w-full rounded-lg border border-gray-200 p-2 text-sm text-gray-700 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 bg-gray-50"
                  value={properties.borderStyle || "solid"}
                  onChange={(e) => handleChange("borderStyle", e.target.value)}
                >
                  <option value="solid">Solid</option>
                  <option value="dashed">Dashed</option>
                  <option value="dotted">Dotted</option>
                  <option value="none">None</option>
                </select>
              </div>
              <div>
                <label className="mb-0.5 block text-xs font-medium text-gray-700">Background Color</label>
                <select
                  className="w-full rounded-lg border border-gray-200 p-2 text-sm text-gray-700 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 bg-gray-50"
                  value={properties.bgColor || "white"}
                  onChange={(e) => handleChange("bgColor", e.target.value)}
                >
                  <option value="white">White</option>
                  <option value="gray-50">Light Gray</option>
                  <option value="indigo-50">Light Indigo</option>
                  <option value="blue-50">Light Blue</option>
                  <option value="green-50">Light Green</option>
                </select>
              </div>
            </div>
          )}

          {selectedElement.type === "title" && (
            <div className="space-y-3">
              <div>
                <label className="mb-0.5 block text-xs font-medium text-gray-700">Text</label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-200 p-2 text-sm text-gray-700 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 bg-gray-50"
                  value={properties.text || ""}
                  onChange={(e) => handleChange("text", e.target.value)}
                />
              </div>
              <div>
                <label className="mb-0.5 block text-xs font-medium text-gray-700">Size</label>
                <select
                  className="w-full rounded-lg border border-gray-200 p-2 text-sm text-gray-700 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 bg-gray-50"
                  value={properties.size || "large"}
                  onChange={(e) => handleChange("size", e.target.value)}
                >
                  <option value="large">Large</option>
                  <option value="medium">Medium</option>
                  <option value="small">Small</option>
                </select>
              </div>
            </div>
          )}

          {selectedElement.type === "button" && (
            <div className="space-y-3">
              <div>
                <label className="mb-0.5 block text-xs font-medium text-gray-700">Button Text</label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-200 p-2 text-sm text-gray-700 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 bg-gray-50"
                  value={properties.label || ""}
                  onChange={(e) => handleChange("label", e.target.value)}
                />
              </div>
              <div>
                <label className="mb-0.5 block text-xs font-medium text-gray-700">Variant</label>
                <select
                  className="w-full rounded-lg border border-gray-200 p-2 text-sm text-gray-700 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 bg-gray-50"
                  value={properties.variant || "primary"}
                  onChange={(e) => handleChange("variant", e.target.value)}
                >
                  <option value="primary">Primary</option>
                  <option value="outline">Outline</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
