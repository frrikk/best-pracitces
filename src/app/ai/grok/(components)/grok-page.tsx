import Page from "@/components/layout/page/page";
import { GrokForm } from "@/app/ai/grok/(components)/grok-form";
import { cn } from "@/utils/cn";

async function getGrokData() {
  const response = await fetch("http://localhost:4000/response");
  return await response.json();
}

export async function GrokPage() {
  const data = await getGrokData();

  console.log("(utils) grok page", data);

  return (
    <Page heading="Grok Form">
      <ul className={cn("flex flex-col gap-4")}>
        {data.map((i: any) => {
          return (
            <li tabIndex={0} key={i.id} className={cn("border rounded-lg p-2")}>
              {i.message}
            </li>
          );
        })}
      </ul>
      <GrokForm />
    </Page>
  );
}
