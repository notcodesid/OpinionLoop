import { z } from 'zod';

const QsnSchema = z.object({
  qsn: z.string().min(2).max(400),
});

export default QsnSchema;