/* eslint-disable @typescript-eslint/no-explicit-any */
import { DatePicker, DatePickerProps } from "@mui/x-date-pickers";
import dayjs from "dayjs";

interface FormDateProps
  extends Omit<DatePickerProps<any>, "value" | "onChange"> {
  value?: string | null;
  onChange?: (date: string | null) => void;
  required?: boolean;
}

export default function FormDate({ value, onChange, ...props }: FormDateProps) {
  return (
    <DatePicker
      format="DD/MM/YYYY"
      value={value ? dayjs(value) : null}
      onChange={(date) => onChange?.(date ? date.format("YYYY-MM-DD") : null)}
      {...props}
    />
  );
}
