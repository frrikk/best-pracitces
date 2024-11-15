import { HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

interface PageProps extends HTMLAttributes<HTMLElement> {
  metaTitle?: string;
  heading: string;
}

export default function Page({ children, ...props }: PageProps) {
  return (
    <main className={cn("p-4 lg:p-8 mx-auto max-w-[1400px] h-dvh")} {...props}>
      <h1 className={cn("text-3xl mb-10")}>{props.heading}</h1>
      {children}
    </main>
  );
}
