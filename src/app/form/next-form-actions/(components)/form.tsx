"use client";

import { Form } from "@/components/ui/molecules/form";
import { createTodo } from "@/app/form/next-form-actions/(components)/actions";
import { useActionState } from "react";
import { FormElement } from "@/components/ui/molecules/form-elements";

export function TodoForm() {
  const [, action, isPending] = useActionState(createTodo, null);

  return (
    <Form action={action}>
      <FormElement.Input
        options={{
          label: "What's your name",
          name: "name",
          placeholder: "What's your name really?",
        }}
      />
      <FormElement.RadioGroup>
        {formElementOptions.map((option) => (
          <FormElement.Radio key={option.value} options={option} />
        ))}
      </FormElement.RadioGroup>

      <FormElement.SubmitButton text="Add" />
    </Form>
  );
}

const formElementOptions = [
  {
    value: "kanskje",
    label: "Kanskje",
  },
  {
    value: "no",
    label: "No",
  },
  {
    value: "yes",
    label: "Yes",
  },
];

/*
 * In order to keep everything on the server, remove "use client".
 * Change action to the server action createTodo.
 * Change remove prevState from the createTodo function.
 * */
