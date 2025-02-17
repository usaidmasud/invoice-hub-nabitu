import { Box, Typography } from "@mui/material";
import React from "react";

interface PageHeaderProps {
  title: string;
  extra?: React.ReactNode;
}
export default function PageHeader({ title, extra }: PageHeaderProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          sm: "row",
        },
        justifyContent: "space-between",
        alignItems: {
          xs: "flex-start",
          sm: "flex-start",
          md: "flex-start",
          lg: "center",
        },
        mb: "38px",
      }}
    >
      <Typography
        sx={{
          fontSize: 26,
          fontWeight: 700,
          mb: {
            xs: "16px",
            sm: "16px",
            md: "16px",
            lg: "0",
          },
        }}
      >
        {title}
      </Typography>
      {extra}
    </Box>
  );
}
