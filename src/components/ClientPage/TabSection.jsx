"use client";

import { useEffect, useRef, useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import LoadingSpinner from "@/components/LoadingSpinner";
import toast from "react-hot-toast";
import { useGetTemplateById, useGetAllTemplates, useFormSubmission, useAssignImage } from "@/hooks/client";

export default function TabSection({ image, assignedlast, completed }) {
  let batchname = "N/A";
  let imagename = "N/A";

  if (image) {
    const parts = image.split("/");
    if (parts.length >= 4) {
      batchname = parts[2];
      imagename = parts[3];
    }
  }
  const [selectedTab, setSelectedTab] = useState(null);
  const [formData, setFormData] = useState({});
  const tabsRef = useRef(null);
  const tabRefs = useRef({});
  const formRef = useRef(null);

  const { templates, isFetching: isLoadingTabs } = useGetAllTemplates();
  const { template: templateData, isFetching: isLoadingTemplate  } = useGetTemplateById(selectedTab?.id);
  const { saveForm, isSaveForm  } = useFormSubmission();
  const { assignImage  } = useAssignImage();
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (templates?.length > 0) {
      const userId = localStorage.getItem("userid:");
      const initialTab = assignedlast?.templateId && assignedlast?.userId === userId
  ? templates.find(tab => tab.id === assignedlast.templateId && !completed.includes(tab.id))
  : templates.find(tab => !completed.includes(tab.id)) || templates[0];

      setSelectedTab(initialTab);

      if (userId && initialTab?.id) {
        assignImage({
          templateId: initialTab.id,
          userId
        }, {
          onError: (error) => {
            console.error("assignImage error:", error);
          },
        });
      }
    }
  }, [templates, assignImage, assignedlast]);

  useEffect(() => {
    if (templates?.length > 0 && assignedlast && assignedlast?.userId === localStorage.getItem("userid:")) {
  const newTab = templates.find(tab => tab.id === assignedlast.templateId && !completed.includes(tab.id));
  if (newTab && selectedTab?.id !== newTab.id) {
    setSelectedTab(newTab);
    tabRefs.current[newTab.id]?.scrollIntoView({ behavior: "smooth", inline: "center" });
  }
}
  }, [assignedlast, templates, selectedTab]);


  const handleTabClick = (tabId) => {
    const tabElement = tabRefs.current[tabId];
    tabElement?.scrollIntoView({ behavior: "smooth", inline: "center" });
    const selected = templates?.find((tab) => tab.id === tabId);
    if (selected && !completed.includes(tabId) && assignedlast?.templateId === tabId && assignedlast?.userId === localStorage.getItem("userid:")) {
      setSelectedTab(selected);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true)
    const form = formRef.current;
    const fieldsData = {};

    const radioGroups = new Set();
    templateData?.templateFields?.forEach((field) => {
      if (field.type === "radio" && field.properties?.groupLabel) {
        radioGroups.add(field.properties.groupLabel);
        fieldsData[field.properties.groupLabel] = "";
      }
    });

    const elements = form.querySelectorAll("input, textarea, select");
    elements.forEach((element) => {
      const label = element.name;
      if (!label) return;

      if (element.type === "checkbox") {
        fieldsData[label] = element.checked;
      } else if (element.type === "radio") {
        if (element.checked) {
          fieldsData[label] = element.value;
        }
      } else {
        fieldsData[label] = element.value;
      }
    });

    const currentIndex = templates?.findIndex((tab) => tab.id === selectedTab?.id);
    const nextTab = currentIndex !== -1 && currentIndex + 1 < templates?.length 
      ? templates[currentIndex + 1] 
      : null;

    const formDataObject = {
      image_name: image || "N/A",
      batch_name: batchname,
      level: selectedTab?.id || "Default Level",
      user_id: localStorage.getItem("userid:") || "user_001",
      fields: fieldsData,
      next_level: nextTab ? nextTab.id : 0,
    };

    setFormData(formDataObject);

    saveForm(formDataObject, {
      onSuccess: (response) => {
        form.reset();
        

        if (nextTab && !completed.includes(nextTab.id)) {
          setSelectedTab(nextTab);
          tabRefs.current[nextTab.id]?.scrollIntoView({ behavior: "smooth", inline: "center" });
        }
        setIsSubmitting(false);
      },
      onError: (error) => {
        console.error("saveForm error:", error);
        
        setIsSubmitting(false);
      },
    });
  };

  const renderField = (field) => {
    const { type, properties, children } = field;

    switch (type) {
      case "text-input":
        return (
          <div className="mb-4">
            <Label htmlFor={properties.label} className="text-gray-700">
              {properties.label}
              {properties.required && <span className="text-red-500">*</span>}
            </Label>
            <Input
              id={properties.label}
              name={properties.label}
              type="text"
              placeholder={properties.placeholder}
              required={properties.required}
              className="mt-1 bg-white border-gray-300"
            />
            {properties.helpText && (
              <p className="text-sm text-gray-500 mt-1">{properties.helpText}</p>
            )}
          </div>
        );

      case "textarea":
        return (
          <div className="mb-4">
            <Label htmlFor={properties.label} className="text-gray-700">
              {properties.label}
              {properties.required && <span className="text-red-500">*</span>}
            </Label>
            <Textarea
              id={properties.label}
              name={properties.label}
              placeholder={properties.placeholder}
              rows={properties.rows || 3}
              required={properties.required}
              className="mt-1 bg-white border-gray-300"
            />
            {properties.helpText && (
              <p className="text-sm text-gray-500 mt-1">{properties.helpText}</p>
            )}
          </div>
        );

      case "select":
        return (
          <div className="mb-4">
            <Label htmlFor={properties.label} className="text-gray-700">
              {properties.label}
              {properties.required && <span className="text-red-500">*</span>}
            </Label>
            <Select name={properties.label} required={properties.required}>
              <SelectTrigger id={properties.label} className="mt-1 bg-white border-gray-300">
                <SelectValue placeholder={properties.placeholder} />
              </SelectTrigger>
              <SelectContent className="bg-white">
                {properties.options?.map((option, index) => (
                  <SelectItem key={index} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {properties.helpText && (
              <p className="text-sm text-gray-500 mt-1">{properties.helpText}</p>
            )}
          </div>
        );

      case "checkbox":
        return (
          <div className="mb-4">
            <div className="flex items-center">
              <Checkbox
                id={properties.label}
                name={properties.label}
                defaultChecked={properties.checked}
                required={properties.required}
                className="border-gray-300"
              />
              <Label htmlFor={properties.label} className="ml-2 text-gray-700">
                {properties.label}
                {properties.required && <span className="text-red-500">*</span>}
              </Label>
            </div>
          </div>
        );

      case "radio":
        return (
          <div className="mb-4">
            <Label className="text-gray-700">
              {properties.groupLabel}
              {properties.required && <span className="text-red-500">*</span>}
            </Label>
            <RadioGroup
              required={properties.required}
              className="mt-1"
              name={properties.groupLabel}
            >
              {properties.options?.map((option, index) => (
                <div key={index} className="flex items-center">
                  <RadioGroupItem
                    value={option}
                    id={`${properties.groupLabel}-${index}`}
                    className="border-gray-300"
                  />
                  <Label htmlFor={`${properties.groupLabel}-${index}`} className="ml-2 text-gray-700">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        );

      case "date":
        return (
          <div className="mb-4">
            <Label htmlFor={properties.label} className="text-gray-700">
              {properties.label}
              {properties.required && <span className="text-red-500">*</span>}
            </Label>
            <Input
              id={properties.label}
              name={properties.label}
              type="date"
              required={properties.required}
              className="mt-1 bg-white border-gray-300"
            />
          </div>
        );

      case "time":
        return (
          <div className="mb-4">
            <Label htmlFor={properties.label} className="text-gray-700">
              {properties.label}
              {properties.required && <span className="text-red-500">*</span>}
            </Label>
            <Input
              id={properties.label}
              name={properties.label}
              type="time"
              required={properties.required}
              className="mt-1 bg-white border-gray-300"
            />
          </div>
        );

      case "number":
        return (
          <div className="mb-4">
            <Label htmlFor={properties.label} className="text-gray-700">
              {properties.label}
              {properties.required && <span className="text-red-500">*</span>}
            </Label>
            <Input
              id={properties.label}
              name={properties.label}
              type="number"
              placeholder={properties.placeholder}
              min={properties.min}
              max={properties.max}
              required={properties.required}
              className="mt-1 bg-white border-gray-300"
            />
          </div>
        );

      case "email":
        return (
          <div className="mb-4">
            <Label htmlFor={properties.label} className="text-gray-700">
              {properties.label}
              {properties.required && <span className="text-red-500">*</span>}
            </Label>
            <Input
              id={properties.label}
              name={properties.label}
              type="email"
              placeholder={properties.placeholder}
              required={properties.required}
              className="mt-1 bg-white border-gray-300"
            />
          </div>
        );

      case "tel":
        return (
          <div className="mb-4">
            <Label htmlFor={properties.label} className="text-gray-700">
              {properties.label}
              {properties.required && <span className="text-red-500">*</span>}
            </Label>
            <Input
              id={properties.label}
              name={properties.label}
              type="tel"
              placeholder={properties.placeholder}
              required={properties.required}
              className="mt-1 bg-white border-gray-300"
            />
          </div>
        );

      case "title":
        return (
          <div className="mb-4">
            <h2 className={`font-semibold ${properties.size === "large" ? "text-xl" : "text-lg"} text-gray-800`}>
              {properties.text}
            </h2>
          </div>
        );

      case "child-builder":
        return (
          <div className="mb-4">
            <h3 className="text-md font-semibold mb-2 text-gray-800">
              {properties.title}
            </h3>
            <div
              className="p-4 border rounded bg-gray-50"
              style={{
                display: properties.layout === "grid" ? "grid" : "flex",
                flexDirection: properties.layout === "stack" ? "column" : "row",
                flexWrap: properties.layout === "flex" ? "wrap" : undefined,
                gridTemplateColumns: properties.layout === "grid" ? `repeat(${properties.gridCols}, 1fr)` : undefined,
                gap: properties.gap ? `${properties.gap}px` : "16px",
              }}
            >
              {children?.map((child) => (
                <div
                  key={child.id}
                  style={{
                    flex: properties.layout === "flex" ? "1 1 0" : undefined,
                    minWidth: properties.layout === "flex" ? "200px" : undefined,
                  }}
                >
                  {renderField(child)}
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-1/2 p-4 bg-white relative">
      {isLoadingTabs && <LoadingSpinner />}
      {!isLoadingTabs && templates?.length === 0 && (
        <p className="text-gray-600">No templates available.</p>
      )}
      
      {templates?.length > 0 && (
        <Tabs
          value={selectedTab?.id || templates[0].id}
          onValueChange={handleTabClick}
          className="w-full"
        >
          <div ref={tabsRef} className="overflow-x-auto whitespace-nowrap no-scrollbar scroll-smooth">
            <TabsList className="inline-flex w-max gap-2 px-2">
                {templates?.map((tab) => {
                  const isCompleted = completed.includes(tab.id);
                  const isAssigned = assignedlast?.templateId === tab.id && assignedlast?.userId === localStorage.getItem("userid:");
                  const isDisabled = isCompleted || !isAssigned;

                  return (
                    <TabsTrigger
                      key={tab.id}
                      value={tab.id}
                      className="flex-shrink-0 whitespace-nowrap bg-white data-[state=active]:bg-gray-100 data-[state=active]:text-gray-900 text-gray-600 border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                      ref={(el) => (tabRefs.current[tab.id] = el)}
                      disabled={isDisabled}
                    >
                      {tab.name}
                    </TabsTrigger>
                  );
                })}
              </TabsList>
          </div>
          
          {templates.map((tab) => (
            <TabsContent key={tab.id} value={tab.id}>
              {isLoadingTemplate && selectedTab?.id === tab.id ? (
                <LoadingSpinner />
              ) : (
                selectedTab?.id === tab.id && templateData && (
                  <div className="p-4 border rounded bg-white">
                    <h2 className="text-lg font-semibold mb-4 text-gray-800">{templateData.name}</h2>
                    <form ref={formRef} onSubmit={handleSubmit}>
                      {templateData.templateFields?.length > 0 ? (
                        templateData.templateFields.map((field) => (
                          <div key={field.id}>{renderField(field)}</div>
                        ))
                      ) : (
                        <p className="text-gray-600">No fields available for this template.</p>
                      )}
                     <Button
                      type="submit"
                      className="mt-4 w-24 bg-gray-800 hover:bg-gray-900 cursor-pointer text-white transition-colors duration-300"
                      disabled={isSaveForm || isLoadingTemplate || isSubmitting}
                    >
                      {isSubmitting? 'Submitting':'Submit'}
                    </Button>
                    </form>
                  </div>
                )
              )}
            </TabsContent>
          ))}
        </Tabs>
      )}
    </div>
  );
}