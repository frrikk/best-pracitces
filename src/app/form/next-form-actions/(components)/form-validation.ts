import { z } from "zod";
import { zfd } from "zod-form-data";

export const createFormSchema = zfd.formData({
  id: zfd.text(z.string()),
  name: zfd.text(z.string().min(3)),
  hobby: zfd.text(z.string().min(3)),
});

export type FormSchemaType = z.infer<typeof createFormSchema>;
