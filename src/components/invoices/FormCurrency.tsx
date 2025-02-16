import { Box, TextField } from "@mui/material";
import { NumericFormat } from "react-number-format";

interface FormCurrencyProps {
  label: string;
  error?: boolean;
  placeholder?: string;
  value: number | string;
  onChange: (value: number | undefined) => void;
}
export default function FormCurrency({
  value,
  placeholder,
  error,
  onChange,
}: FormCurrencyProps) {
  return (
    <NumericFormat
      value={value}
      onValueChange={(values) => {
        onChange(values.floatValue);
      }}
      thousandSeparator=","
      decimalSeparator="."
      customInput={TextField}
      sx={{
        overflow: "hidden",
        p: 0,
        height: "55px",
        "& .MuiInputBase-root": {
          display: "flex",
          alignItems: "center",
          height: "100%",
        },
        "& .MuiOutlinedInput-root": {
          padding: 0,
        },
        "& input": {
          paddingLeft: "27px", // Menambahkan margin kiri saat mengetik
        },
      }}
      error={error}
      placeholder={placeholder}
      slotProps={{
        input: {
          startAdornment: (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#64748B",
                height: "100%",
                bgcolor: "rgba(217, 217, 217, 0.4)",
                px: "32px",
                fontSize: 16,
                fontWeight: 400,
                borderTopLeftRadius: "4px",
                borderBottomLeftRadius: "4px",
              }}
            >
              Rp
            </Box>
          ),
        },
      }}
    />
  );
}
