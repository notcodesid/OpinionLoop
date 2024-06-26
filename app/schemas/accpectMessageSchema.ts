import { z} from 'zod';

export const accpectMsgSchema = z.object({
    accpectMessages : z.boolean()
})