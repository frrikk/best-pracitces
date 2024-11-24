import { Ticket } from "@prisma/client";
import Link from "next/link";

interface TicketListProps {
  tickets: Ticket[];
}

const TicketList = ({ tickets }: TicketListProps) => {
  return (
    <ul>
      {tickets.map((ticket) => (
        <li key={ticket.id}>
          <Link href={`prisma/${ticket.id}`}>{ticket.title}</Link>
        </li>
      ))}
    </ul>
  );
};

TicketList.displayName = "TicketList";

export { TicketList };
