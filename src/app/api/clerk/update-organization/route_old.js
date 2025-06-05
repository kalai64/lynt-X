import { clerkClient } from '@clerk/clerk-sdk-node';
import { verifyToken } from '@clerk/clerk-sdk-node';

export async function POST(request) {
  try {
    const authHeader = request.headers.get('authorization');

    if (!authHeader) {
      return new Response(JSON.stringify({ error: 'Missing Authorization Header' }), { status: 401 });
    }

    const token = authHeader.replace('Bearer ', '');
    const payload = await verifyToken(token, { secretKey: process.env.CLERK_SECRET_KEY });

    const userId = payload.sub;
    const { organizationId } = await request.json();

    if (!userId) {
      return new Response(JSON.stringify({ error: 'Invalid token: No user ID found.' }), { status: 401 });
    }

    // Final correct method to update user metadata
    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: { organization: organizationId },
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error('Error updating organization:', error);
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}
