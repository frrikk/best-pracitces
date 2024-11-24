"use server";

import { mutate } from "@/lib/utils/api";
import { revalidatePath } from "next/cache";

/**
 * The function takes in prevState and formData for mutation with React's useActionState hook.
 * This function only runs on the server
 * @param _prevState
 * @param formData
 */

export async function createTodo(_prevState: unknown, formData: FormData) {
  const { name, hobby } = Object.fromEntries(formData);

  await mutate({
    url: process.env.NEXT_DB_URL + "/form-data",
    data: { name, hobby },
  });

  revalidatePath("/form");
}
