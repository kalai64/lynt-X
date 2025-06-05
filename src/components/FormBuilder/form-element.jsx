"use client"

import { useDrag, useDrop } from "react-dnd"
import { useFormElements } from "./form-element-context"
import { motion } from "framer-motion"
import { Trash2, Copy, Edit, GripVertical } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { childVariants } from "./child-variants"

export default function FormElement({ element, setSelectedElement, index, parentId, onChange, value }) {
  const { updateElement, removeElement, addElement, moveElement } = useFormElements()
  const [isEditingLabel, setIsEditingLabel] = useState(false)
  const [labelText, setLabelText] = useState(
    element.properties.label ||
      element.properties.groupLabel ||
      element.properties.text ||
      element.properties.title ||
      "",
  )
  const [localValue, setLocalValue] = useState(value || "")
  const ref = useRef(null)

  // Update local value when prop changes
  useEffect(() => {
    if (value !== undefined) {
      setLocalValue(value)
    }
  }, [value])

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "form-element",
    item: { id: element.id, index, parentId },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "form-element",
    drop: (item, monitor) => {
      if (item.id === element.id) return
      if (monitor.didDrop()) return // Prevent nested drops from bubbling up

      if (item.isNew) {
        addElement(item.element, element.id, element.children ? element.children.length : null)
      } else {
        moveElement(item.id, parentId, index)
      }
    },
    hover: (item, monitor) => {
      if (item.id === element.id) return
      if (!ref.current) return

      const hoverBoundingRect = ref.current.getBoundingClientRect()
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      const clientOffset = monitor.getClientOffset()

      if (!clientOffset) return

      const hoverClientY = clientOffset.y - hoverBoundingRect.top

      // Only perform the move when the mouse has crossed half of the item's height
      // Dragging downwards
      if (item.index < index && hoverClientY < hoverMiddleY) {
        return
      }

      // Dragging upwards
      if (item.index > index && hoverClientY > hoverMiddleY) {
        return
      }

      // Time to actually perform the action
      moveElement(item.id, parentId, index)

      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = index
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }))

  const handleSelect = (e) => {
    // Stop event propagation to prevent parent elements from being selected
    e.stopPropagation()
    setSelectedElement(element)
  }

  const handleDuplicate = (e) => {
    e.stopPropagation()
    const duplicatedElement = {
      ...element,
      children: [...(element.children || [])],
    }
    addElement(duplicatedElement, parentId, index + 1)
  }

  const handleDelete = (e) => {
    e.stopPropagation()
    removeElement(element.id)
  }

  const handleLabelEdit = (e) => {
    e.stopPropagation()
    setIsEditingLabel(true)
  }

  const saveLabelEdit = () => {
    setIsEditingLabel(false)
    if (element.type === "radio") {
      updateElement(element.id, {
        properties: { ...element.properties, groupLabel: labelText },
      })
    } else if (element.type === "title") {
      updateElement(element.id, {
        properties: { ...element.properties, text: labelText },
      })
    } else if (element.type === "child-builder") {
      updateElement(element.id, {
        properties: { ...element.properties, title: labelText },
      })
    } else {
      updateElement(element.id, {
        properties: { ...element.properties, label: labelText },
      })
    }
  }

  const handleInputChange = (e) => {
    const newValue = e.target.type === "checkbox" ? e.target.checked : e.target.value
    setLocalValue(newValue)
    if (onChange) {
      onChange(newValue)
    }
  }

  const handleRadioChange = (option) => {
    setLocalValue(option)
    if (onChange) {
      onChange(option)
    }
  }

  const renderElement = () => {
    switch (element.type) {
      case "text-input":
        return (
          <div className="form-control w-full">
            <label className="label py-1">
              {isEditingLabel ? (
                <input
                  type="text"
                  value={labelText}
                  onChange={(e) => setLabelText(e.target.value)}
                  onBlur={saveLabelEdit}
                  onKeyDown={(e) => e.key === "Enter" && saveLabelEdit()}
                  autoFocus
                  onClick={(e) => e.stopPropagation()}
                  className="font-medium border-b-2 border-indigo-300 focus:border-indigo-500 focus:outline-none bg-transparent text-gray-800"
                />
              ) : (
                <span className="label-text font-medium group relative text-gray-800">
                  {element.properties.label || "Text Input"}
                  {element.properties.required && <span className="text-red-500 ml-1">*</span>}
                  <button
                    onClick={handleLabelEdit}
                    className="ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-500"
                  >
                    <Edit className="h-3 w-3" />
                  </button>
                </span>
              )}
            </label>
            <input
              type="text"
              placeholder={element.properties.placeholder || "Enter text here"}
              className="input w-full rounded-lg border border-gray-300 bg-white text-gray-700 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 p-2"
              value={localValue || ""}
              onChange={handleInputChange}
              required={element.properties.required}
            />
            {element.properties.helpText && (
              <label className="label py-1">
                <span className="label-text-alt text-gray-500">{element.properties.helpText}</span>
              </label>
            )}
          </div>
        )
      case "textarea":
        return (
          <div className="form-control w-full">
            <label className="label py-1">
              {isEditingLabel ? (
                <input
                  type="text"
                  value={labelText}
                  onChange={(e) => setLabelText(e.target.value)}
                  onBlur={saveLabelEdit}
                  onKeyDown={(e) => e.key === "Enter" && saveLabelEdit()}
                  autoFocus
                  onClick={(e) => e.stopPropagation()}
                  className="font-medium border-b-2 border-indigo-300 focus:border-indigo-500 focus:outline-none bg-transparent text-gray-800"
                />
              ) : (
                <span className="label-text font-medium group relative text-gray-800">
                  {element.properties.label || "Text Area"}
                  {element.properties.required && <span className="text-red-500 ml-1">*</span>}
                  <button
                    onClick={handleLabelEdit}
                    className="ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-500"
                  >
                    <Edit className="h-3 w-3" />
                  </button>
                </span>
              )}
            </label>
            <textarea
              placeholder={element.properties.placeholder || "Enter text here"}
              className="textarea w-full rounded-lg border border-gray-300 bg-white text-gray-700 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 p-2"
              rows={element.properties.rows || 3}
              value={localValue || ""}
              onChange={handleInputChange}
              required={element.properties.required}
            />
            {element.properties.helpText && (
              <label className="label py-1">
                <span className="label-text-alt text-gray-500">{element.properties.helpText}</span>
              </label>
            )}
          </div>
        )
      case "select":
        return (
          <div className="form-control w-full">
            <label className="label py-1">
              {isEditingLabel ? (
                <input
                  type="text"
                  value={labelText}
                  onChange={(e) => setLabelText(e.target.value)}
                  onBlur={saveLabelEdit}
                  onKeyDown={(e) => e.key === "Enter" && saveLabelEdit()}
                  autoFocus
                  onClick={(e) => e.stopPropagation()}
                  className="font-medium border-b-2 border-indigo-300 focus:border-indigo-500 focus:outline-none bg-transparent text-gray-800"
                />
              ) : (
                <span className="label-text font-medium group relative text-gray-800">
                  {element.properties.label || "Dropdown"}
                  {element.properties.required && <span className="text-red-500 ml-1">*</span>}
                  <button
                    onClick={handleLabelEdit}
                    className="ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-500"
                  >
                    <Edit className="h-3 w-3" />
                  </button>
                </span>
              )}
            </label>
            <select
              className="select w-full rounded-lg border border-gray-300 bg-white text-gray-700 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 p-2"
              value={localValue || ""}
              onChange={handleInputChange}
              required={element.properties.required}
            >
              <option value="" disabled>
                {element.properties.placeholder || "Select an option"}
              </option>
              {element.properties.options?.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {element.properties.helpText && (
              <label className="label py-1">
                <span className="label-text-alt text-gray-500">{element.properties.helpText}</span>
              </label>
            )}
          </div>
        )
      case "checkbox":
        return (
          <div className="form-control">
            <label className="label cursor-pointer justify-start gap-2.5 group relative py-1">
              <input
                type="checkbox"
                className="checkbox rounded-md border-gray-300 text-indigo-600 focus:ring-indigo-200 h-5 w-5"
                checked={localValue || false}
                onChange={handleInputChange}
                required={element.properties.required}
              />
              {isEditingLabel ? (
                <input
                  type="text"
                  value={labelText}
                  onChange={(e) => setLabelText(e.target.value)}
                  onBlur={saveLabelEdit}
                  onKeyDown={(e) => e.key === "Enter" && saveLabelEdit()}
                  autoFocus
                  onClick={(e) => e.stopPropagation()}
                  className="border-b-2 border-indigo-300 focus:border-indigo-500 focus:outline-none bg-transparent text-gray-800"
                />
              ) : (
                <span className="label-text text-gray-800">
                  {element.properties.label || "Checkbox"}
                  {element.properties.required && <span className="text-red-500 ml-1">*</span>}
                  <button
                    onClick={handleLabelEdit}
                    className="ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-500"
                  >
                    <Edit className="h-3 w-3" />
                  </button>
                </span>
              )}
            </label>
          </div>
        )
      case "radio":
        return (
          <div className="form-control">
            <label className="label py-1">
              {isEditingLabel ? (
                <input
                  type="text"
                  value={labelText}
                  onChange={(e) => setLabelText(e.target.value)}
                  onBlur={saveLabelEdit}
                  onKeyDown={(e) => e.key === "Enter" && saveLabelEdit()}
                  autoFocus
                  onClick={(e) => e.stopPropagation()}
                  className="font-medium border-b-2 border-indigo-300 focus:border-indigo-500 focus:outline-none bg-transparent text-gray-800"
                />
              ) : (
                <span className="label-text font-medium group relative text-gray-800">
                  {element.properties.groupLabel || "Radio Group"}
                  {element.properties.required && <span className="text-red-500 ml-1">*</span>}
                  <button
                    onClick={handleLabelEdit}
                    className="ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-500"
                  >
                    <Edit className="h-3 w-3" />
                  </button>
                </span>
              )}
            </label>
            <div className="space-y-2">
              {element.properties.options?.map((option, index) => (
                <label key={index} className="label cursor-pointer justify-start gap-2.5 py-1">
                  <input
                    type="radio"
                    name={`radio-${element.id}`}
                    className="radio rounded-full border-gray-300 text-indigo-600 focus:ring-indigo-200 h-5 w-5"
                    checked={localValue === option}
                    onChange={() => handleRadioChange(option)}
                    required={element.properties.required && index === 0}
                  />
                  <span className="label-text text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>
        )
      case "date":
        return (
          <div className="form-control w-full">
            <label className="label py-1">
              {isEditingLabel ? (
                <input
                  type="text"
                  value={labelText}
                  onChange={(e) => setLabelText(e.target.value)}
                  onBlur={saveLabelEdit}
                  onKeyDown={(e) => e.key === "Enter" && saveLabelEdit()}
                  autoFocus
                  onClick={(e) => e.stopPropagation()}
                  className="font-medium border-b-2 border-indigo-300 focus:border-indigo-500 focus:outline-none bg-transparent text-gray-800"
                />
              ) : (
                <span className="label-text font-medium group relative text-gray-800">
                  {element.properties.label || "Date"}
                  {element.properties.required && <span className="text-red-500 ml-1">*</span>}
                  <button
                    onClick={handleLabelEdit}
                    className="ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-500"
                  >
                    <Edit className="h-3 w-3" />
                  </button>
                </span>
              )}
            </label>
            <input
              type="date"
              className="input w-full rounded-lg border border-gray-300 bg-white text-gray-700 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 p-2"
              value={localValue || ""}
              onChange={handleInputChange}
              required={element.properties.required}
            />
            {element.properties.helpText && (
              <label className="label py-1">
                <span className="label-text-alt text-gray-500">{element.properties.helpText}</span>
              </label>
            )}
          </div>
        )
      case "time":
        return (
          <div className="form-control w-full">
            <label className="label py-1">
              {isEditingLabel ? (
                <input
                  type="text"
                  value={labelText}
                  onChange={(e) => setLabelText(e.target.value)}
                  onBlur={saveLabelEdit}
                  onKeyDown={(e) => e.key === "Enter" && saveLabelEdit()}
                  autoFocus
                  onClick={(e) => e.stopPropagation()}
                  className="font-medium border-b-2 border-indigo-300 focus:border-indigo-500 focus:outline-none bg-transparent text-gray-800"
                />
              ) : (
                <span className="label-text font-medium group relative text-gray-800">
                  {element.properties.label || "Time"}
                  {element.properties.required && <span className="text-red-500 ml-1">*</span>}
                  <button
                    onClick={handleLabelEdit}
                    className="ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-500"
                  >
                    <Edit className="h-3 w-3" />
                  </button>
                </span>
              )}
            </label>
            <input
              type="time"
              className="input w-full rounded-lg border border-gray-300 bg-white text-gray-700 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 p-2"
              value={localValue || ""}
              onChange={handleInputChange}
              required={element.properties.required}
            />
            {element.properties.helpText && (
              <label className="label py-1">
                <span className="label-text-alt text-gray-500">{element.properties.helpText}</span>
              </label>
            )}
          </div>
        )
      case "number":
        return (
          <div className="form-control w-full">
            <label className="label py-1">
              {isEditingLabel ? (
                <input
                  type="text"
                  value={labelText}
                  onChange={(e) => setLabelText(e.target.value)}
                  onBlur={saveLabelEdit}
                  onKeyDown={(e) => e.key === "Enter" && saveLabelEdit()}
                  autoFocus
                  onClick={(e) => e.stopPropagation()}
                  className="font-medium border-b-2 border-indigo-300 focus:border-indigo-500 focus:outline-none bg-transparent text-gray-800"
                />
              ) : (
                <span className="label-text font-medium group relative text-gray-800">
                  {element.properties.label || "Number"}
                  {element.properties.required && <span className="text-red-500 ml-1">*</span>}
                  <button
                    onClick={handleLabelEdit}
                    className="ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-500"
                  >
                    <Edit className="h-3 w-3" />
                  </button>
                </span>
              )}
            </label>
            <input
              type="number"
              placeholder={element.properties.placeholder || "Enter a number"}
              className="input w-full rounded-lg border border-gray-300 bg-white text-gray-700 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 p-2"
              value={localValue || ""}
              onChange={handleInputChange}
              min={element.properties.min}
              max={element.properties.max}
              required={element.properties.required}
            />
            {element.properties.helpText && (
              <label className="label py-1">
                <span className="label-text-alt text-gray-500">{element.properties.helpText}</span>
              </label>
            )}
          </div>
        )
      case "email":
        return (
          <div className="form-control w-full">
            <label className="label py-1">
              {isEditingLabel ? (
                <input
                  type="text"
                  value={labelText}
                  onChange={(e) => setLabelText(e.target.value)}
                  onBlur={saveLabelEdit}
                  onKeyDown={(e) => e.key === "Enter" && saveLabelEdit()}
                  autoFocus
                  onClick={(e) => e.stopPropagation()}
                  className="font-medium border-b-2 border-indigo-300 focus:border-indigo-500 focus:outline-none bg-transparent text-gray-800"
                />
              ) : (
                <span className="label-text font-medium group relative text-gray-800">
                  {element.properties.label || "Email"}
                  {element.properties.required && <span className="text-red-500 ml-1">*</span>}
                  <button
                    onClick={handleLabelEdit}
                    className="ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-500"
                  >
                    <Edit className="h-3 w-3" />
                  </button>
                </span>
              )}
            </label>
            <input
              type="email"
              placeholder={element.properties.placeholder || "Enter your email"}
              className="input w-full rounded-lg border border-gray-300 bg-white text-gray-700 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 p-2"
              value={localValue || ""}
              onChange={handleInputChange}
              required={element.properties.required}
            />
            {element.properties.helpText && (
              <label className="label py-1">
                <span className="label-text-alt text-gray-500">{element.properties.helpText}</span>
              </label>
            )}
          </div>
        )
      case "tel":
        return (
          <div className="form-control w-full">
            <label className="label py-1">
              {isEditingLabel ? (
                <input
                  type="text"
                  value={labelText}
                  onChange={(e) => setLabelText(e.target.value)}
                  onBlur={saveLabelEdit}
                  onKeyDown={(e) => e.key === "Enter" && saveLabelEdit()}
                  autoFocus
                  onClick={(e) => e.stopPropagation()}
                  className="font-medium border-b-2 border-indigo-300 focus:border-indigo-500 focus:outline-none bg-transparent text-gray-800"
                />
              ) : (
                <span className="label-text font-medium group relative text-gray-800">
                  {element.properties.label || "Telephone"}
                  {element.properties.required && <span className="text-red-500 ml-1">*</span>}
                  <button
                    onClick={handleLabelEdit}
                    className="ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-500"
                  >
                    <Edit className="h-3 w-3" />
                  </button>
                </span>
              )}
            </label>
            <input
              type="tel"
              placeholder={element.properties.placeholder || "Enter your phone number"}
              className="input w-full rounded-lg border border-gray-300 bg-white text-gray-700 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 p-2"
              value={localValue || ""}
              onChange={handleInputChange}
              required={element.properties.required}
            />
            {element.properties.helpText && (
              <label className="label py-1">
                <span className="label-text-alt text-gray-500">{element.properties.helpText}</span>
              </label>
            )}
          </div>
        )
      case "title":
        return (
          <div className="form-control w-full">
            {isEditingLabel ? (
              <input
                type="text"
                value={labelText}
                onChange={(e) => setLabelText(e.target.value)}
                onBlur={saveLabelEdit}
                onKeyDown={(e) => e.key === "Enter" && saveLabelEdit()}
                autoFocus
                onClick={(e) => e.stopPropagation()}
                className={`border-b-2 border-indigo-300 focus:border-indigo-500 focus:outline-none bg-transparent text-gray-800 ${
                  element.properties.size === "large"
                    ? "text-xl font-bold"
                    : element.properties.size === "medium"
                      ? "text-lg font-semibold"
                      : "text-base font-medium"
                }`}
              />
            ) : (
              <h3
                className={`group relative text-gray-800 ${
                  element.properties.size === "large"
                    ? "text-xl font-bold"
                    : element.properties.size === "medium"
                      ? "text-lg font-semibold"
                      : "text-base font-medium"
                }`}
              >
                {element.properties.text || "Section Title"}
                <button
                  onClick={handleLabelEdit}
                  className="ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-500"
                >
                  <Edit className="h-3 w-3" />
                </button>
              </h3>
            )}
          </div>
        )

      case "child-builder":
        const { layout = "stack", gridCols = 2, gap = 4 } = element.properties
        const layoutStyles =
          layout === "grid"
            ? `grid grid-cols-${gridCols} gap-${gap}`
            : layout === "flex"
              ? "flex flex-wrap gap-${gap}"
              : "space-y-2" // Reduced spacing
        return (
          <div
            className={`rounded-xl border-2 p-3 transition-all ${
              isOver ? "border-indigo-500 bg-indigo-50 shadow-md" : "border-gray-300 bg-white"
            }`}
          >
            <div className="mb-1 font-medium flex items-center justify-between text-gray-800">
              {isEditingLabel ? (
                <input
                  type="text"
                  value={labelText}
                  onChange={(e) => setLabelText(e.target.value)}
                  onBlur={saveLabelEdit}
                  onKeyDown={(e) => e.key === "Enter" && saveLabelEdit()}
                  autoFocus
                  onClick={(e) => e.stopPropagation()}
                  className="font-medium border-b-2 border-indigo-300 focus:border-indigo-500 focus:outline-none bg-transparent"
                />
              ) : (
                <span className="group relative">
                  {element.properties.title || "Child Build Area"}
                  <button
                    onClick={handleLabelEdit}
                    className="ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity text-indigo-500"
                  >
                    <Edit className="h-3 w-3" />
                  </button>
                </span>
              )}
            </div>
            <motion.div
              layout
              variants={childVariants}
              initial="hidden"
              animate="visible"
              transition={{
                staggerChildren: 0.02,
                delayChildren: 0.03,
                layoutDependency: element.children?.map((c) => c.id).join(","),
                layout: {
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                },
              }}
              className={layoutStyles}
              style={{ willChange: "transform, opacity" }}
            >
              {element.children &&
                element.children.map((child, childIndex) => (
                  <motion.div
                    key={child.id}
                    variants={childVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    layout
                    transition={{
                      layout: {
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                        duration: 0.15,
                      },
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FormElement
                      element={child}
                      index={childIndex}
                      setSelectedElement={setSelectedElement}
                      parentId={element.id}
                      onChange={(value) => {
                        if (onChange) {
                          const childValues = { ...(localValue || {}) }
                          childValues[child.id] = value
                          onChange(childValues)
                        }
                      }}
                      value={localValue && localValue[child.id]}
                    />
                  </motion.div>
                ))}
              {(!element.children || element.children.length === 0) && (
                <div className="rounded-lg border-2 border-dashed border-gray-200 p-2 text-center text-sm text-gray-500 bg-gray-50">
                  Drop elements here to create a child form
                </div>
              )}
            </motion.div>
          </div>
        )
      default:
        return <div className="text-gray-500">Unknown element type</div>
    }
  }

  return (
    <motion.div
      ref={(node) => {
        ref.current = node
        drag(drop(node))
      }}
      layout
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -5 }}
      transition={{
        layout: {
          type: "spring",
          stiffness: 50,
          damping: 12,
          duration: 0.2,
        },
      }}
      onClick={(e) => {
        // Stop propagation to prevent parent elements from being selected
        e.stopPropagation()
        setSelectedElement(element)
      }}
      className={`relative rounded-lg hover:ring-2 hover:ring-indigo-100 group transition-all ${
        isDragging ? "opacity-50" : "opacity-100"
      }`}
      style={{ willChange: "transform, opacity" }}
    >
      <div
        className={`rounded-lg border p-2 transition-all ${
          isOver ? "border-indigo-500 bg-indigo-50" : "border-gray-300"
        }`}
      >
        <div className="absolute -left-2.5 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 cursor-move transition-opacity">
          <GripVertical className="h-4 w-4 text-gray-400" />
        </div>
        {renderElement()}
      </div>
      <div className="absolute -top-2 right-1.5 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={(e) => handleDuplicate(e)}
          className="rounded-full bg-white p-1 text-indigo-500 shadow-sm hover:bg-indigo-50 hover:text-indigo-600 transition-all"
          type="button"
        >
          <Copy className="h-3.5 w-3.5" />
        </button>
        <button
          onClick={(e) => handleDelete(e)}
          className="rounded-full bg-white p-1 text-red-500 shadow-sm hover:bg-red-50 hover:text-red-600 transition-all"
          type="button"
        >
          <Trash2 className="h-3.5 w-3.5" />
        </button>
      </div>
    </motion.div>
  )
}
