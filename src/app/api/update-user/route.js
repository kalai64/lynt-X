import { NextResponse } from 'next/server';

export async function POST(req) {
  const body = await req.json();
  const { id, fullname, username, email, ...rest } = body;

  try {
    // 1. Update Neon.tech database (placeholder, add your logic here)
    // await updateUserInNeon(id, body);

    // 2. Update Clerk
    const response = await fetch(`https://api.clerk.com/v1/users/${id}`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${process.env.CLERK_SECRET_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        first_name: fullname.split(' ')[0] || '',
        last_name: fullname.split(' ').slice(1).join(' ') || '',
        email_address: email,
        public_metadata: {
          ...rest,
        },
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ message: 'User updated in DB and Clerk' });
  } catch (error) {
    console.error('Update error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
