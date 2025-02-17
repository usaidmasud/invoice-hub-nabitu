import { TStatus } from "./status.type";

export interface Invoice {
  id: string;
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
