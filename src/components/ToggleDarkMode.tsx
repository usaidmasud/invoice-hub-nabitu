import { useAppDispatch, useAppSelector } from "@/hooks/redux-hook";
import { toggleDarkMode } from "@/lib/redux/slice/root.slice";
import { Bedtime, WbSunny } from "@mui/icons-material";
import { Box, Switch } from "@mui/material";
import React from "react";

export default function ToggleDarkMode() {
  const { darkMode } = useAppSelector((state) => state.root);
  const dispatch = useAppDispatch();
  return (
    <Switch
      checked={darkMode}
      onChange={() => {
        dispatch(toggleDarkMode());
      }}
      sx={{
        bgcolor: "#E2E8F0",
        height: 34,
        width: 56,
        borderRadius: "32px",
        display: {
          xs: "none",
          sm: "block",
        },
        padding: 0,
        m: 0,
        "& .MuiSwitch-track": {
          backgroundColor: "transparent",
        },
        "& .MuiSwitch-thumb": {
          backgroundColor: "transparent",
          width: 34,
          height: 34,
        },
        "& .MuiSwitch-switchBase": {
          p: 0,
          m: 0,
          pt: 0.1,
          transform: "translateX(2px)",
          "&.Mui-checked": {
            transform: "translateX(22px)",
          },
        },
      }}
      checkedIcon={
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 32,
            width: 32,
            borderRadius: "50%",
            backgroundColor: "#fff",
            color: "#64748B",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.4)",
          }}
        >
          <Bedtime fontSize="small" />
        </Box>
      }
      icon={
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 32,
            width: 32,
            borderRadius: "50%",
            backgroundColor: "#fff",
            color: "#64748B",
            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.4)",
          }}
        >
          <WbSunny fontSize="small" />
        </Box>
      }
    />
  );
}
