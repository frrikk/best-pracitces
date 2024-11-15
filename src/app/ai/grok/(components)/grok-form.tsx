"use client";

import { useActionState } from "react";
import { Form } from "@/components/ui/molecules/form";
import { Label } from "@/components/ui/atoms/label";
import { Input } from "@/components/ui/atoms/input";
import { createPrompt } from "@/app/ai/grok/(server-actions)/actions";

export function GrokForm() {
  const [_, action, isPending] = useActionState(createPrompt, null);

  return (
    <Form action={action}>
      <Label>
        <Input name="prompt" disabled={isPending} />
      </Label>
    </Form>
  );
}
