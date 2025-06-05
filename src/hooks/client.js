"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { get, post } from "../utils/apiHelper";

export function useFormSubmission() {
  const queryClient = useQueryClient();

  const saveFormMutation = useMutation({
    mutationFn: (payload) => post("/formsubmission", payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["templates"]);
      toast.success("Form submitted successfully!");
    },
    onError: (error) => {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit form.");
    },
  });

  return {
    saveForm: saveFormMutation.mutate,
    isSaveForm: saveFormMutation.isLoading,
    isError: saveFormMutation.isError,
  };
}

export function useAssignImage() {
  const queryClient = useQueryClient();

  const assignImageMutation = useMutation({
    mutationFn: (payload) => post("/assignimage", payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["images"]);
      // toast.success("Image assigned successfully!");
    },
    onError: (error) => {
      console.error("Error assigning image:", error);
      // toast.error("Failed to assign image.");
    },
  });

  return {
    assignImage: assignImageMutation.mutate,
    isAssignImage: assignImageMutation.isLoading,
    isAssignImageError: assignImageMutation.isError,
  };
}

export function useGetAllTemplates() {
  const {
    data: templates,
    isLoading: isFetching,
    isError: isFetchError,
  } = useQuery({
    queryKey: ["templates"],
    queryFn: () => get("/template/order"),
    onError: (error) => {
      console.error("Error fetching templates:", error);
      toast.error("Failed to fetch templates.");
    },
  });

  return {
    templates: templates || [],
    isFetching,
    isFetchError,
  };
}

export function useGetTemplateById(templateId) {
  const {
    data: template,
    isLoading: isFetching,
    isError: isFetchError,
  } = useQuery({
    queryKey: ["template", templateId],
    queryFn: () => get(`/template/${templateId}`),
    enabled: !!templateId,
    onError: (error) => {
      console.error("Error fetching template details:", error);
      // toast.error("Failed to fetch template details.");
    },
  });

  return {
    template,
    isFetching,
    isFetchError,
  };
}

export function useGetAssignedImages(userId) {
  const {
    data: images,
    isLoading: isFetching,
    isError: isFetchError,
  } = useQuery({
    queryKey: ["assigned-images", userId],
    queryFn: () => get(`/assignimage/${userId}`),
    enabled: !!userId,
    onError: (error) => {
      console.error("Error fetching assigned images:", error);
      // toast.error("Failed to fetch assigned images.");
    },
  });

  return {
    images,
    isFetching,
    isFetchError,
  };
}
