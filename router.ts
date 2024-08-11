import dbConnect from "@/lib/db";
import QsnModel from "./src/app/model/post";
import  QsnSchema  from "./src/app/types/zod"; // 
import type { NextApiRequest, NextApiResponse } from "next";

// Define a response type
interface ResponseData {
  message?: string;
  error?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  await dbConnect();

  const { method } = req;

  switch (method) {
    case "GET":
      try {
        res.status(200).json({
          message: "GET route working properly",
        });
      } catch (error) {
        console.error("Error in GET:", error);
        res.status(500).json({
          error: "Server error in GET route",
        });
      }
      break;

    case "POST":
      try {
        // Parse and validate the request body using Zod
        const parseResult = QsnSchema.safeParse(req.body);

        if (!parseResult.success) {
          return res.status(400).json({
            error: "Invalid request data",
          });
        }

        const { question }:any = parseResult.data || "";

        // Create a new document in the database using the model
        const newQsn = await QsnModel.create({ question });

        res.status(201).json({
          message: "Question created successfully",
        });
      } catch (error) {
        console.error("Error in POST:", error);
        res.status(500).json({
          error: "Server error in POST route",
        });
      }
      break;

    default:
      res.setHeader("Allow", ["GET", "POST"]);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
