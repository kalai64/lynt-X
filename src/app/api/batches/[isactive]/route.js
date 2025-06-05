import { PrismaClient } from '../../../../generated/prisma';
import { NextResponse } from 'next/server';
import { logUserAction } from '../../services/logservice';
 
const prisma = new PrismaClient();
 
export async function GET(request, { params }) {
  try {
    const organizationId = request.headers.get('x-organization-id');
    const isactive = params.isactive;
console.log("isactive", params.isactive)
    if (!organizationId) {
      return NextResponse.json(
        { error: 'Organization ID is required' },
        { status: 400 }
      );
    }
 
    const isActiveBoolean = isactive.toLowerCase() === 'true';
 
    const batches = await prisma.batch.findMany({
      where: {
        organizationId: Number(organizationId),
        isactive: isActiveBoolean,
      },
      select: {
        batchname: true,
        uniqueid: true,
        createdat: true,
        priority: true,
        engineToPriority: true,
      },
    });
 
    if (!batches.length) {
      return NextResponse.json(
        { error: 'No batches found for the given filters' },
        { status: 404 }
      );
    }
 
    const enrichedBatches = await Promise.all(
      batches.map(async (batch) => {
        const totalImages = await prisma.imagecollections.count({
          where: {
            batchname: batch.batchname,
          },
        });
 
        return {
          ...batch,
          totalImages,
        };
      })
    );
 
    return NextResponse.json(enrichedBatches, { status: 200 });
  } catch (err) {
    console.error('Error fetching batches:', err);
    return NextResponse.json(
      { error: err.message },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
 
export async function PATCH(request, { params }) {
  try {
    const organizationId = request.headers.get('x-organization-id');
    const userId = request.headers.get('x-user-id');
    const role = request.headers.get('x-role');

    if (!organizationId || !userId || !role) {
      return NextResponse.json(
        { error: 'Missing required headers: x-organization-id, x-user-id, x-role' },
        { status: 400 }
      );
    }
    const { isactive } = params;
    const batchnames = await request.json();

    const isactiveBoolean = isactive.toLowerCase() === 'true';

    if (!Array.isArray(batchnames) || batchnames.length === 0) {
      return NextResponse.json(
        { error: 'Request body must be a non-empty array of batch names' },
        { status: 400 }
      );
    }
    const updatedBatch = await prisma.batch.updateMany({
      where: {
        batchname: { in: batchnames },
        organizationId: Number(organizationId),
      },
      data: {
        isactive: isactiveBoolean,
      },
    });

    if (updatedBatch.count === 0) {
      return NextResponse.json(
        { error: 'No batches found with the given batchnames and organization ID' },
        { status: 404 }
      );
    }

    await logUserAction({
      userid: userId,
      organizationid: Number(organizationId),
      role,
      action: `Updated 'isactive' to ${isactiveBoolean} for ${updatedBatch.count} batch(es): ${batchnames.join(', ')}`,
    });

    return NextResponse.json(
      {
        message: 'Batch isactive values updated successfully',
        updatedCount: updatedBatch.count,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error('Error updating batch isactive:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}