import { get } from "@/utils/apiHelper";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useUserLog() {
  const {
    data: userLogData,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["user-log", "getusers"],
    queryFn: () => get("/userlog"),
    onError: (error) => {
      console.error("Error fetching users:", error);
      toast.error("Failed to fetch users.");
    },
  });

  return {
    userLogData,
    isLoading,
    isError,
  };
}
