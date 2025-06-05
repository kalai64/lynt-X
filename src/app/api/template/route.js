import { PrismaClient } from '../../../generated/prisma';
import { logUserAction } from '../services/logservice'; // Adjust path if needed

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    const organizationId = request.headers.get('x-organization-id');
    const userId = request.headers.get('x-user-id');
    const role = request.headers.get('x-role');

    // Validate organizationId
    if (!organizationId || !userId || !role) {
      return new Response(
        JSON.stringify({ error: 'Missing required headers: organization-id, user-id, or role' }, null, 2),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    const parsedOrganizationId = parseInt(organizationId, 10);
    if (isNaN(parsedOrganizationId)) {
      return new Response(
        JSON.stringify({ error: 'Organization ID must be a valid integer' }, null, 2),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    const body = await request.json();

    for (const templateData of body) {
      const { name, isActive, formData } = templateData;

      const template = await prisma.template.create({
        data: {
          name,
          isActive,
          organizationId: parsedOrganizationId,
        },
      });

      for (const element of formData.formElements) {
        const { type, icon, label, properties, parentId, children } = element;

        const field = await prisma.templateField.create({
          data: {
            type,
            icon: JSON.stringify(icon),
            label,
            properties: JSON.stringify(properties),
            parentId,
            templateId: template.id,
          },
        });

        if (children && children.length > 0) {
          for (const child of children) {
            const {
              type: childType,
              icon: childIcon,
              label: childLabel,
              properties: childProperties,
              parentId: childParentId,
            } = child;

            await prisma.templateChild.create({
              data: {
                type: childType,
                icon: JSON.stringify(childIcon),
                label: childLabel,
                properties: JSON.stringify(childProperties),
                parentId: childParentId,
                templateFieldsId: field.id,
              },
            });
          }
        }
      }
    }

    // ✅ Log the user action after successful template creation
    await logUserAction({
      userid: userId,
      organizationid: parsedOrganizationId,
      role,
      action: `Created ${body.length} template(s)`,
    });

    return new Response(
      JSON.stringify({ success: true }, null, 2),
      {
        status: 201,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: 'Something went wrong', details: error.message }, null, 2),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function GET(request) {
  const organizationId = request.headers.get('x-organization-id');
  if (!organizationId) {
    return new Response(
      JSON.stringify({ error: 'Organization ID is required' }, null, 2),
      {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
  try {
    const templates = await prisma.template.findMany({
      where: {
        organizationId: parseInt(organizationId),
        isDelete: false,  
      },
      orderBy: {
        id: 'asc',
      },
    });
    return new Response(JSON.stringify(templates), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching templates:', error);
    return new Response(
      JSON.stringify({ error: 'Internal Server Error' }),
      { status: 500 }
    );
  }
}