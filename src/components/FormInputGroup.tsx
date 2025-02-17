import { FormGroup, Typography } from "@mui/material";
import { ReactNode } from "react";
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
      <Typography
        sx={{
          mb: "12px",
          fontWeight: 600,
          fontSize: 14,
        }}
      >
        {label}
        {required && <span style={{ color: "red", marginLeft: 4 }}>*</span>}
      </Typography>
      {children}
      {errorText && (
        <Typography fontSize={14} mt={0.5} color="error">
          {errorText}
        </Typography>
      )}
    </FormGroup>
  );
}
