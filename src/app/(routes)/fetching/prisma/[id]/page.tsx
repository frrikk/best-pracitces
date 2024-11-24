import Page from "@/components/layout/page/page";
import { prisma } from "@/lib/prisma";
import { BackButton } from "@/components/ui/molecules/back-button/back-button";

const getTicket = async (id: string) => {
  return prisma.ticket.findUnique({ where: { id } });
};

export default async function TicketPage({
  params,
}: {
  params: { id: string };
}) {
  const data = await getTicket(params.id);

  if (!data) return null;

  return (
    <Page heading={data.title}>
      <BackButton />
      {data.content}
    </Page>
  );
}
