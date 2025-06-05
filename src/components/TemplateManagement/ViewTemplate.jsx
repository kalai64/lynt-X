"use client";

import { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useGetTemplateById } from "@/hooks/formBuilder";
import LoadingSpinner from "../LoadingSpinner";
import { X } from "lucide-react";

export default function ViewTemplate({ templateId, isOpen, onClose }) {
  const { template, isFetching, isFetchError } = useGetTemplateById(templateId);
  const [open, setOpen] = useState(isOpen);
  const [formValues, setFormValues] = useState({});

  const handleOpenChange = (isOpen) => {
    setOpen(isOpen);
    if (!isOpen) onClose();
  };

  const handleInputChange = (fieldId, value) => {
    setFormValues((prev) => ({ ...prev, [fieldId]: value }));
  };

  const renderElement = (element, index, parentPath = "") => {
    const fieldId = parentPath ? `${parentPath}.${element.id}` : element.id;
    const { type, properties, children } = element;

    const inputStyles = {
      base: "border-gray-200 focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition-all duration-200 bg-white shadow-sm rounded-lg py-2 px-3 text-gray-700 placeholder-gray-400 hover:border-indigo-300",
    };

    switch (type) {
      case "title":
        return (
          <h2 key={index} className="text-2xl font-semibold text-gray-900 mb-6 tracking-tight">
            {properties.text || "Title"}
          </h2>
        );
      case "text-input":
        return (
          <div key={index} className="mb-6 space-y-2">
            <Label htmlFor={fieldId} className="text-sm font-medium text-gray-700">
              {properties.label || "Text Input"}
            </Label>
            <Input
              id={fieldId}
              type="text"
              value={formValues[fieldId] || ""}
              onChange={(e) => handleInputChange(fieldId, e.target.value)}
              placeholder={properties.placeholder || "Enter text"}
              className={inputStyles.base}
              required={properties.required || false}
            />
            {properties.helpText && (
              <p className="text-sm text-gray-500">{properties.helpText}</p>
            )}
          </div>
        );
      case "textarea":
        return (
          <div key={index} className="mb-6 space-y-2">
            <Label htmlFor={fieldId} className="text-sm font-medium text-gray-700">
              {properties.label || "Text Area"}
            </Label>
            <Textarea
              id={fieldId}
              value={formValues[fieldId] || ""}
              onChange={(e) => handleInputChange(fieldId, e.target.value)}
              rows={properties.rows || 4}
              placeholder={properties.placeholder || "Enter text"}
              className={inputStyles.base}
              required={properties.required || false}
            />
            {properties.helpText && (
              <p className="text-sm text-gray-500">{properties.helpText}</p>
            )}
            {children?.map((child, childIndex) =>
              renderElement(child, childIndex, fieldId)
            )}
          </div>
        );
      case "checkbox":
        return (
          <div key={index} className="mb-6 flex items-center space-x-3">
            <Checkbox
              id={fieldId}
              checked={formValues[fieldId] ?? properties.checked ?? false}
              onCheckedChange={(checked) => handleInputChange(fieldId, checked)}
              className="border-gray-200 rounded focus:ring-indigo-400 data-[state=checked]:bg-indigo-500 data-[state=checked]:border-indigo-500 transition-all"
              required={properties.required || false}
            />
            <Label htmlFor={fieldId} className="text-sm font-medium text-gray-700">
              {properties.label || "Checkbox"}
            </Label>
            {properties.helpText && (
              <p className="text-sm text-gray-500">{properties.helpText}</p>
            )}
          </div>
        );
      case "time":
        return (
          <div key={index} className="mb-6 space-y-2">
            <Label htmlFor={fieldId} className="text-sm font-medium text-gray-700">
              {properties.label || "Time"}
            </Label>
            <Input
              id={fieldId}
              type="time"
              value={formValues[fieldId] || ""}
              onChange={(e) => handleInputChange(fieldId, e.target.value)}
              className={inputStyles.base}
              required={properties.required || false}
            />
            {properties.helpText && (
              <p className="text-sm text-gray-500">{properties.helpText}</p>
            )}
            {children?.map((child, childIndex) =>
              renderElement(child, childIndex, fieldId)
            )}
          </div>
        );
      case "tel":
        return (
          <div key={index} className="mb-6 space-y-2">
            <Label htmlFor={fieldId} className="text-sm font-medium text-gray-700">
              {properties.label || "Telephone"}
            </Label>
            <Input
              id={fieldId}
              type="tel"
              value={formValues[fieldId] || ""}
              onChange={(e) => handleInputChange(fieldId, e.target.value)}
              placeholder={properties.placeholder || "Enter your phone number"}
              className={inputStyles.base}
              required={properties.required || false}
            />
            {properties.helpText && (
              <p className="text-sm text-gray-500">{properties.helpText}</p>
            )}
          </div>
        );
      case "email":
        return (
          <div key={index} className="mb-6 space-y-2">
            <Label htmlFor={fieldId} className="text-sm font-medium text-gray-700">
              {properties.label || "Email"}
            </Label>
            <Input
              id={fieldId}
              type="email"
              value={formValues[fieldId] || ""}
              onChange={(e) => handleInputChange(fieldId, e.target.value)}
              placeholder={properties.placeholder || "Enter your email"}
              className={inputStyles.base}
              required={properties.required || false}
            />
            {properties.helpText && (
              <p className="text-sm text-gray-500">{properties.helpText}</p>
            )}
            {children?.map((child, childIndex) =>
              renderElement(child, childIndex, fieldId)
            )}
          </div>
        );
      case "date":
        return (
          <div key={index} className="mb-6 space-y-2">
            <Label htmlFor={fieldId} className="text-sm font-medium text-gray-700">
              {properties.label || "Date"}
            </Label>
            <Input
              id={fieldId}
              type="date"
              value={formValues[fieldId] || ""}
              onChange={(e) => handleInputChange(fieldId, e.target.value)}
              className={inputStyles.base}
              required={properties.required || false}
            />
            {properties.helpText && (
              <p className="text-sm text-gray-500">{properties.helpText}</p>
            )}
            {children?.map((child, childIndex) =>
              renderElement(child, childIndex, fieldId)
            )}
          </div>
        );
      case "radio":
        return (
          <div key={index} className="mb-6 space-y-3">
            <Label className="text-sm font-medium text-gray-700">
              {properties.groupLabel || properties.label || "Radio Group"}
            </Label>
            <RadioGroup
              value={formValues[fieldId] || ""}
              onValueChange={(value) => handleInputChange(fieldId, value)}
              className="space-y-2"
              required={properties.required || false}
            >
              {properties.options?.length > 0 ? (
                properties.options.map((option, optIndex) => (
                  <div key={optIndex} className="flex items-center space-x-3">
                    <RadioGroupItem
                      value={option}
                      id={`${fieldId}-${optIndex}`}
                      className="border-gray-200 focus:ring-indigo-400 data-[state=checked]:border-indigo-500 data-[state=checked]:text-indigo-500 transition-all"
                    />
                    <Label
                      htmlFor={`${fieldId}-${optIndex}`}
                      className="text-sm text-gray-700"
                    >
                      {option}
                    </Label>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-sm">No options available</p>
              )}
            </RadioGroup>
            {properties.helpText && (
              <p className="text-sm text-gray-500">{properties.helpText}</p>
            )}
          </div>
        );
      case "select":
        return (
          <div key={index} className="mb-6 space-y-2">
            <Label htmlFor={fieldId} className="text-sm font-medium text-gray-700">
              {properties.label || "Dropdown"}
            </Label>
            <Select
              value={formValues[fieldId] || ""}
              onValueChange={(value) => handleInputChange(fieldId, value)}
              required={properties.required || false}
            >
              <SelectTrigger className={inputStyles.base}>
                <SelectValue
                  placeholder={properties.placeholder || "Select an option"}
                />
              </SelectTrigger>
              <SelectContent className="bg-white border-gray-200 rounded-lg shadow-lg">
                {properties.options?.length > 0 ? (
                  properties.options.map((option, optIndex) => (
                    <SelectItem
                      key={optIndex}
                      value={option}
                      className="text-gray-700 hover:bg-indigo-50 hover:text-indigo-600"
                    >
                      {option}
                    </SelectItem>
                  ))
                ) : (
                  <SelectItem value="none" disabled>
                    No options available
                  </SelectItem>
                )}
              </SelectContent>
            </Select>
            {properties.helpText && (
              <p className="text-sm text-gray-500">{properties.helpText}</p>
            )}
            {children?.map((child, childIndex) =>
              renderElement(child, childIndex, fieldId)
            )}
          </div>
        );
      case "child-builder":
        return (
          <div
            key={index}
            className={`mb-6 p-5 border-l-4 ${
              properties.borderStyle === "dashed"
                ? "border-indigo-300"
                : "border-indigo-500"
            } ${
              properties.bgColor ? `bg-${properties.bgColor}` : "bg-gray-50"
            } rounded-lg shadow-sm ${
              properties.layout === "grid"
                ? `grid grid-cols-${properties.gridCols || 2} gap-${
                    properties.gap || 4
                  }`
                : properties.layout === "stack"
                ? `flex flex-col gap-${properties.gap || 4}`
                : `flex flex-row gap-${properties.gap || 4}`
            }`}
            style={{
              borderStyle: properties.borderStyle || "solid",
              alignItems: properties.alignItems || "stretch",
              justifyContent: properties.justifyContent || "start",
            }}
          >
            {children?.map((child, childIndex) =>
              renderElement(child, childIndex, fieldId)
            )}
          </div>
        );
      case "button":
        return (
          <Button
            key={index}
            className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm rounded-lg py-2 px-4 transition-all duration-200"
            onClick={() => alert("View mode: Button clicked")}
          >
            {properties.text || "Submit"}
          </Button>
        );
      default:
        return null;
    }
  };

  return (
    <Drawer open={open} onOpenChange={handleOpenChange} direction="right">
      <DrawerContent className="custom-drawer-content bg-white rounded-l-xl shadow-xl p-6">
        <DrawerHeader>
          <DrawerTitle className="text-2xl font-bold text-gray-900 tracking-tight">
            {template?.name}
          </DrawerTitle>
          <DrawerClose className="absolute top-4 right-4 rounded-full p-2 bg-gray-100 hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400">
            <X className="w-6 h-6 text-gray-600 hover:text-gray-800" />
          </DrawerClose>
        </DrawerHeader>
        <div className="mt-6">
          {isFetching && <LoadingSpinner />}
          {isFetchError && (
            <p className="text-red-500 text-sm font-medium">
              Error loading template.
            </p>
          )}
          {template && !isFetching && !isFetchError && (
            <div className="space-y-6">
              {template?.templateFields?.length > 0 ? (
                template.templateFields.map((element, index) => (
                  <div key={index}>
                    {element.type === "child-builder" && element.properties.title && (
                      <h3 className="text-lg font-medium text-gray-800 mb-4">
                        {element.properties.title}
                      </h3>
                    )}
                    {renderElement(element, index)}
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-sm">
                  No form elements found.
                </p>
              )}
            </div>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
}