"use client";

import { useEffect, useMemo, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import { useUserData, useAdminUsers, useOrgUsers } from '@/hooks/dashboard';
import LoadingSpinner from '@/components/LoadingSpinner';
import EditUserForm from '@/components/UsersList/EditUserForm';
import { Pencil, Mail, Clock, X } from 'lucide-react';
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
} from "@/components/ui/drawer";
import { useUpdateUser } from '@/hooks/users';

export default function Users() {
  const { isSignedIn, isLoaded } = useUser();
  const router = useRouter();
  const { data: dbUser, isLoading: userLoading } = useUserData();
  const [editingUser, setEditingUser] = useState(null); 
  const userId = useMemo(() => dbUser?.id, [dbUser?.id]);
  const role = useMemo(() => dbUser?.role?.toLowerCase(), [dbUser?.role]); 
  const organizationId = useMemo(() => dbUser?.organizationId, [dbUser?.organizationId]);

  const { updateUser, isUpdating } = useUpdateUser();

  const { data: adminUsers, isLoading: adminUsersLoading } = useAdminUsers(userId, role);
  const { data: orgUsers, isLoading: orgUsersLoading } = useOrgUsers(organizationId);

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      router.push('/sign-in');
    }
  }, [isLoaded, isSignedIn, router]);

  const onEditClick = (user) => {
   setEditingUser(user);
  };

  const handleUpdate = (updatedUser) => {
    updateUser(updatedUser, {
      onSuccess: () => {
        setEditingUser(null); 
      },
    });
  };

  const usersData = adminUsers.length > 0 ? adminUsers : orgUsers;

  if (!isLoaded || userLoading || adminUsersLoading || orgUsersLoading) {
    return <LoadingSpinner />;
  }

  if (!isSignedIn) {
    return <div className="p-6"><p>Please sign in to access the users list.</p></div>;
  }

  if (role !== 'admin' && !organizationId) {
    return <div className="p-6"><p>You do not have permission to view this page.</p></div>;
  }

  return (
    <div className="px-2 py-2">
      <h1 className="text-2xl font-bold mb-2">Organization Users</h1>
      <p className="text-gray-600 mb-6">Meet our awesome team members</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {usersData.map((user, index) => {
          const name = user.full_data?.username || user.email || 'Unknown User';
          const avatar = user.full_data?.hasImage
            ? user.full_data.imageUrl
            : `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=96&background=3B82F6&color=fff`;
          const fullName = user.full_data?.fullName || 'N/A';
          const email = user.email || 'N/A';
          const designation = user.designation || 'N/A';
          const shift = user.shift || 'N/A';

          return (
            <div
              key={index}
              className="group border border-gray-200 rounded-lg p-4 relative flex flex-col justify-between transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              {/* Edit Icon (Top-right) */}
              {role === 'admin' && (
                <button
                  onClick={() => onEditClick(user)}
                  className="absolute top-2 right-2 text-orange-600 p-2 bg-gray-100 hover:bg-gray-200 rounded-full opacity-0 group-hover:opacity-100 transition cursor-pointer"
                  title="Edit"
                >
                  <Pencil size={16} />
                </button>
              )}

              {/* Avatar and Name */}
              <div className="flex flex-col items-center text-center">
                <img
                  src={avatar}
                  alt={name}
                  className="w-20 h-20 rounded-full object-cover mb-4"
                />
                <h2 className="text-lg font-semibold capitalize">{fullName}</h2>
                <p className="text-sm text-gray-500 capitalize">{designation}</p>
              </div>

              {/* Footer Section */}
              <div className="flex justify-between items-end mt-4 pt-2 border-t border-gray-200">
                {/* Email (Left) */}
                <div className="flex flex-col items-start">
                  <Mail size={16} className="text-blue-500 mb-1" />
                  <p className="text-sm text-gray-500">{email}</p>
                </div>

                {/* Shift (Right) */}
                <div className="flex flex-col items-end">
                  <Clock size={16} className="text-green-500 mb-1" />
                  <p className="text-sm text-gray-500">{shift}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* Edit User Drawer */}
      <Drawer open={!!editingUser} onOpenChange={(open) => !open && setEditingUser(null)} direction="right">
        <DrawerContent className="custom-drawer-content bg-white rounded-l-xl shadow-xl p-6">
          <DrawerHeader>
            <DrawerTitle className="text-2xl font-bold text-gray-900 tracking-tight">
              Edit User
            </DrawerTitle>
            <DrawerClose className="absolute top-4 right-4 rounded-full p-2 bg-gray-100 hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400">
              <X className="w-6 h-6 text-gray-600 hover:text-gray-800 cursor-pointer" />
            </DrawerClose>
          </DrawerHeader>
          <div className="mt-6">
            {editingUser && (
              <EditUserForm userData={editingUser} onSubmit={handleUpdate} onClose={() => setEditingUser(null)} />
            )}
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}