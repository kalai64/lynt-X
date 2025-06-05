import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { get, post } from '../utils/apiHelper';

export const useOrganizationManagement = () => {
  const { user, isSignedIn, isLoaded } = useUser();
  const router = useRouter();
  const queryClient = useQueryClient();

  const userDataQuery = useQuery({
    queryKey: ['userData', user?.id],
    queryFn: () => get(`/users/${user?.id}`),
    enabled: isLoaded && isSignedIn && !!user && !!user.id,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    onError: (error) => {
      console.error('Error fetching user data:', {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
      });
    },
  });

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push('/sign-in');
    } else if (isLoaded && isSignedIn && userDataQuery.data?.role !== 'superadmin') {
      router.push('/dashboard');
    }
  }, [isLoaded, isSignedIn, userDataQuery.data?.role, router]);

  return {
    dbUser: userDataQuery.data || null,
    isLoading: userDataQuery.isLoading,
    isError: userDataQuery.isError,
    isSignedIn,
    isLoaded,
  };
};

export const useOrganizations = () => {
  const queryClient = useQueryClient();

  const organizationsQuery = useQuery({
    queryKey: ['organizations'],
    queryFn: () => get('/organization'),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    onError: (error) => {
      console.error('Error fetching organizations:', {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
      });
    },
  });

  const createOrganizationMutation = useMutation({
    mutationFn: (name) => post('/organization', { name }),
    onSuccess: () => {
      queryClient.invalidateQueries(['organizations']);
    },
    onError: (error) => {
      console.error('Error creating organization:', {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
      });
    },
  });

  return {
    organizations: organizationsQuery.data || [],
    isLoading: organizationsQuery.isLoading,
    isError: organizationsQuery.isError,
    createOrganization: createOrganizationMutation.mutate,
    isCreating: createOrganizationMutation.isLoading,
  };
};

export const useOrganizationUsers = (organizationId) => {
  const orgUsersQuery = useQuery({
    queryKey: ['orgUsers', organizationId],
    queryFn: async () => {
      const response = await get(`/organization/${organizationId}`)
      // console.log('Organization users response:', response)
      return response
    },
    enabled: !!organizationId,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    onError: (error) => {
      console.error('Error fetching organization users:', {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
      });
    },
  });

  return {
    users: orgUsersQuery.data || [],
    isLoading: orgUsersQuery.isLoading,
    isError: orgUsersQuery.isError,
  };
};
