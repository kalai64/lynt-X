import { PrismaClient } from '../../../../generated/prisma';
const prisma = new PrismaClient();

export async function GET(request, { params }) {
  try {
    const userId = await params.id;
    const orgIdHeader = request.headers.get('x-organization-id');

    if (!orgIdHeader || isNaN(parseInt(orgIdHeader))) {
      return new Response(
        JSON.stringify({ error: 'Valid numeric x-organization-id header is required' }, null, 2),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const parsedOrgId = parseInt(orgIdHeader, 10);

    const results = await prisma.imagecollections.findMany({
      where: {
        imagestatus: false,
        userid: userId,
        organizationId: parsedOrgId,
        isactive: true,
      },
      orderBy: { id: 'asc' },
      select: {
        id: true,
        batchname: true,
        image: true,
        assigned: true,
        completed: true,
      },
    });

    const data = results.map(row => {
      let assignedArray = [];
      let completedArray = [];

      try {
        if (row.assigned) {
          assignedArray = JSON.parse(row.assigned);
          if (!Array.isArray(assignedArray)) assignedArray = [];
        }
      } catch (e) {
        assignedArray = [];
      }

      try {
        if (row.completed) {
          const parsedCompleted = JSON.parse(row.completed);
          if (Array.isArray(parsedCompleted)) {
            completedArray = parsedCompleted.map(entry => entry.templateId).filter(id => typeof id === 'number');
          }
        }
      } catch (e) {
        completedArray = [];
      }

      return {
        id: row.id,
        batch : row.batchname,
        image: row.image,
        assigned: assignedArray,
        assignedLast: assignedArray.length > 0 ? assignedArray[assignedArray.length - 1] : null,
        completed: completedArray,  // simplified to [32, 33]
      };
    });

    return new Response(
      JSON.stringify({ success: true, data }, null, 2),
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
