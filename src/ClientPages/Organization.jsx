'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useOrganizationManagement, useOrganizations, useOrganizationUsers } from '@/hooks/organization';
import LoadingSpinner from '@/components/LoadingSpinner';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Home } from 'lucide-react';
import Table from '@/components/Table';

export default function Organization() {
  const { dbUser, isLoading: userLoading, isSignedIn, isLoaded } = useOrganizationManagement();
  const { organizations, isLoading: orgsLoading, createOrganization, isCreating } = useOrganizations();
  const [orgName, setOrgName] = useState('');
  const [selectedOrgId, setSelectedOrgId] = useState(null);
  const { users, isLoading: usersLoading } = useOrganizationUsers(selectedOrgId);

  const handleCreateOrganization = () => {
    if (orgName.trim()) {
      createOrganization(orgName);
      setOrgName('');
    }
  };

  const userColumns = [
    { header: 'Email', accessor: 'email' },
    { header: 'Role', accessor: 'role' },
  ];

  if (!isLoaded || userLoading) {
    return <LoadingSpinner />;
  }

  if (!isSignedIn || dbUser?.role !== 'superadmin') {
    return (
      <div className="p-6">
        <p className="text-red-600">Access restricted to superadmins.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Organization Management</h1>
          <Link href="/dashboard">
            <Button variant="outline" className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              Back to Dashboard
            </Button>
          </Link>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Create Organization</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <Label htmlFor="orgName" className="text-sm font-medium">
                  Organization Name
                </Label>
                <Input
                  id="orgName"
                  value={orgName}
                  onChange={(e) => setOrgName(e.target.value)}
                  placeholder="Enter organization name"
                  className="mt-1"
                  disabled={isCreating}
                />
              </div>
              <Button
                onClick={handleCreateOrganization}
                className="mt-6 sm:mt-0 bg-green-600 hover:bg-green-700"
                disabled={isCreating || !orgName.trim()}
              >
                {isCreating ? 'Creating...' : 'Create Organization'}
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Organizations</CardTitle>
          </CardHeader>
          <CardContent>
            {orgsLoading ? (
              <p className="text-gray-600">Loading organizations...</p>
            ) : organizations.length === 0 ? (
              <p className="text-gray-600">No organizations found.</p>
            ) : (
              <ul className="space-y-2">
                {organizations.map((org) => (
                  <li key={org.id}>
                    <button
                      onClick={() => setSelectedOrgId(org.id)}
                      className={`text-blue-600 hover:underline font-medium ${
                        selectedOrgId === org.id ? 'font-bold' : ''
                      }`}
                    >
                      {org.name}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Organization Users</CardTitle>
          </CardHeader>
          <CardContent>
            <Table
              columns={userColumns}
              data={users}
              itemsPerPage={5}
              isLoading={usersLoading}
              noDataMessage="No users found for this organization."
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}