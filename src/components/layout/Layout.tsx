"use client";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import theme from "@/hooks/theme";
import ReduxProvider from "@/lib/redux/redux-provider";
import { ThemeProvider } from "@emotion/react";
import { Box, CssBaseline, Toolbar } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "../../app/global.css";
const drawerWidth = 280;

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReduxProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box
            sx={{
              display: "flex",
              backgroundColor: "#F1F5F9",
            }}
          >
            <Header drawerWidth={drawerWidth} />
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
                  px: {
                    xs: "24px",
                    sm: "24px",
                    md: "24px",
                    lg: "132px",
                  },
                  py: {
                    xs: "16px",
                    sm: "16px",
                    md: "16px",
                    lg: "52px",
                  },
                }}
              >
                {children}
              </Box>
            </Box>
          </Box>
        </LocalizationProvider>
      </ThemeProvider>
    </ReduxProvider>
  );
}
