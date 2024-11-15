import { default as NextForm } from "next/form";
import { HTMLAttributes } from "react";
import { cn } from "@/utils/cn";

interface FormProps extends HTMLAttributes<HTMLFormElement> {
  action: (formData: FormData) => void | Promise<void>;
  // action: NonNullable<
  //   string | ((formData: FormData) => void | Promise<void>) | undefined
  // >;
}

const Form = ({ action, ...props }: FormProps) => {
  const { children } = props;
  return (
    <NextForm
      className={cn("flex flex-col gap-4 w-[300px]")}
      action={action}
      {...props}
    >
      {children}
    </NextForm>
  );
};

Form.displayName = "Form";

export { Form };
