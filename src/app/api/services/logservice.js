// services/userlogService.js
import { PrismaClient } from '../../../generated/prisma';
const prisma = new PrismaClient();
export const logUserAction = async ({ userid, organizationid, role, action }) => {
  try {
    await prisma.userLog.create({
      data: {
        userid,
        organizationid,
        role,
        actiondate: new Date(), 
        action,
      },
    });
  } catch (error) {
    console.error('Logging error:', error);
  }
};
