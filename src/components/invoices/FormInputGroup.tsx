import { FormGroup, Typography } from "@mui/material";
import { ReactNode } from "react";
import FormLabel from "./FormLabel";

interface FormInputGroupProps {
  label: string;
  required?: boolean;
  errorText?: string;
  children: ReactNode;
}
export default function FormInputGroup({
  label,
  errorText,
  required,
  children,
}: FormInputGroupProps) {
  return (
    <FormGroup sx={{ mb: label ? "29px" : 0 }}>
      <FormLabel label={label} required={required} />
      {children}
      {errorText && <Typography color="error">{errorText}</Typography>}
    </FormGroup>
  );
}
