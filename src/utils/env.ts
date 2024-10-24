import { z } from "zod";
import * as dotenv from 'dotenv';

dotenv.config();
const envSchema = z.object({
    REDIS_URI: z.string().default(''),
    HOST: z.string().default('0.0.0.0'),
    PORT: z.number().default(3000)
})
export const env = envSchema.parse({
    ...process.env,
    PORT: Number(process.env.PORT)
})