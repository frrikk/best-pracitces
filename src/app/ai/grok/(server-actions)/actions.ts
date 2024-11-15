"use server";

import { completion } from "@/app/ai/grok/(utils)/openai";
import { revalidatePath } from "next/cache";

export async function createPrompt(previousState: any, formData: FormData) {
  const { prompt } = Object.fromEntries(formData);
  console.log(formData);

  await completion({ input: prompt as string });

  revalidatePath("/ai/grok");
}
