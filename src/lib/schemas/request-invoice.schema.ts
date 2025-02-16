import * as z from "zod";
import { TStatus } from "../types/status.type";

export const requestInvoiceSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  number: z.string().min(1, { message: "Number is required" }),
  amount: z
    .number({
      required_error: "Amount is required",
      invalid_type_error: "Amount must be a number",
    })
    .min(0, { message: "Amount must be at least 0" }),
  dueDate: z.string().min(1, { message: "Due Date is required" }),
  status: z
    .custom<TStatus>()
    .refine((value) => value !== undefined && value !== null, {
      message: "Status is required",
    }),
});
