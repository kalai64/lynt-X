import { NextResponse } from 'next/server';
import { PrismaClient } from '../../../../generated/prisma';
const prisma = new PrismaClient();

export async function POST(req) {
  const event = await req.json();

  if (event.type === 'user.created' || event.type === 'user.updated') {
    const user = event.data;

    try {
      await prisma.user.upsert({
        where: { id: user.id },
        update: {
          email: user.emailAddresses?.[0]?.emailAddress || '',
          full_data: user,
        },
        create: {
          id: user.id,
          email: user.emailAddresses?.[0]?.emailAddress || '',
          full_data: user,
        },
      });

      return NextResponse.json({ success: true });
    } catch (err) {
      return NextResponse.json({ error: err.message }, { status: 500 });
    }
  } else {
    return NextResponse.json({ error: 'Unhandled event type.' }, { status: 400 });
  }
}

