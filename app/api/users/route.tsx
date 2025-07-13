import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
import schema from "./shema";
import prisma from "../../../prisma/client"

export async function GET(request: NextRequest) {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
}


export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body)

    if (!validation.success)
        return NextResponse.json({error:validation.error.flatten()}, { status: 500 });

    const user = await prisma.user.findUnique({ where: { email: body.email } })

    if (user) {
        return NextResponse.json({ error: 'User already existes' }, { status: 400 });
    }

    const newUser =await prisma.user.create({
        data: {
            email: body.email,
            name: body.name

        }
    })
    return NextResponse.json(newUser, { status: 201 });

}

