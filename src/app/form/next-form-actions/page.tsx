import { TodoForm } from "./(components)/form";
import Page from "@/components/layout/page/page";
import { API } from "@/utils/api";
import { HTMLAttributes, ReactNode } from "react";
import { FormSchemaType } from "@/app/form/next-form-actions/(components)/form-validation";
import { cn } from "@/utils/cn";

export default async function NextFormActionPage() {
  const data = await API.GET({ url: `${process.env.NEXT_DB_URL}/form-data` });

  return (
    <Page heading="Next.js Form Action">
      <TodoForm />
      <ul className={cn("flex gap-8 flex-wrap mt-10")}>
        {data.map((item: FormSchemaType) => {
          return (
            <Box key={item.id}>
              <p
                className={cn(
                  "text-xl font-med text-slate-500 group-hover:text-slate-800 group-hover:font-medium transition duration-500",
                )}
              >
                {item.name}
              </p>
              <p>{item.hobby}</p>
            </Box>
          );
        })}
      </ul>
    </Page>
  );
}

interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

function Box({ children, ...props }: BoxProps) {
  return (
    <div
      className={cn(
        "bg-slate-50 border border-slate-100 rounded-md p-3 flex w-full lg:w-1/4 flex-col gap-4 group",
      )}
      {...props}
    >
      {children}
    </div>
  );
}
