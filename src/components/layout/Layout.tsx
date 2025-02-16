"use client";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import { ThemeProvider } from "@emotion/react";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { useState } from "react";
import "../../app/global.css";
import theme from "@/hooks/theme";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
const drawerWidth = 280;

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box
          sx={{
            display: "flex",
            backgroundColor: "#F1F5F9",
          }}
        >
          <Header
            drawerWidth={drawerWidth}
            // darkMode={darkMode}
            onToggleDarkMode={handleToggleDarkMode}
          />
          <Sidebar drawerWidth={drawerWidth} />

          <Box
            component={"main"}
            sx={{
              flexGrow: 1,
              p: 3,
              width: `calc(100% - ${drawerWidth}px)`,
              minHeight: "100vh",
            }}
          >
            <Toolbar />
            <Box
              sx={{
                px: "132px",
                py: "52px",
              }}
            >
              {children}
            </Box>
          </Box>
        </Box>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
