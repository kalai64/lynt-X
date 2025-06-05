'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from '@clerk/nextjs';

export default function CompleteProfile() {
  const [orgOptions, setOrgOptions] = useState([]);
  const [organizationId, setOrganizationId] = useState('');
  const { getToken, isLoaded } = useAuth();

  useEffect(() => {
    const fetchOrganizations = async () => {
      try {
        const res = await axios.get('/api/clerk/organizations');
        setOrgOptions(res.data.data);
      } catch (error) {
        console.error('Error fetching organizations:', error);
      }
    };

    fetchOrganizations();
  }, []);

  const handleSubmit = async () => {
    if (!organizationId) {
      alert('Please select an organization.');
      return;
    }

    if (!isLoaded) {
      alert('Session is still initializing. Please wait and try again.');
      return;
    }

    try {
      const token = await getToken({ template: 'default' }); // Ensure you fetch the correct session token

      await axios.post(
        '/api/clerk/update-organization',
        { organizationId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      window.location.href = '/dashboard';
    } catch (error) {
      console.error('Error updating organization:', error);
      alert('Failed to update organization. Please try again.');
    }
  };

  return (
    <div>
      <h2>Select Your Organization</h2>
      <select onChange={(e) => setOrganizationId(e.target.value)} value={organizationId}>
        <option value="">Select</option>
        {orgOptions.map((org) => (
          <option key={org.id} value={org.id}>
            {org.name}
          </option>
        ))}
      </select>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
