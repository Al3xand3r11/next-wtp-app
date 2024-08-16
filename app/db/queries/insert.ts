'use server'

import { PostSchema } from "@/app/lib/types";
import { db } from ".."
import { usersTable } from "../schema"


export async function createPost (data: FormData) {

    const newPost = {
        email: data.get('user_email') as string,
      };
    
      const result = PostSchema.safeParse(newPost);
      if (!result.success) {
        return {
          error: 'Invalid data',
        };
      }

    await db.insert(usersTable).values(result.data)
}