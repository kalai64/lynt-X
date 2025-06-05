import { PrismaClient } from '../../../../generated/prisma';
import { logUserAction } from '../../services/logservice';
const prisma = new PrismaClient();
 
export async function GET(request, { params }) {
    const { id } = await params;
 
    try {
        const user = await prisma.user.findUnique({
            where: { id },
        });
 
        if (!user) {
            return new Response(JSON.stringify({ error: 'User not found' }), { status: 404 });
        }

        return new Response(JSON.stringify(user), { status: 200 });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}

export async function PATCH(request, { params }) {
  const { id } = params;
  if (!id) {
    console.error('No user ID found in params');
    return new Response(JSON.stringify({ error: 'User ID is required' }), { status: 400 });
  }

  const userId = request.headers.get('x-user-id');
  const role = request.headers.get('x-role');
  const organizationId = request.headers.get('x-organization-id');

  if (!userId || !role || !organizationId) {
    return new Response(
      JSON.stringify({ error: 'Missing required headers: x-user-id, x-role, x-organization-id' }),
      { status: 400 }
    );
  }

  const parsedOrganizationId = parseInt(organizationId, 10);
  if (isNaN(parsedOrganizationId)) {
    return new Response(
      JSON.stringify({ error: 'Organization ID must be a valid integer' }),
      { status: 400 }
    );
  }

  const body = await request.json();

  try {
    const existingUser = await prisma.user.findUnique({
      where: { id },
      select: { full_data: true },
    });

    const existingFullData = existingUser?.full_data || {};

    const updatedFullData = {
      ...existingFullData,
      ...(body.fullname && { fullName: body.fullname }),
      ...(body.username && { username: body.username }),
    };

    const updatedUser = await prisma.user.update({
      where: { id },
      data: {
        ...(body.fullname && { fullname: body.fullname }),
        ...(body.username && { username: body.username }),
        ...(body.designation && { designation: body.designation }),
        ...(body.tl && { tl: body.tl }),
        ...(body.am && { am: body.am }),
        ...(body.manager && { manager: body.manager }),
        ...(body.shift && { shift: body.shift }),
        ...(body.datapopulation && { datapopulation: body.datapopulation }),
        ...(body.role && { role: body.role }),
        full_data: updatedFullData,
      },
    });

    // --- Log user action ---
    await logUserAction({
      userid: userId,
      organizationid: parsedOrganizationId,
      role,
      action: `Updated user profile with ID ${id}`,
    });

    return new Response(JSON.stringify(updatedUser), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}