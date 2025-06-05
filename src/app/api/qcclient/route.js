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
      select: {
        id: true,
        batchname: true,
        organizationId: true,
      },
    });
 
    const enrichedBatches = await Promise.all(
      batches.map(async (batch) => {
        const imagecollection = await prisma.imagecollections.findMany({
          where: {
            batchname: batch.batchname,
            imagestatus: true,
          },
          select: {
            id: true,
            filename: true,
            image: true,
            organizationId: true,
            assigned: true,
            completed: true,
            imagestatus: true,
            userid: true,
          },
        });
        return {
          id: batch.id,
          batchname: batch.batchname,
          imagescount: imagecollection.length,
          imagecollection: imagecollection.map(image => ({
            id: image.id,
            filename: image.filename.split('/').pop(),
            image: image.image,
            organizationId: image.organizationId,
            assigned: image.assigned,
            completed: image.completed,
            imagestatus: image.imagestatus,
            userid: image.userid,
          })),
        };
      })
    );
 
    // Filter batches to only include those with at least one image
    const filteredBatches = enrichedBatches.filter(batch => batch.imagecollection.length > 0);
 
    return NextResponse.json(filteredBatches, { status: 200 });
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}