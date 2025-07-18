import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from 'bcrypt'

import prisma from "@/libs/prismadb"

export default async function handler(
    req:NextApiRequest,
    res: NextApiResponse
) {
    console.log("Register API called", req.method);
    if(req.method !== 'POST'){
        return res.status(405).end();
    }

    try {
        // Lowercase email for consistency
        const email = req.body.email?.toLowerCase();
        const { username, name, password } = req.body;

        console.log("Registration attempt:", { email, username, name, password });

        if (!email || !username || !name || !password) {
            console.log("Missing required fields");
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await prisma.user.create({
            data: {
                email,
                username,
                name,
                hashedPassword
            }
        });

        console.log("User created successfully:", user);

        return res.status(200).json(user); 
    } catch (error: any) {
        console.error("Registration error:", error);
        return res.status(500).json({ error: error.message || 'Registration failed' });
    }
}