import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { get, post } from '../utils/apiHelper';
import toast from 'react-hot-toast';

export const useFTPManagement = () => {
  const { user, isSignedIn, isLoaded } = useUser();
  const router = useRouter();

  const userDataQuery = useQuery({
    queryKey: ['userData', user?.id],
    queryFn: () => get(`/users/${user?.id}`),
    enabled: isLoaded && isSignedIn && !!user && !!user.id,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    onSuccess: () => {
      // toast.success('User data fetched successfully');
    },
    onError: (error) => {
      toast.error('Failed to fetch user data');
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
    }
  }, [isLoaded, isSignedIn, router]);

  return {
    dbUser: userDataQuery.data || null,
    isLoading: userDataQuery.isLoading,
    isError: userDataQuery.isError,
    isSignedIn,
    isLoaded,
  };
};

export const useOrganizations = () => {
  const organizationsQuery = useQuery({
    queryKey: ['organizations'],
    queryFn: () => get('/organization'),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    onSuccess: () => {
      // toast.success('Organizations fetched successfully');
    },
    onError: (error) => {
      toast.error('Failed to fetch organizations');
      console.error('Error fetching organizations:', {
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
  };
};

export const useFTPData = (organizationId) => {
  const queryClient = useQueryClient();

  const ftpDataQuery = useQuery({
    queryKey: ['ftpData', organizationId],
    queryFn: () => get(`/ftp/${organizationId}`),
    enabled: !!organizationId,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    onSuccess: () => {
      // toast.success('FTP data fetched successfully');
    },
    onError: (error) => {
      toast.error('Failed to fetch FTP data');
      console.error('Error fetching FTP data:', {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
      });
    },
  });

  const saveFTPMutation = useMutation({
    mutationFn: (ftpData) => post('/ftp', ftpData),
    onSuccess: () => {
      toast.success('FTP data saved successfully');
      queryClient.invalidateQueries(['ftpData', organizationId]);
    },
    onError: (error) => {
      toast.error('Failed to save FTP data');
      console.error('Error saving FTP data:', {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
      });
    },
  });

  const testFTPMutation = useMutation({
    mutationFn: (ftpData) => post('/ftp/test', ftpData),
    onSuccess: (data) => {
      if (data.success) {
        toast.success('FTP connection test successful');
      } else {
        toast.error(`FTP connection test failed: ${data.error}`);
      }
    },
    onError: (error) => {
      toast.error(`Failed to test FTP connection: ${error.message}`);
      console.error('Error testing FTP connection:', {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
      });
    },
  });

  return {
    ftpData: ftpDataQuery.data || null,
    isLoading: ftpDataQuery.isLoading,
    isError: ftpDataQuery.isError,
    saveFTP: saveFTPMutation.mutate,
    isSaving: saveFTPMutation.isLoading,
    testFTP: testFTPMutation.mutate,
    testFTPStatus: testFTPMutation.data?.success ? 'Success' : testFTPMutation.data?.error ? `Failed: ${testFTPMutation.data.error}` : testFTPMutation.isError ? `Failed: ${testFTPMutation.error?.message}` : '',
  };
};