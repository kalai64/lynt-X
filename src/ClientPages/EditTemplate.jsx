"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useRouter } from "next/navigation";
import { FormElementProvider } from "@/components/FormBuilder/form-element-context";
import FormBuilder from "@/components/FormBuilder/form-builder";
import PropertiesPanel from "@/components/FormBuilder/properties-panel";
import Sidebar from "@/components/FormBuilder/sidebar";
import { useGetTemplateById, useUpdateTemplateById } from "@/hooks/formBuilder";
import { Save, ArrowLeft, X, Power } from "lucide-react";
import Link from "next/link";
import LoadingSpinner from "@/components/LoadingSpinner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function EditTemplate() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const templateId = searchParams.get("id");
  const [selectedElement, setSelectedElement] = useState(null);
  const [formData, setFormData] = useState([]);
  const [templateName, setTemplateName] = useState("");
  const [initialElements, setInitialElements] = useState([]);
  const { template, isFetching } = useGetTemplateById(templateId);
  const { updateTemplate, isUpdating } = useUpdateTemplateById();
  const [formName, setFormName] = useState("");
  const [isEditingName, setIsEditingName] = useState(false);
  const [isFormActive, setIsFormActive] = useState(true);
  const [isCancelDialogOpen, setIsCancelDialogOpen] = useState(false);

  useEffect(() => {
    if (template) {
      setTemplateName(template.name);
      setFormName(template.name);
      setIsFormActive(template.isActive);

      const formElements = template.templateFields.map((field) => {
        const element = {
          id: `element-${field.id}`,
          type: field.type,
          icon:
            typeof field.icon === "string"
              ? JSON.parse(field.icon)
              : field.icon,
          label: field.label,
          properties: { ...field.properties },
          parentId: field.parentId,
          children: [],
          apiId: field.id,
        };

        if (field.children && field.children.length > 0) {
          element.children = field.children.map((child) => ({
            id: `element-child-${child.id}`,
            type: child.type,
            icon:
              typeof child.icon === "string"
                ? JSON.parse(child.icon)
                : child.icon,
            label: child.label,
            properties: { ...child.properties },
            parentId: child.parentId,
            apiId: child.id,
          }));
        }

        return element;
      });

      if (formData.length === 0) {
        setInitialElements(formElements);
        setFormData(formElements);
      }
    }
  }, [template]);

  const toggleFormActive = () => {
    setIsFormActive(!isFormActive);
  };

  const handleCancelForm = () => {
    setIsCancelDialogOpen(true);
  };

  const handleSaveForm = () => {
    handleSubmit();
  };

  const handleSubmit = async () => {
    if (!templateId) return;

    try {
      const formElements = formData.map((element) => {
        const icon =
          element.icon && typeof element.icon === "object"
            ? { className: element.icon.className || "h-4 w-4" }
            : { className: "h-4 w-4" };

        const field = {
          id: element.apiId || undefined,
          type: element.type,
          icon,
          label: element.label || "",
          properties: element.properties || {},
          parentId: element.parentId || null,
        };

        if (element.children && element.children.length > 0) {
          field.children = element.children.map((child) => {
            const childIcon =
              child.icon && typeof child.icon === "object"
                ? { className: child.icon.className || "h-4 w-4" }
                : { className: "h-4 w-4" };

            return {
              id: child.apiId || undefined,
              type: child.type,
              icon: childIcon,
              label: child.label || "",
              properties: child.properties || {},
              parentId: child.parentId || element.id,
            };
          });
        }

        return field;
      });

      const updateData = {
        name: formName,
        isActive: isFormActive,
        formData: {
          formElements,
        },
      };

      // console.log("Submitting template update:", JSON.stringify(updateData, null, 2))

      await updateTemplate({
        id: templateId,
        data: updateData,
      });
    } catch (error) {
      console.error("Error in handleSubmit:", error);
    }
  };

  const handleRemoveElement = (elementId) => {
    setFormData((prevFormData) => {
      const updatedFormData = prevFormData.filter(
        (element) => element.id !== elementId
      );
      return updatedFormData.map((element) => ({
        ...element,
        children:
          element.children?.filter((child) => child.parentId !== elementId) ||
          [],
      }));
    });
  };

  if (isFetching) {
    return <LoadingSpinner />;
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex h-screen flex-col">
        <header className="flex items-center justify-between border-b bg-white p-4 shadow-sm">
          <div className="flex items-center gap-4">
            <Link href="/template-management">
              <button className="flex items-center gap-1 rounded-lg border border-gray-300 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-50">
                <ArrowLeft className="h-4 w-4" />
                <span>Back</span>
              </button>
            </Link>
            <div className="flex items-center gap-3">
              <div>
                <h1 className="text-xl font-bold text-gray-800">
                  Edit Template
                </h1>
                <p className="text-sm text-gray-500">
                  Customize your form template
                </p>
              </div>
              <div className="h-8 border-l border-gray-300 mx-2"></div>
              <div className="flex items-center">
                {isEditingName ? (
                  <input
                    type="text"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    onBlur={() => setIsEditingName(false)}
                    onKeyDown={(e) =>
                      e.key === "Enter" && setIsEditingName(false)
                    }
                    autoFocus
                    className="text-lg font-semibold text-gray-800 border-b-2 border-indigo-300 focus:border-indigo-500 focus:outline-none bg-transparent"
                  />
                ) : (
                  <h2
                    className="text-lg font-semibold text-gray-800 cursor-pointer hover:text-indigo-600 transition-colors"
                    onClick={() => setIsEditingName(true)}
                  >
                    {formName}
                  </h2>
                )}
                <div className="ml-3">
                  <button
                    onClick={toggleFormActive}
                    className={`flex items-center gap-1 cursor-pointer rounded-full px-2.5 py-1 text-sm font-medium transition-all ${
                      isFormActive
                        ? "bg-green-100 text-green-700 hover:bg-green-200"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    <Power className="h-3.5 w-3.5" />
                    {isFormActive ? "Active" : "Inactive"}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Dialog
              open={isCancelDialogOpen}
              onOpenChange={setIsCancelDialogOpen}
            >
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:border-gray-300 transition-all"
                  onClick={handleCancelForm}
                >
                  <X className="h-3.5 w-3.5" />
                  Cancel
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Cancel Editing</DialogTitle>
                  <DialogDescription>
                    Are you sure you want to cancel? All unsaved changes will be
                    lost.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button
                    variant="outline"
                    onClick={() => setIsCancelDialogOpen(false)}
                  >
                    Stay
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={() => {
                      router.push("/template-management");
                      setIsCancelDialogOpen(false);
                    }}
                  >
                    Cancel Editing
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <button
              onClick={handleSaveForm}
              disabled={isUpdating}
              className={`flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm font-medium text-white transition-all ${
                isUpdating
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gray-800 hover:bg-gray-900 cursor-pointer"
              }`}
            >
              <Save className="h-3.5 w-3.5" />
              {isUpdating ? "Saving..." : "Save Form"}
            </button>
          </div>
        </header>
        <div className="flex flex-1 overflow-hidden">
          <FormElementProvider initialElements={initialElements}>
            <Sidebar />
            <main className="flex-1 overflow-auto bg-gray-50 p-6">
              <FormBuilder
                setSelectedElement={setSelectedElement}
                onSubmit={handleSubmit}
                setFormData={setFormData}
                onRemoveElement={handleRemoveElement}
              />
            </main>
            <PropertiesPanel
              selectedElement={selectedElement}
              setSelectedElement={setSelectedElement}
            />
          </FormElementProvider>
        </div>
      </div>
    </DndProvider>
  );
}
