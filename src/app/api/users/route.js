import { PrismaClient } from '../../../generated/prisma';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request) {
  try {
    const organizationId = request.headers.get('x-organization-id');

    if (!organizationId) {
      return NextResponse.json(
        { error: 'Organization ID is required' },
        { status: 400 }
      );
    }

    const users = await prisma.user.findMany({
      where: {
        organizationId: Number(organizationId),
      },
    });

    const transformedUsers = users.map((user) => ({
      ...user,
      fullName: user.full_data?.fullName || null,
      username: user.full_data?.username || null,
    }));

    return NextResponse.json(transformedUsers);
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
