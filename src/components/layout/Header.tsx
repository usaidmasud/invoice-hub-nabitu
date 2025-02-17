import { AppBar, Box, Toolbar } from "@mui/material";
import CustomIconButton from "../CustomIconButton";
import ToggleDarkMode from "../ToggleDarkMode";
import UserProfile from "../UserProfile";

interface HeaderProps {
  drawerWidth: number;
}

export default function Header({ drawerWidth }: HeaderProps) {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: {
          md: `calc(100% - ${100}px)`,
          lg: `calc(100% - ${drawerWidth}px)`,
        },
        ml: {
          md: "100px",
          lg: `${drawerWidth}px`,
        },
        backgroundColor: "#fff",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          height: 80,
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "28px" }}>
          {/* Dark Mode Toggle */}
          <ToggleDarkMode />
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "flex",
              },
              alignItems: "center",
              gap: "15px",
            }}
          >
            {/* Notifications */}
            <Box sx={{ mr: "28" }} />
            <CustomIconButton iconSrc="/alarm.svg" altText="alarm" />
            <CustomIconButton
              iconSrc="/chat-alt-8.svg"
              altText="messages"
              showBadge={true}
              badgeColor="#DC3545"
            />
            {/* User Login Dropdown */}
          </Box>
          <UserProfile />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
