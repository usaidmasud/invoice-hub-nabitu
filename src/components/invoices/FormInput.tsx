import { TextField, TextFieldProps } from "@mui/material";

type FormInputProps = Omit<TextFieldProps, "label">;
export default function FormInput({ ...props }: FormInputProps) {
  return <TextField {...props} />;
}
