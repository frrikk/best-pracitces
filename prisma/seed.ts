import { z } from "zod";
import { prisma } from "@/lib/prisma";

const TicketModel = z.object({
  title: z.string(),
  content: z.string(),
  status: z.enum(["OPEN", "CLOSED", "IN_PROGRESS"]),
});

type TicketModel = z.infer<typeof TicketModel>;

/**
 * This script seeds the database with initial data using Prisma.
 *
 * Steps:
 * 1. Define the data model using Zod for validation.
 * 2. Create an array of data objects to seed the database.
 * 3. Use Prisma Client to interact with the database.
 * 4. Delete existing data in the target table.
 * 5. Insert the new data into the table.
 * 6. Log the time taken for the seeding process.
 */

const tickets: TicketModel[] = [
  {
    title: "First ticket",
    content: "This is the first ticket from the database",
    status: "OPEN",
  },
  {
    title: "Second ticket",
    content: "This is the second ticket from the database",
    status: "IN_PROGRESS",
  },
  {
    title: "Third ticket",
    content: "This is the third ticket from the database",
    status: "CLOSED",
  },
];

const seed = async () => {
  const t0 = performance.now();
  console.log(`Seeding database started`);

  await prisma.ticket.deleteMany();
  await prisma.ticket.createMany({ data: tickets });

  const t1 = performance.now();
  console.log(`Seeding completed in ${t1 - t0}ms`);
};

void seed();
