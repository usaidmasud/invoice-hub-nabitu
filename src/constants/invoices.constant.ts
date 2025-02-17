import { Invoice } from "@/lib/types/invoice.type";
import { generateId } from "@/utils/generateId";
import dayjs from "dayjs";

export const invoicesConstant: Invoice[] = [
  {
    id: generateId(),
    name: "Internet Subscription",
    number: "INV202501",
    dueDate: dayjs("2025-01-13").toISOString(),
    status: "Paid",
    amount: 582901,
  },
  {
    id: generateId(),
    name: "Electricity Bill",
    number: "INV202502",
    dueDate: dayjs("2025-02-04").toISOString(),
    status: "Paid",
    amount: 311909,
  },
  {
    id: generateId(),
    name: "Gym Membership",
    number: "INV202503",
    dueDate: dayjs("2025-02-23").toISOString(),
    status: "Unpaid",
    amount: 425000,
  },
  {
    id: generateId(),
    name: "Phone Bill",
    number: "INV202504",
    dueDate: dayjs("2025-02-23").toISOString(),
    status: "Pending",
    amount: 148891,
  },
];
