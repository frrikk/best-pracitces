"use client";

import Form from "next/form";
import { useActionState } from "react";
import { createTicketAction } from "@/app/(routes)/fetching/prisma/(components)/form-action";
import { FormElement } from "@/components/ui/molecules/form-elements";

const TicketForm = () => {
  const [, action] = useActionState(createTicketAction, null);

  // add input fields to match the prisma schema

  return (
    <Form action={action}>
      <FormElement.SubmitButton text="Create ticket" />
    </Form>
  );
};

export { TicketForm };
