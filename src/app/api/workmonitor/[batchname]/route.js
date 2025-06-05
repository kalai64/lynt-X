import { PrismaClient } from '../../../../generated/prisma';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET(request, { params }) {
  try {
    const batchname = await params.batchname;
    const organizationId = request.headers.get('x-organization-id');

    if (!batchname) {
      return NextResponse.json({ error: 'Batch name is required' }, { status: 400 });
    }

    if (!organizationId) {
      return NextResponse.json({ error: 'Organization ID is required' }, { status: 400 });
    }

    const imageCollections = await prisma.imagecollections.findMany({
      where: {
        batchname: batchname,
        organizationId: Number(organizationId),
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
