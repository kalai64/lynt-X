import { logUserAction } from '@/app/api/services/logservice';
import { PrismaClient } from '../../../../../generated/prisma';
const prisma = new PrismaClient();

export async function PUT(request, { params }) {
  try {
    const organizationId = request.headers.get('x-organization-id');
    const userId = request.headers.get('x-user-id');
    const role = request.headers.get('x-role');

    if (!organizationId || !userId || !role) {
      return new Response(
        JSON.stringify({ error: 'Missing required headers: x-user-id, x-role, x-organization-id' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const parsedOrganizationId = parseInt(organizationId, 10);
    if (isNaN(parsedOrganizationId)) {
      return new Response(
        JSON.stringify({ error: 'Organization ID must be a valid integer' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const templateId = parseInt(params.id, 10);
    if (isNaN(templateId)) {
      return new Response(
        JSON.stringify({ error: 'Template ID must be a valid integer' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const body = await request.json();
    const { client } = body;
    if (typeof client !== 'boolean') {
      return new Response(
        JSON.stringify({ error: '`client` must be a boolean (true or false)' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const existingTemplate = await prisma.template.findFirst({
      where: {
        id: templateId,
        organizationId: parsedOrganizationId,
        isDelete: false,
      },
    });

    if (!existingTemplate) {
      return new Response(
        JSON.stringify({ error: 'Template not found for the given organization' }),
        {
          status: 404,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }

    const updatedTemplate = await prisma.template.update({
      where: { id: templateId },
      data: { client },
    });

    await logUserAction({
      userid: userId,
      organizationid: parsedOrganizationId,
      role,
      action: `Updated 'client' field of template ID ${templateId} to ${client}`,
    });

    return new Response(
      JSON.stringify({ success: true, data: updatedTemplate }, null, 2),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: 'Something went wrong', details: error.message }, null, 2),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } finally {
    await prisma.$disconnect();
  }
}
