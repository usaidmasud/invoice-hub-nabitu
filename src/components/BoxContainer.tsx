import { Box, Divider, Typography } from "@mui/material";
import React from "react";

interface BoxContainerProps {
  title?: string;
  children: React.ReactNode;
}
export default function BoxContainer({ title, children }: BoxContainerProps) {
  return (
    <Box
      sx={{
        backgroundColor: "#fff",
      }}
    >
      {title && (
        <Box>
          <Typography
            sx={{
              fontSize: 16,
              fontWeight: 600,
              py: "15px",
              px: "26px",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            {title}
          </Typography>
          <Divider
            sx={{
              p: 0,
              m: 0,
            }}
          />
        </Box>
      )}
      <Box sx={{ p: "26px" }}>{children}</Box>
    </Box>
  );
}
