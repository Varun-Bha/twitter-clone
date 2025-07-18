import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/libs/prismadb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Try to fetch the first user (or any record)
    const user = await prisma.user.findFirst();
    console.log("DB connection successful. First user:", user);
    res.status(200).json({ success: true, user });
  } catch (error: any) {
    console.error("DB connection error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
}
