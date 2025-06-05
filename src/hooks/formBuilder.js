"use client"

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"
import { get, post, put, del } from "../utils/apiHelper"

export function useCreateForm() {
  const queryClient = useQueryClient()
  const router = useRouter()

  const saveFormMutation = useMutation({
    mutationFn: (payload) => post("/template", [payload]),
    onSuccess: () => {
      queryClient.invalidateQueries(["templates"])
      toast.success("Form saved successfully!")
      router.push("/template-management")
    },
    onError: (error) => {
      console.error("Error saving form:", error)
      toast.error("Failed to save form.")
    },
  })

  return {
    createForm: saveFormMutation.mutate,
    isCreating: saveFormMutation.isLoading,
    isError: saveFormMutation.isError,
  }
}

export function useGetAllTemplates() {
  const {
    data: templates,
    isLoading: isFetching,
    isError: isFetchError,
  } = useQuery({
    queryKey: ["templates"],
    queryFn: () => get("/template"),
    onError: (error) => {
      console.error("Error fetching templates:", error)
      toast.error("Failed to fetch templates.")
    },
  })

  return {
    templates,
    isFetching,
    isFetchError,
  }
}

export function useGetTemplateById(id) {
  const {
    data: template,
    isLoading: isFetching,
    isError: isFetchError,
  } = useQuery({
    queryKey: ["template", id],
    queryFn: () => get(`/template/${id}`),
    onError: (error) => {
      console.error("Error fetching template:", error)
      toast.error("Failed to fetch template.")
    },
  })

  return {
    template,
    isFetching,
    isFetchError,
  }
}

export function useUpdateTemplateById() {
  const queryClient = useQueryClient()
  const router = useRouter()

  const {
    mutate: updateTemplate,
    isLoading: isUpdating,
    isError: isUpdateError,
    error: updateError,
  } = useMutation({
    mutationFn: ({ id, data }) => {
      console.log("Updating template with data:", data)
      return put(`/template/${id}`, data)
    },
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries(["template", variables.id])
      queryClient.invalidateQueries(["templates"])
      toast.success("Template updated successfully!")
      router.push("/template-management")
    },
    onError: (error) => {
      console.error("Error updating template:", error)
      toast.error(`Failed to update template: ${error.message || "Unknown error"}`)
    },
  })

  return {
    updateTemplate,
    isUpdating,
    isUpdateError,
    updateError,
  }
}

export function useDeleteTemplate() {
  const queryClient = useQueryClient()

  const deleteTemplateMutation = useMutation({
    mutationFn: (id) => del(`/template/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries(["templates"])
      toast.success("Template deleted successfully!")
    },
    onError: (error) => {
      console.error("Error deleting template:", error)
      toast.error("Failed to delete template.")
    },
  })

  return {
    deleteTemplate: deleteTemplateMutation.mutate,
    isDeleting: deleteTemplateMutation.isLoading,
    isError: deleteTemplateMutation.isError,
  }
}

export function useToggleClientStatus() {
  const queryClient = useQueryClient()

  const {
    mutate: toggleClientStatus,
    isLoading: isToggling,
    isError: isToggleError,
  } = useMutation({
    mutationFn: ({ id, newValue }) =>
      put(`/template/client/${id}`, { client: newValue }),
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries(["templates"])
      queryClient.invalidateQueries(["template", variables.id])
      toast.success("Client status updated successfully!")
    },
    onError: (error) => {
      console.error("Failed to update client status:", error)
      toast.error("Failed to update client status.")
    },
  })

  return {
    toggleClientStatus,
    isToggling,
    isToggleError,
  }
}

export function useUpdateOrderno() {
  const queryClient = useQueryClient();

  const {
    mutate: updateOrderno,
    isLoading: isUpdatingOrderno,
    isError: isOrdernoUpdateError,
  } = useMutation({
    mutationFn: async ({ id, orderno }) => {
      return await put(`/template/order/${id}`, { orderno });
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries(["templates"]);
      queryClient.invalidateQueries(["template", variables.id]);
      toast.success("Order number updated successfully!");
    },
    onError: (error) => {
      console.error("Failed to update order number:", error);
      const message =
        error?.response?.data?.error || "Failed to update order number.";
      toast.error(message);
    },
  });

  return {
    updateOrderno,
    isUpdatingOrderno,
    isOrdernoUpdateError,
  };
}
