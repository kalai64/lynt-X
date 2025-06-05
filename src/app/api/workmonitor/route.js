import { NextResponse } from 'next/server';
import { PrismaClient } from '../../../generated/prisma';
import { logUserAction } from '../services/logservice'; 

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const organizationId = request.headers.get('x-organization-id');
    const userId = request.headers.get('x-user-id');
    const role = request.headers.get('x-role');

    // Validate headers
    if (!organizationId || !userId || !role) {
      return new Response(
        JSON.stringify({ error: 'Organization ID, User ID, and Role are required in headers' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const parsedOrganizationId = parseInt(organizationId, 10);
    const parsedUserId = userId; // Keep as string

    if (isNaN(parsedOrganizationId)) {
      return new Response(
        JSON.stringify({ error: 'Organization ID must be a valid integer' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const body = await request.json();
    const { previoususer, assignuser, image, batchname } = body;

    if (!previoususer || !assignuser || !image || !batchname) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields in payload' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const row = await prisma.imagecollections.findFirst({
      where: {
        batchname,
        image,
        organizationId: parsedOrganizationId,
      },
    });

    if (!row) {
      return new Response(
        JSON.stringify({ error: 'Matching row not found' }),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    if (row.imagestatus === true) {
      return new Response(
        JSON.stringify({ error: 'This image has completed all the templates' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const isAssignedElsewhere = await prisma.imagecollections.findFirst({
      where: {
        organizationId: parsedOrganizationId,
        userid: assignuser,
        imagestatus: false,
        NOT: {
          id: row.id,
        },
      },
    });

    if (isAssignedElsewhere) {
      return new Response(
        JSON.stringify({ error: 'This user has already been assigned to another image' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    let assignedArray = [];
    if (row.assigned) {
      try {
        assignedArray = JSON.parse(row.assigned);
        let lastTemplateId = 0;
        if (assignedArray.length > 0) {
          const lastEntry = assignedArray[assignedArray.length - 1];
          lastTemplateId = lastEntry.templateId || 0;
        }
        if (assignedArray.length > 0) {
          assignedArray[assignedArray.length - 1] = {
            userid: assignuser,
            templateId: lastTemplateId,
          };
        } else {
          assignedArray.push({
            userid: assignuser,
            templateId: 0,
          });
        }
      } catch (err) {
        return new Response(
          JSON.stringify({ error: 'Invalid JSON in assigned column', details: err.message }),
          { status: 500, headers: { 'Content-Type': 'application/json' } }
        );
      }
    }

    const updatedRow = await prisma.imagecollections.update({
      where: { id: row.id },
      data: {
        assigned: JSON.stringify(assignedArray),
        userid: assignuser,
      },
    });

    // 🔵 Log the user action
    await logUserAction({
      userid: parsedUserId,
      organizationid: parsedOrganizationId,
      role,
      action: `Reassigned image from "${previoususer}" to "${assignuser}"`,
    });

    return new Response(
      JSON.stringify({ success: true, data: updatedRow }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: 'Something went wrong', details: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function GET(request) {
  try {
    const organizationId = request.headers.get('x-organization-id');

    if (!organizationId) {
      return NextResponse.json({ error: 'Organization ID is required' }, { status: 400 });
    }

    const imageCollections = await prisma.imagecollections.findMany({
      where: {
        organizationId: Number(organizationId),
        assigned: {
          not: null, 
        },
      },
      select: {
        id: true,
        filename: true,
        batchname: true,
        image: true,
        status: true,
        created_date: true,
        uniqueid: true,
        organizationId: true,
        assigned: true,
        completed: true,
        imagestatus: true,
        userid: true,
      },
    });

    const userMap = {};

    for (const img of imageCollections) {
      const assignedRaw = Array.isArray(img.assigned)
        ? img.assigned
        : typeof img.assigned === 'string'
        ? JSON.parse(img.assigned)
        : [];

      const completedRaw = Array.isArray(img.completed)
        ? img.completed
        : typeof img.completed === 'string'
        ? JSON.parse(img.completed)
        : [];

      const allUsers = new Set([
        ...assignedRaw.map((a) => a.userid || a.userId),
        ...completedRaw.map((c) => c.userid || c.userId),
      ]);

      for (const userId of allUsers) {
        if (!userId) continue;

        if (!userMap[userId]) {
          userMap[userId] = {
            imageMap: new Map(),
            assignedTemplatesSet: new Set(),
            completedTemplatesSet: new Set(),
          };
        }

        const assigned = assignedRaw.filter((a) => (a.userid || a.userId) === userId);
        const completed = completedRaw.filter((c) => (c.userid || c.userId) === userId);

        const assignedtemplate = assigned.map((a) => a.templateId);
        const completedtemplate = completed.map((c) => c.templateId);

        const imageCopy = {
          ...img,
          assigned,
          completed,
          assignedtemplate,
          completedtemplate,
        };

        assignedtemplate.forEach((tid) => userMap[userId].assignedTemplatesSet.add(tid));
        completedtemplate.forEach((tid) => userMap[userId].completedTemplatesSet.add(tid));

        userMap[userId].imageMap.set(img.id, imageCopy);
      }
    }

    const result = Object.entries(userMap).map(([userid, { imageMap }]) => {
      const assignedTemplateCounts = {};
      const completedTemplateCounts = {};

      for (const img of imageMap.values()) {
        for (const tid of img.assignedtemplate || []) {
          const key = `assignedtemplateId_${tid}`;
          assignedTemplateCounts[key] = (assignedTemplateCounts[key] || 0) + 1;
        }

        for (const tid of img.completedtemplate || []) {
          const key = `completedtemplateId_${tid}`;
          completedTemplateCounts[key] = (completedTemplateCounts[key] || 0) + 1;
        }
      }

      return {
        userid,
        assignedcount: Array.from(imageMap.values()).reduce(
          (acc, img) => acc + (img.assignedtemplate?.length || 0),
          0
        ),
        completedcount: Array.from(imageMap.values()).reduce(
          (acc, img) => acc + (img.completedtemplate?.length || 0),
          0
        ),
        ...assignedTemplateCounts,
        ...completedTemplateCounts,
        imagecollections: Array.from(imageMap.values()),
      };
    });

    return NextResponse.json(result, { status: 200 });
  } catch (err) {
    console.error('Error fetching image collections:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
