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

    const batches = await prisma.batch.findMany({
      where: {
        organizationId: Number(organizationId),
      },
    });

    const enrichedBatches = await Promise.all(
      batches.map(async (batch) => {
        const imagecollection = await prisma.imagecollections.findMany({
          where: {
            batchname: batch.batchname,
          },
        });
        return {
          ...batch,
          imagescount: imagecollection.length,
          imagecollection,
        };
      })
    );

    return NextResponse.json(enrichedBatches, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}