import { z } from "zod";

const serverEnvSchema = z.object({
  JWT_SECRET: z.string().min(10),
});

export const serverEnv = serverEnvSchema.parse({
  JWT_SECRET: process.env.JWT_SECRET,
});