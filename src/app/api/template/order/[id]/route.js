import { logUserAction } from '@/app/api/services/logservice';
import { PrismaClient } from '../../../../../generated/prisma';
const prisma = new PrismaClient();

export async function PUT(request, { params }) {
  try {
    // --- Extract headers ---
    const organizationId = request.headers.get('x-organization-id');
    const userId = request.headers.get('x-user-id');
    const role = request.headers.get('x-role');

    if (!organizationId || !userId || !role) {
      return new Response(
        JSON.stringify({ error: 'Missing required headers: x-organization-id, x-user-id, x-role' }, null, 2),
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

    const templateId = parseInt(params.id, 10);
    if (isNaN(templateId)) {
      return new Response(
        JSON.stringify({ error: 'Template ID must be a valid integer' }, null, 2),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const body = await request.json();
    const { orderno } = body;

    if (!Number.isInteger(orderno) || orderno <= 0) {
      return new Response(
        JSON.stringify({ error: '`orderno` must be a positive integer' }, null, 2),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const template = await prisma.template.findFirst({
      where: {
        id: templateId,
        organizationId: parsedOrganizationId,
        isDelete: false,
      },
    });

    if (!template) {
      return new Response(
        JSON.stringify({ error: 'Template not found for the given organization' }, null, 2),
        { status: 404, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const duplicateOrder = await prisma.template.findFirst({
      where: {
        organizationId: parsedOrganizationId,
        isDelete: false,
        orderno: orderno,
        NOT: { id: templateId },
      },
    });

    if (duplicateOrder) {
      return new Response(
        JSON.stringify({ error: `Order number ${orderno} is already used by another template` }, null, 2),
        { status: 409, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const maxOrder = await prisma.template.aggregate({
      where: {
        organizationId: parsedOrganizationId,
        isDelete: false,
      },
      _max: { orderno: true },
    });

    const currentMax = maxOrder._max.orderno || 0;

    if (orderno > currentMax + 1) {
      return new Response(
        JSON.stringify({
          error: `Cannot assign order number ${orderno}. The next available order number is ${currentMax + 1}`,
        }, null, 2),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const updatedTemplate = await prisma.template.update({
      where: { id: templateId },
      data: { orderno },
    });

    // --- Log user action ---
    await logUserAction({
      userid: userId,
      organizationid: parsedOrganizationId,
      role,
      action: `Updated order number of template ID ${templateId} to ${orderno}`,
    });

    return new Response(
      JSON.stringify({ success: true, data: updatedTemplate }, null, 2),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: 'Internal Server Error', details: error.message }, null, 2),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  } finally {
    await prisma.$disconnect();
  }
}