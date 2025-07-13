import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
import schema from "../shema";

export function GET(request: NextRequest, {params} : {params: {id: number}}) {
    if (params.id > 10){

        return NextResponse.json({error: 'User not found'}, {status:404})
    }

    return NextResponse.json({id: 1, name:'Vieira'})
}




export async function PUT(request: NextRequest, {params} :{params: {id: number}}){
   const body = await request.json();
   const validation = schema.safeParse(body);

   if (!validation.success)
    return NextResponse.json(validation.error.message, {status: 500});

   if (params.id > 10) 
    return NextResponse.json({error:'User does not exist'}, {status: 404});

   return NextResponse.json({id:1, name: body.name});
   
}

export function DELETE(request: NextRequest, {params} : {params: {id: number}}){
    if (params.id > 10)
        return NextResponse.json({error:'User does not exist'}, {status: 404});
    return NextResponse.json({});
}