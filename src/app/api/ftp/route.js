import { PrismaClient } from '../../../generated/prisma';
const prisma = new PrismaClient();


export async function POST(request) {
    const { host, port, username, password, ftppath, organizationId } = await request.json();

    if (!host || !port || !username || !password || !organizationId) {
        return new Response(JSON.stringify({ error: "All fields are required." }), { status: 400 });
    }

    try {
        const existing = await prisma.ftp.findFirst({
            where: { organizationId: parseInt(organizationId) },
        });

        let result;
        if (existing) {
            result = await prisma.ftp.update({
                where: { id: existing.id },
                data: { host, port: parseInt(port), username, password, ftppath },
            });
        } else {
            result = await prisma.ftp.create({
                data: { host, port: parseInt(port), username, password, ftppath, organizationId: parseInt(organizationId) },
            });
        }

        return new Response(JSON.stringify(result), { status: 200 });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}
