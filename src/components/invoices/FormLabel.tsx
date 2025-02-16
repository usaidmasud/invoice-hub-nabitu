import { Typography } from "@mui/material";

interface FormLabelProps {
  label: string;
  required?: boolean;
}
export default function FormLabel({ label, required }: FormLabelProps) {
  return (
    <Typography
      sx={{
        mb: 1.5,
        fontWeight: 600,
        fontSize: 14,
      }}
    >
      {label}
      {required && <span style={{ color: "red", marginLeft: 4 }}>*</span>}
    </Typography>
  );
}
