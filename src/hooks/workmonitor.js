import { get, post } from "@/utils/apiHelper";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useGetWorkMonitor(batchname) {
  const {
    data: workMonitorData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["workmonitor", batchname || "all"], 
    queryFn: async () => {
      const url = batchname && batchname !== "all" ? `/workmonitor/${batchname}` : `/workmonitor`;
      const response = await get(url);
      return response;
    },
    enabled: true,  
    onError: (error) => {
      console.error(`Error fetching work monitor for batch: ${batchname}`, error);
      toast.error(`Failed to fetch work monitor for ${batchname}`);
    },
  });

  return {
    workMonitorData,
    isLoading,
    isError,
    error,
  };
}

export function useReassignUser() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (payload) => post("/workmonitor", payload), 
    onSuccess: () => {
      queryClient.invalidateQueries(["workmonitor"]); 
      toast.success("User reassigned successfully!");
    },
    onError: (error) => {
      console.error("Error reassigning user:", error);
      const message =
        error?.response?.data?.error || "Failed to reassign user.";
      toast.error(message);
    },
  });

  return {
    reassignUser: mutation.mutate,
    isReassigning: mutation.isLoading,
    isError: mutation.isError,
  };
}