'use client';

import { useEffect } from 'react';
import { useUserData } from '@/hooks/dashboard';

export default function StoreOrgId() {
  const { data: dbUser, isLoading: userLoading } = useUserData();

  useEffect(() => {
    if (!userLoading && dbUser?.organizationId) {
      const orgId = dbUser?.organizationId;
      const role = dbUser?.role;
      const userid = dbUser?.id;
      localStorage.setItem('organizationId:', orgId);
      localStorage.setItem('user_role:', role);
      localStorage.setItem('userid:', userid);
      // console.log('Stored organization ID:', orgId);
    }
  }, [dbUser, userLoading]);

  return null;
}
