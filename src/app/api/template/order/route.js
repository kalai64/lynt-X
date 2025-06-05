import { PrismaClient } from '../../../../generated/prisma';
const prisma = new PrismaClient();

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
        isActive: true ,
        client: true, // Only templates where client is true
      },
      orderBy: {
        orderno: 'asc', // Sort by orderno ascending
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
