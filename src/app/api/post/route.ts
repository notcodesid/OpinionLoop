import QsnModel from "@/app/model/post";
import QsnSchema from "@/app/types/zod";
import dbConnect from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { corsMiddleware } from "@/lib/corsMiddleware";


export async function GET( req : NextRequest, res: NextResponse ) {
  const response = corsMiddleware(req , res);

    await dbConnect();
    try {
        const allQsn = await QsnModel.find({}); 
        return NextResponse.json({
          message: "The route is working perfectly fine",
          data: allQsn
        });
      } catch (error) {
        console.error("Error fetching data:", error);
        return NextResponse.json({
          message: "There was an error processing your request"
        }, { status: 500 });
      }
  }

  export async function POST( req : NextRequest, res: NextResponse){
  const response = corsMiddleware(req , res);
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