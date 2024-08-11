import z from "zod"

const QsnSchema = z.object({
    Question: z.string().min(2 , "Question atleast contains 2 words")
  });

  export default QsnSchema;
  