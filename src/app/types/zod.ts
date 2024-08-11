import { z } from 'zod';

const QsnSchema = z.object({
  qsn: z.string(),
});

export default QsnSchema;