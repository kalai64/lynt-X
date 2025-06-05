import { PrismaClient } from '../../../generated/prisma';
const prisma = new PrismaClient();

export async function GET() {
    try {
        const organizations = await prisma.organization.findMany();
        return new Response(JSON.stringify(organizations), { status: 200 });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}

export async function POST(request) {
    const { name } = await request.json();

    if (!name) {
        return new Response(JSON.stringify({ error: "Organization name is required" }), { status: 400 });
    }

    try {
        const organization = await prisma.organization.create({
            data: { name },
        });
        return new Response(JSON.stringify(organization), { status: 201 });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}