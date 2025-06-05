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

    const logs = await prisma.userLog.findMany({
      where: {
        organizationid: Number(organizationId),
      },
      orderBy: {
        actiondate: 'desc',
      },
      include: {
        user: {
          select: {
            fullname: true,
            email: true,
          },
        },
      },
    });

    // Optional: reshape the output to include fullname at the root level
    const enrichedLogs = logs.map((log) => ({
      ...log,
      fullname: log.user?.fullname || null,
    }));

    return NextResponse.json(enrichedLogs, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
