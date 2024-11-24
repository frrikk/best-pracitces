"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

const createTicketAction = async (_prevState: unknown, formData: FormData) => {
  const { value } = Object.fromEntries(formData);

  await prisma.ticket.create({
    data: {
      content: value as string,
    },
  });

  revalidatePath("/fetching/prisma");
};

export { createTicketAction };
