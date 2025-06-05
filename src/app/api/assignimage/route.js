import { PrismaClient } from '../../../generated/prisma';
const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const organizationId = request.headers.get('x-organization-id');
    if (!organizationId) {
      return new Response(
        JSON.stringify({ error: 'Organization ID is required in headers' }, null, 2),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const parsedOrganizationId = parseInt(organizationId, 10);
    if (isNaN(parsedOrganizationId)) {
      return new Response(
        JSON.stringify({ error: 'Organization ID must be a valid integer' }, null, 2),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const body = await request.json();
    const { userId, templateId } = body;

    if (!userId) {
      return new Response(
        JSON.stringify({ error: 'UserId is required' }, null, 2),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (!templateId || isNaN(parseInt(templateId))) {
      return new Response(
        JSON.stringify({ error: 'Valid numeric templateId is required' }, null, 2),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const parsedTemplateId = parseInt(templateId, 10);

    // 🔍 Check if the user already has an unprocessed image
    const existing = await prisma.imagecollections.findFirst({
      where: {
        userid: userId,
        imagestatus: false,
        organizationId: parsedOrganizationId,
        isactive: true
      },
    });

    if (existing) {
      return new Response(
        JSON.stringify({ message: 'User already has an assigned image' }, null, 2),
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 🔍 Find eligible image collection
    const imageCollection = await prisma.imagecollections.findFirst({
      where: {
        imagestatus: false,
        organizationId: parsedOrganizationId,
        isactive: true,
        OR: [
          { userid: null },
          { userid: userId }
        ]
      },
      orderBy: { id: 'asc' },
    });

    if (!imageCollection) {
      return new Response(
        JSON.stringify({ error: 'No eligible image collection found' }, null, 2),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    let assignedArray = [];

    if (imageCollection.assigned) {
      try {
        assignedArray = JSON.parse(imageCollection.assigned);
        if (!Array.isArray(assignedArray)) assignedArray = [];
      } catch {
        assignedArray = []; // If invalid JSON, reset to empty array
      }
    }

    const alreadyAssigned = assignedArray.some(
      (entry) => entry.userid === userId && entry.templateId === parsedTemplateId
    );

    if (!alreadyAssigned) {
      assignedArray.push({ userid: userId, templateId: parsedTemplateId });
    }

    const updateData = {
      assigned: JSON.stringify(assignedArray),
    };

    if (imageCollection.userid === null) {
      updateData.userid = userId;
    }

    const updated = await prisma.imagecollections.update({
      where: { id: imageCollection.id },
      data: updateData,
    });

    return new Response(
      JSON.stringify({ success: true, data: updated }, null, 2),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: 'Something went wrong', details: error.message }, null, 2),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  } finally {
    await prisma.$disconnect();
  }
}
