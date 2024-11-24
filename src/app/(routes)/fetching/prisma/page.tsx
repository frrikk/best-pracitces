import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { Form } from "@/components/ui/molecules/form";
import { TicketList } from "@/app/(routes)/fetching/prisma/(components)/ticket-list";
import { TicketForm } from "@/app/(routes)/fetching/prisma/(components)/ticket-form";
import { cn } from "@/lib/utils/cn";

const getTickets = async () => await prisma.ticket.findMany();

export default async function PrismaPage() {
  const tickets = await getTickets();

  console.log({ tickets });

  return (
    <div className={cn("flex flex-col gap-8")}>
      <TicketList tickets={tickets} />
      <TicketForm />
    </div>
  );
}
