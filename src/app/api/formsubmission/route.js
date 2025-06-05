import { PrismaClient } from '../../../generated/prisma';
import { logUserAction } from '../services/logservice';
const prisma = new PrismaClient();

export async function GET() {
    try {
        const organizations = await prisma.formSubmission.findMany();
        return new Response(JSON.stringify(organizations), { status: 200 });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}
function parseJsonArrayOrEmpty(value) {
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function pushToJsonArray(existing, newItem) {
  const arr = parseJsonArrayOrEmpty(existing);

  const exists = arr.some(
    (item) => item.userId === newItem.userId && item.templateId === newItem.templateId
  );

  if (!exists) {
    arr.push(newItem);
  }

  return JSON.stringify(arr);
}

export async function POST(request) {
  try {
    const organizationId = request.headers.get('x-organization-id');
    const userId = request.headers.get('x-user-id');
    const role = request.headers.get('x-role');
    if (!organizationId || !userId || !role) {
      return new Response(JSON.stringify({ error: 'Required headers missing' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    const parsedOrganizationId = parseInt(organizationId, 10);
    if (isNaN(parsedOrganizationId)) {
      return new Response(JSON.stringify({ error: 'Organization ID must be a valid integer' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    const body = await request.json();
    const { image_name, batch_name, level, next_level, user_id, fields } = body;
    if (
      !image_name ||
      !batch_name ||
      !level ||
      typeof next_level === 'undefined' ||
      !user_id ||
      !fields ||
      typeof fields !== 'object'
    ) {
      return new Response(JSON.stringify({ error: 'Missing or invalid input.' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }
    const submissions = Object.entries(fields).map(([key, value]) => ({
      image_name,
      batch_name,
      level: String(level),
      user_id,
      organizationId: parsedOrganizationId,
      field_name: key,
      field_value: typeof value === 'object' ? JSON.stringify(value) : String(value),
    }));
    const result = await prisma.$transaction(async (prisma) => {
      const created = await prisma.formSubmission.createMany({ data: submissions });
      const imageCollection = await prisma.imagecollections.findFirst({
        where: {
          batchname: batch_name,
          image: image_name,
          userid: user_id,
          imagestatus: false,
        },
      });
      if (!imageCollection) {
        throw new Error('No matching image collection found');
      }
      const updateData = {};
      updateData.completed = pushToJsonArray(
        imageCollection.completed,
        { userId: user_id, templateId: level }
      );
      if (next_level !== 0) {
        updateData.assigned = pushToJsonArray(
          imageCollection.assigned,
          { userId: user_id, templateId: next_level }
        );
      } else {
        updateData.imagestatus = true;
      }
      await prisma.imagecollections.update({
        where: { id: imageCollection.id },
        data: updateData,
      });
      await logUserAction({
        userid: userId,
        organizationid: parsedOrganizationId,
        role,
        action: `Submitted form for image '${image_name}' in batch '${batch_name}', level ${level} with ${Object.keys(fields).length} field(s)`,
      });
      return created;
    });

    return new Response(
      JSON.stringify({
        message: 'Form submissions created and image collection updated.',
        count: result.count,
      }),
      {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (err) {
    console.error('POST error:', err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  } finally {
    await prisma.$disconnect();
  }
}