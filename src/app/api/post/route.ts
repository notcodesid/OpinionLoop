import QsnModel from "@/app/model/post";
import QsnSchema from "@/app/types/zod";
import dbConnect from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
    await dbConnect();
    return Response.json({ 
        message : "The route is working perfectly fine"
     })
  }

  export async function POST( req: NextRequest){
    await dbConnect();

  try {
    const body = await req.json();
    const parseResult = QsnSchema.safeParse(body);

    if (!parseResult.success) {
      return NextResponse.json({ error: "Invalid request data" }, { status: 400 });
    }

    const { qsn }:any = parseResult.data;
    await QsnModel.create({ qsn });

    return NextResponse.json({ message: "Question posted successfully" }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
  }