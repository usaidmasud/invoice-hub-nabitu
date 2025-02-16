import { Check, Error, Warning } from "@mui/icons-material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const colorConfig = {
  success: {
    icon: <Check />,
    backgroundColor: "#E1F9F0",
    borderColor: "#34D399",
    iconBackgroundColor: "#34D399",
  },
  danger: {
    icon: <Error />,
    backgroundColor: "#FEE2E2",
    borderColor: "#EF4444",
    iconBackgroundColor: "#EF4444",
  },
  warning: {
    icon: <Warning />,
    backgroundColor: "#FEF3C7",
    borderColor: "#F59E0B",
    iconBackgroundColor: "#F59E0B",
  },
};

interface AlertMessageProps {
  color: "success" | "warning" | "danger";
  title: string;
  message: string;
}
export default function AlertMessage({
  color = "success",
  title,
  message,
}: AlertMessageProps) {
  const { icon, backgroundColor, borderColor, iconBackgroundColor } =
    colorConfig[color] || colorConfig.success;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        position: "relative",
        p: "27px",
        borderRadius: "8px",
        overflow: "hidden",
        backgroundColor,
        boxShadow: "0px 1px 2px 0px rgba(16, 24, 40, 0.06)",
      }}
    >
      <Box
        sx={{
          width: 6.68,
          height: "100%",
          backgroundColor: borderColor,
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
      <Box
        sx={{
          width: 32,
          height: 32,
          backgroundColor: iconBackgroundColor,
          borderRadius: "6px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
        }}
      >
        {icon}
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 0 }}>
        <Typography
          sx={{
            fontSize: 16,
            fontWeight: 700,
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: 16,
            fontWeight: 400,
          }}
        >
          {message}
        </Typography>
      </Box>
    </Box>
  );
}
