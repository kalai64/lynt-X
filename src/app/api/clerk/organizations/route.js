import { createClerkClient } from '@clerk/backend';

const clerkClientManual = createClerkClient({ secretKey: process.env.CLERK_SECRET_KEY });

export async function GET() {
  try {
    const organizations = await clerkClientManual.organizations.getOrganizationList();
    return new Response(JSON.stringify(organizations), { status: 200 });
  } catch (error) {
    console.error('Error fetching organizations:', error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
