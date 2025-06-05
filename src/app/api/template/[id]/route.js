import { PrismaClient } from '../../../../generated/prisma';
import { logUserAction } from '../../services/logservice';
const prisma = new PrismaClient();


const parseJsonFields = (item) => {
  const parsedItem = { ...item };
  if (parsedItem.icon) {
    try {
      parsedItem.icon = JSON.parse(parsedItem.icon);
    } catch (error) {
      console.error(`Failed to parse icon for item ID ${parsedItem.id}:`, error);
      parsedItem.icon = null; 
    }
  }
  if (parsedItem.properties) {
    try {
      parsedItem.properties = JSON.parse(parsedItem.properties);
    } catch (error) {
      console.error(`Failed to parse properties for item ID ${parsedItem.id}:`, error);
      parsedItem.properties = null; 
    }
  }

  return parsedItem;
};

export async function GET(request, { params }) {
  try {
    const { id } = await params;
    const templateId = parseInt(id, 10);
 
    if (isNaN(templateId)) {
      return new Response(
        JSON.stringify({ error: 'Invalid ID format. ID must be a number.' }, null, 2),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
 
    const template = await prisma.template.findUnique({
      where: { id: templateId },
      include: {
        templateFields: {
          include: {
            children: true,
          },
        },
      },
    });
 
    if (!template) {
      return new Response(
        JSON.stringify({ error: 'Template not found.' }, null, 2),
        {
          status: 404,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
 
    const transformedTemplate = {
      ...template,
      templateFields: template.templateFields.map((field) => {
        const parsedField = parseJsonFields(field);
        const children = parsedField.children.map(parseJsonFields);
        return {
          ...parsedField,
          children,
        };
      }),
    };
 
    return new Response(JSON.stringify(transformedTemplate, null, 2), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
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

export async function DELETE(request, { params }) {
  const { id } = params;

  if (!id) {
    return new Response(JSON.stringify({ error: 'Template ID is required' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const organizationId = request.headers.get('x-organization-id');
    const userId = request.headers.get('x-user-id');
    const role = request.headers.get('x-role');

    if (!organizationId || !userId || !role) {
      return new Response(
        JSON.stringify({ error: 'Missing required headers: organization-id, user-id, or role' }),
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

    const updated = await prisma.template.update({
      where: { id: parseInt(id) },
      data: { isDelete: true },
    });

    await logUserAction({
      userid: userId,
      organizationid: parsedOrganizationId,
      role,
      action: `Soft-deleted template with ID ${id}`,
    });

    return new Response(
      JSON.stringify({ message: 'Template soft-deleted', data: updated }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Delete error:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to delete template' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } finally {
    await prisma.$disconnect();
  }
}

export async function PUT(request, { params }) {
  try {
    const organizationId = request.headers.get('x-organization-id');
    const role = request.headers.get('x-role');
    const userId = request.headers.get('x-user-id');

    if (!organizationId || !role || !userId) {
      return new Response(JSON.stringify({ error: 'Missing required headers' }), {
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

    const templateId = parseInt(params.id, 10);
    if (isNaN(templateId)) {
      return new Response(JSON.stringify({ error: 'Template ID must be a valid integer' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const body = await request.json();
    const { name, isActive, formData } = body;

    // Update template base info
    const updatedTemplate = await prisma.template.update({
      where: { id: templateId },
      data: {
        name,
        isActive,
        organizationId: parsedOrganizationId,
      },
    });

    // Get current fields and child fields from DB
    const existingFields = await prisma.templateField.findMany({
      where: { templateId },
      include: { children: true },
    });

    const existingFieldIds = existingFields.map(f => f.id);
    const existingChildIds = existingFields.flatMap(f => f.children.map(c => c.id));

    const incomingFieldIds = [];
    const incomingChildIds = [];

    for (const element of formData.formElements) {
      const { id: fieldId, type, icon, label, properties, parentId, children } = element;

      let field;
      if (fieldId) {
        field = await prisma.templateField.update({
          where: { id: fieldId },
          data: {
            type,
            icon: JSON.stringify(icon),
            label,
            properties: JSON.stringify(properties),
            parentId,
          },
        });
        incomingFieldIds.push(fieldId);
      } else {
        field = await prisma.templateField.create({
          data: {
            type,
            icon: JSON.stringify(icon),
            label,
            properties: JSON.stringify(properties),
            parentId,
            templateId,
          },
        });
        incomingFieldIds.push(field.id);
      }

      // Process children if any
      if (children && children.length > 0) {
        for (const child of children) {
          const {
            id: childId,
            type: childType,
            icon: childIcon,
            label: childLabel,
            properties: childProperties,
            parentId: childParentId,
          } = child;

          if (childId) {
            await prisma.templateChild.update({
              where: { id: childId },
              data: {
                type: childType,
                icon: JSON.stringify(childIcon),
                label: childLabel,
                properties: JSON.stringify(childProperties),
                parentId: childParentId,
              },
            });
            incomingChildIds.push(childId);
          } else {
            const createdChild = await prisma.templateChild.create({
              data: {
                type: childType,
                icon: JSON.stringify(childIcon),
                label: childLabel,
                properties: JSON.stringify(childProperties),
                parentId: childParentId,
                templateFieldsId: field.id,
              },
            });
            incomingChildIds.push(createdChild.id);
          }
        }
      }
    }

    // Delete removed children and fields
    const childIdsToDelete = existingChildIds.filter(id => !incomingChildIds.includes(id));
    if (childIdsToDelete.length > 0) {
      await prisma.templateChild.deleteMany({
        where: { id: { in: childIdsToDelete } },
      });
    }

    const fieldIdsToDelete = existingFieldIds.filter(id => !incomingFieldIds.includes(id));
    if (fieldIdsToDelete.length > 0) {
      await prisma.templateField.deleteMany({
        where: { id: { in: fieldIdsToDelete } },
      });
    }

    // Log user action
    await logUserAction({
      userid: userId,
      organizationid: parsedOrganizationId,
      role,
      action: `Updated template with ID ${templateId}`,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: 'Something went wrong', details: error.message }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } finally {
    await prisma.$disconnect();
  }
}
