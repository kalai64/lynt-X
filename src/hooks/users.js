import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { patch, get } from '../utils/apiHelper'; 

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (updatedUser) => patch(`/users/${updatedUser.id}`, updatedUser),
    onSuccess: (data, variables) => {
      queryClient.setQueryData(['user', variables.id], data);
      queryClient.invalidateQueries(['users']);
      toast.success('User updated successfully!');
    },
    onError: (error) => {
      console.error('Error updating user:', error.message);
      toast.error('Failed to update user.');
    },
  });

  return {
    updateUser: mutation.mutate,
    isUpdating: mutation.isLoading,
    isError: mutation.isError,
  };
}

export function useGetOrganizationUsers() {
  const {
    data: organizationUsers,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["organizationUsers"], 
    queryFn: async () => {
      // console.log("Triggering API: Fetching organization users..."); 
      const response = await get("/users"); 
      // console.log("API Response: Organization users data:", response); 
      return response;
    },
    enabled: true, 
    onError: (error) => {
      console.error("Error fetching organization users:", error);
      toast.error("Failed to fetch organization users.");
    },
  });

  return {
    organizationUsers,
    isLoading,
    isError,
    error,
  };
}