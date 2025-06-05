import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { get, post } from '../utils/apiHelper';

export const useSyncUser = () => {
  const { user, isSignedIn, isLoaded } = useUser();
  const router = useRouter();
  const queryClient = useQueryClient();
  const prevUserIdRef = useRef(null);

  const syncUserMutation = useMutation({
    mutationFn: async () => {
      if (!user) throw new Error('No user available');
      try {
        await get(`/users/${user.id}`);
        return { synced: false };
      } catch (error) {
        const response = await post('/clerk/syncuser', { user });
        return { synced: true, response };
      }
    },
    onSuccess: (data) => {
      if (data?.synced) {
        queryClient.invalidateQueries(['userData', user?.id]);
      }
    },
    onError: (error) => {
      console.error('Error syncing user:', {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
      });
    },
  });

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push('/sign-in');
      return;
    }
    if (
      isLoaded &&
      isSignedIn &&
      user &&
      !syncUserMutation.isLoading &&
      prevUserIdRef.current !== user.id
    ) {
      prevUserIdRef.current = user.id;
      syncUserMutation.mutate();
    }
  }, [isLoaded, isSignedIn, user?.id, router, syncUserMutation.isLoading]);

  return {
    isSyncing: syncUserMutation.isLoading,
    isError: syncUserMutation.isError,
    error: syncUserMutation.error,
    isSignedIn,
    isLoaded,
  };
};

export const useUserData = () => {
  const { user, isSignedIn, isLoaded } = useUser();

  const userDataQuery = useQuery({
    queryKey: ['userData', user?.id],
    queryFn: () => get(`/users/${user.id}`),
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

  return {
    data: userDataQuery.data || null,
    isLoading: userDataQuery.isLoading,
    isError: userDataQuery.isError,
  };
};

export const useAdminUsers = (userId, role) => {
  const adminUsersQuery = useQuery({
    queryKey: ['adminUsers', userId],
    queryFn: () => get('/users/me', { params: { userId } }),
    enabled: !!userId && role === 'admin',
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    onError: (error) => {
      console.error('Error fetching users for admin:', {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
      });
    },
  });

  return {
    data: adminUsersQuery.data || [],
    isLoading: adminUsersQuery.isLoading,
    isError: adminUsersQuery.isError,
  };
};

export const useOrgUsers = (organizationId) => {
  const orgUsersQuery = useQuery({
    queryKey: ['orgUsers', organizationId],
    queryFn: () => get(`/organization/${organizationId}`),
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
    data: orgUsersQuery.data || [],
    isLoading: orgUsersQuery.isLoading,
    isError: orgUsersQuery.isError,
  };
};

export const useBatches = () => {
  const batchesQuery = useQuery({
    queryKey: ['batches'],
    queryFn: () => get('/batches'),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    onError: (error) => {
      console.error('Error fetching batches:', {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
      });
    },
  });

  return {
    data: batchesQuery.data || [],
    isLoading: batchesQuery.isLoading,
    isError: batchesQuery.isError,
  };
};


export function useGetMetricsData() {
  const {
    data: metrics,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["dashboard", "metrics"],
    queryFn: () => get("/dashboard"),
    onError: (error) => {
      console.error("Error fetching dashboard metrics:", error);
      toast.error("Failed to load dashboard data.");
    },
  });

  return {
    metrics,
    isLoading,
    isError,
  };
}