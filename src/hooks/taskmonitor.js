import { get, patch } from "@/utils/apiHelper";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

// task monitor
// fetch all task monitor batches (/batches/true)
export function useGetAllUnhiddenBatches() {
  const {
    data: unhiddenBatches,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["taskmonitor", "unhidden-batches"],
    queryFn: () => get("/batches/true"),
    onError: (error) => {
      console.error("Error fetching unhidden batches:", error);
      toast.error("Failed to fetch unhidden batches.");
    },
  });

  return {
    unhiddenBatches,
    isLoading,
    isError,
  };
}

// Update task monitor (/batches/false - PATCH)
export function useHideBatches() {
  const queryClient = useQueryClient();

  const hideBatchesMutation = useMutation({
    mutationFn: (payload) => patch("/batches/false", payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["taskmonitor", "unhidden-batches"]);
      queryClient.invalidateQueries(["taskmonitor", "hidden-batches"]);
      toast.success("Batches hide successfully!");
    },
    onError: (error) => {
      console.error("Error hiding batches:", error);
      toast.error("Failed to hide batches.");
    },
  });

  return {
    hideBatches: hideBatchesMutation.mutate,
    ishiding: hideBatchesMutation.isLoading,
    isError: hideBatchesMutation.isError,
  };
}


// Hidden batches
// fetch all hidden batches (/batches/false)
export function useGetAllHiddenBatches() {
  const {
    data: hiddenBatches,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["taskmonitor", "hidden-batches"],
    queryFn: () => get("/batches/false"),
    onError: (error) => {
      console.error("Error fetching hidden batches:", error);
      toast.error("Failed to fetch hidden batches.");
    },
  });

  return {
    hiddenBatches,
    isLoading,
    isError,
  };
}

// Update hidden batches (/batches/true - PATCH)
export function useUnHideBatches() {
  const queryClient = useQueryClient();

  const unhideBatchesMutation = useMutation({
    mutationFn: (payload) => patch("/batches/true", payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["taskmonitor", "unhidden-batches"]);
      queryClient.invalidateQueries(["taskmonitor", "hidden-batches"]);
      toast.success("Batches Unhidden successfully!");
    },
    onError: (error) => {
      console.error("Error Unhiding batches:", error);
      toast.error("Failed to Unhide batches.");
    },
  });

  return {
    unhideBatches: unhideBatchesMutation.mutate,
    isUnHiding: unhideBatchesMutation.isLoading,
    isError: unhideBatchesMutation.isError,
  };
}

