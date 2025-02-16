import dayjs from "dayjs";
import { TStatus } from "./status.type";

export interface Invoice {
  id: number;
  name: string;
  number: string;
  amount: number;
  dueDate: string;
  status: TStatus;
}

export interface RequestInvoice {
  name: string;
  number: string;
  amount: number;
  dueDate: string;
  status: TStatus | null;
}

export const initialInvoice: RequestInvoice = {
  name: "",
  number: "",
  amount: 0,
  dueDate: dayjs().add(2, "day").toISOString(),
  status: null,
};
