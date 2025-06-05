import { get, post } from "@/utils/apiHelper"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"

export function useGetCompletedBatches() {
  const {
    data: batches,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["qcclient", "completed-batches"],
    queryFn: () => get("/qcclient"),
    onError: (error) => {
      console.error("Error fetching completed batches:", error)
      toast.error("Failed to fetch completed batches.")
    },
  })

  return {
    batches,
    isLoading,
    isError,
  }
}

export function useGetImageFields(imageId) {
  const {
    data: imageFields,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["qcclient", imageId],
    queryFn: () => get(`/qcclient/${imageId}`),
    enabled: !!imageId,
    onError: (error) => {
      console.error("Error fetching image fields:", error)
      toast.error("Failed to fetch image fields.")
    },
  })

  return {
    imageFields,
    isLoading,
    isError,
  }
}


export function useQCSubmission() {
  const queryClient = useQueryClient();

  const saveQCMutation = useMutation({
    mutationFn: (payload) => post("/qcsubmission", payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["qcsubmissions"]);
      toast.success("QC form submitted successfully!");
    },
    onError: (error) => {
      console.error("Error submitting QC form:", error);
      toast.error("Failed to submit QC form.");
    },
  });

  return {
    saveQCForm: saveQCMutation.mutate,
    isSavingQCForm: saveQCMutation.isLoading,
    isError: saveQCMutation.isError,
  };
}
