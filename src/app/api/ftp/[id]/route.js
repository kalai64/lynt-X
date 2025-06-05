import { PrismaClient } from '../../../../generated/prisma';
const prisma = new PrismaClient();

export async function GET(request, { params }) {
    //const { organizationId } = params;
    const organizationId = await params.id;

    if (!organizationId) {
        return new Response(JSON.stringify({ error: "organizationId param is required." }), { status: 400 });
    }

    try {
        const ftpRecord = await prisma.ftp.findFirst({
            where: { organizationId: parseInt(organizationId) },
        });

        if (!ftpRecord) {
            return new Response(JSON.stringify({ message: "FTP record not found." }), { status: 404 });
        }

        return new Response(JSON.stringify(ftpRecord), { status: 200 });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}
