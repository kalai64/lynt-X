import { PrismaClient } from '../../../../generated/prisma';
const prisma = new PrismaClient();
import ftpClient from "basic-ftp";

export async function POST(request) {
    const { host, port, username, password } = await request.json();

    const client = new ftpClient.Client();
    client.ftp.verbose = false;

    try {
        await client.access({
            host,
            port: parseInt(port),
            user: username,
            password,
            secure: false,
            passive: true,
        });

        await client.close();
        return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ success: false, error: error.message }), { status: 200 });
    }
}
