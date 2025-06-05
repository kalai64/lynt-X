import { PrismaClient } from '../../../../generated/prisma';
const prisma = new PrismaClient();
 
export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
 
    if (!userId) {
        return new Response(JSON.stringify({ error: "User ID is required" }), { status: 400 });
    }
 
    try {
        const currentUser = await prisma.user.findUnique({ where: { id: userId } });
 
        if (!currentUser) {
            return new Response(JSON.stringify({ error: "User not found" }), { status: 404 });
        }
 
        if (currentUser.role === "admin" && currentUser.organizationId) {
            const users = await prisma.user.findMany({
                where: {
                    organizationId: currentUser.organizationId,
                    role: { not: 'superadmin' },
                    id: { not: currentUser.id }
                }
            });
            return new Response(JSON.stringify(users), { status: 200 });
        } else {
            return new Response(
                JSON.stringify({ error: "Access denied. Not an admin or no organization assigned." }),
                { status: 403 }
            );
        }
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}