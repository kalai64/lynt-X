import { PrismaClient } from '../../../../generated/prisma'; // Adjust this path as needed
const prisma = new PrismaClient();
 
export async function GET(request, { params }) {
  try {
    const organizationId = request.headers.get('x-organization-id');
    if (!organizationId) {
      return new Response(JSON.stringify({ error: 'Organization ID is required' }), { status: 400 });
    }
    const parsedOrgId = parseInt(organizationId, 10);
    if (isNaN(parsedOrgId)) {
      return new Response(JSON.stringify({ error: 'Invalid organization ID' }), { status: 400 });
    }
 
    const { image_name: imageNameParam } = await params;
 
    if (!imageNameParam) {
      return new Response(JSON.stringify({ error: 'image_name is required' }), { status: 400 });
    }
 
    // Query the DB to find records where image_name ends with /imageNameParam
    const submissions = await prisma.formSubmission.findMany({
      where: {
        image_name: { endsWith: `/${imageNameParam}` },
        organizationId: parsedOrgId,
      },
      select: {
        batch_name: true,
        image_name: true,
        level: true,
        field_name: true,
        field_value: true,
      },
    });
 
    if (!submissions || submissions.length === 0) {
      return new Response(JSON.stringify({ message: 'No submissions found' }), { status: 404 });
    }
 
    // Group by level
    const levelsMap = new Map();
    let batchName = null;
 
    submissions.forEach(sub => {
      const { level, field_name, field_value, batch_name } = sub;
      batchName = batch_name; // Can assign from any record
      if (!levelsMap.has(level)) {
        levelsMap.set(level, { level, fields: {} });
      }
      levelsMap.get(level).fields[field_name] = field_value;
    });
 
    const levelsArray = Array.from(levelsMap.values());
 
    const response = {
      batch: batchName,
      image: `/uploads/${batchName}/${imageNameParam}`,
      levels: levelsArray,
    };
 
    return new Response(JSON.stringify(response, null, 2), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
 
  } catch (err) {
    console.error('GET error:', err);
    return new Response(JSON.stringify({ error: err.message }, null, 2), { status: 500 });
  }
}
 
 