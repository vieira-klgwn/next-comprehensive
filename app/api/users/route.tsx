import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
import schema from "./shema";

export function GET( request : NextRequest){
    return NextResponse.json([
        {id : 1, name : "Vieira"},
        {id:2, name : "Raic"}
    ])
}


export async function POST (request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body)
    if (!validation.success)
        return NextResponse.json(validation.error.message,{status:500});
    return NextResponse.json({id: 1, name: body.name},{status:201});

}

