import { cn } from "@/lib/utils/cn";
import { ReactNode } from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: string;
  icon?: ReactNode;
}

function Button({ children, icon, ...props }: ButtonProps) {
  return (
    <button
      className={cn("p-2 text-sky-100 bg-sky-950 font-semibold ", {
        ...props,
      })}
    >
      {children}
      {icon && icon}
    </button>
  );
}

Button.displayName = "Button";

export { Button };
