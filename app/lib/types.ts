import { z } from 'zod';
import { createInsertSchema } from 'drizzle-zod';

import { usersTable } from '../db/schema';

export const PostSchema = createInsertSchema(usersTable, {
  email: z
    .string({
      required_error: 'required field',
      invalid_type_error: 'Title is required',
    })
    .trim()
    .min(3, { message: 'Title is too short' })
    .max(100, { message: 'Title is too long' }),})