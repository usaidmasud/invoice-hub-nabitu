import { TStatus } from "@/lib/types/status.type";
import { Chip } from "@mui/material";
import React from "react";

interface RenderStatusProps {
  status: TStatus;
}

export default function RenderStatus({ status }: RenderStatusProps) {
  const getcolor = (): string[] => {
    switch (status) {
      case "Paid":
        return ["#21965314", "#219653"];
      case "Pending":
        return ["#FFA70B14", "#FFA70B"];
      case "Unpaid":
        return ["#D3405314", "#D34053"];
      default:
        return ["#21965314", "#219653"];
    }
  };
  const [backgroundColor, textColor] = getcolor();
  return (
    <Chip
      sx={{
        color: textColor,
        backgroundColor: backgroundColor,
        fontSize: 16,
        px: "14px",
        py: "4px",
      }}
      label={status}
    />
  );
}
