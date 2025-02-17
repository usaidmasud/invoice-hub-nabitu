import { RequestInvoice } from "@/lib/types/invoice.type";
import dayjs from "dayjs";

export const initialInvoice: RequestInvoice = {
  name: "",
  number: "",
  amount: 0,
  dueDate: dayjs().add(2, "day").toISOString(),
  status: null,
};
