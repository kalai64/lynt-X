"use client"

import { useState, useCallback } from "react"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import FormBuilderPage from "@/components/FormBuilder/form-builder"
import Sidebar from "@/components/FormBuilder/sidebar"
import PropertiesPanel from "@/components/FormBuilder/properties-panel"
import { FormElementProvider } from "@/components/FormBuilder/form-element-context"
import { Save, X, Power } from "lucide-react"
import { useRouter } from "next/navigation"
import { useCreateForm } from "@/hooks/formBuilder"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

export default function FormBuilder() {
  const [selectedElement, setSelectedElement] = useState(null)
  const [formName, setFormName] = useState("Untitled Form")
  const [isFormActive, setIsFormActive] = useState(true)
  const [isEditingName, setIsEditingName] = useState(false)
  const [formData, setFormData] = useState({ formElements: [] })
  const [isCancelDialogOpen, setIsCancelDialogOpen] = useState(false)

  const { createForm, isCreating } = useCreateForm()
  const updateFormData = useCallback((elements) => {
    setFormData((prev) => {
      if (JSON.stringify(prev.formElements) !== JSON.stringify(elements)) {
        return { ...prev, formElements: elements }
      }
      return prev
    })
  }, [])
  const router = useRouter()

  const handleSaveForm = () => {
    const payload = {
      name: formName,
      isActive: isFormActive,
      formData,
    };
    createForm(payload);
  };

  const handleCancelForm = () => {
  setIsCancelDialogOpen(true)
}



  const toggleFormActive = () => {
    setIsFormActive(!isFormActive)
  }

  const handleFormSubmit = (data) => {
    const { values, structure } = data

    const payload = {
      formId: Date.now().toString(),
      formName,
      isActive: isFormActive,
      submittedAt: new Date().toISOString(),
      fields: {},
      structure: structure,
    }

    const processElements = (elements, parentPath = "") => {
      elements.forEach((element) => {
        const fieldId = parentPath ? `${parentPath}.${element.id}` : element.id

        if (["title", "button"].includes(element.type)) return

        if (element.type === "child-builder") {
          if (element.children && element.children.length > 0) {
            payload.fields[fieldId] = {
              type: element.type,
              id: element.id,
              parentId: element.parentId,
              label: element.properties.title || "Child Form",
              children: {},
            }

            processElements(element.children, fieldId)
          }
          return
        }

        let value = values
        const pathParts = fieldId.split(".")

        for (const part of pathParts) {
          if (!value || typeof value !== "object") {
            value = undefined
            break
          }
          value = value[part]
        }

        if (value !== undefined) {
          if (!parentPath) {
            payload.fields[fieldId] = {
              type: element.type,
              id: element.id,
              parentId: element.parentId,
              label:
                element.properties.label || element.properties.groupLabel || element.properties.text || "Unnamed Field",
              value: value,
            }
          }
          else {
            const parentId = parentPath
            if (payload.fields[parentId]) {
              payload.fields[parentId].children[element.id] = {
                type: element.type,
                id: element.id,
                parentId: element.parentId,
                label:
                  element.properties.label ||
                  element.properties.groupLabel ||
                  element.properties.text ||
                  "Unnamed Field",
                value: value,
              }
            }
          }
        }
      })
    }

    processElements(structure)

    console.log("Form submitted with payload:", payload)
  }

  return (
  <DndProvider backend={HTML5Backend}>
    <FormElementProvider>
      <div className="flex h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50">
        <Sidebar />
        <main className="flex-1 overflow-auto p-4">
          <div className="mx-auto max-w-5xl">
            <div className="mb-4 flex items-center justify-between bg-white rounded-xl shadow-sm p-3">
              <div className="flex items-center">
                {isEditingName ? (
                  <input
                    type="text"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    onBlur={() => setIsEditingName(false)}
                    onKeyDown={(e) => e.key === "Enter" && setIsEditingName(false)}
                    autoFocus
                    className="text-xl font-semibold text-gray-800 border-b-2 border-indigo-300 focus:border-indigo-500 focus:outline-none bg-transparent"
                  />
                ) : (
                  <h1
                    className="text-xl font-semibold text-gray-800 cursor-pointer hover:text-indigo-600 transition-colors"
                    onClick={() => setIsEditingName(true)}
                  >
                    {formName}
                  </h1>
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
              <div className="flex gap-2">
                <Dialog open={isCancelDialogOpen} onOpenChange={setIsCancelDialogOpen}>
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
                      <DialogTitle>Cancel Form</DialogTitle>
                      <DialogDescription>
                        Are you sure you want to cancel? All unsaved changes will be lost.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <Button variant="outline" onClick={() => setIsCancelDialogOpen(false)}>
                        Stay
                      </Button>
                      <Button
                        variant="destructive"
                        onClick={() => {
                          router.push("/template-management");
                          setIsCancelDialogOpen(false);
                        }}
                      >
                        Cancel Form
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                <button
                  onClick={handleSaveForm}
                  disabled={isCreating}
                  className={`flex items-center gap-1 rounded-lg px-3 py-1.5 text-sm font-medium text-white transition-all ${
                    isCreating
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gray-800 hover:bg-gray-900 cursor-pointer"
                  }`}
                >
                  <Save className="h-3.5 w-3.5" />
                  {isCreating ? "Saving..." : "Save Form"}
                </button>
              </div>
            </div>
            <FormBuilderPage
              setSelectedElement={setSelectedElement}
              onSubmit={handleFormSubmit}
              setFormData={updateFormData}
            />
          </div>
        </main>
        <PropertiesPanel selectedElement={selectedElement} />
      </div>
    </FormElementProvider>
  </DndProvider>
);
}