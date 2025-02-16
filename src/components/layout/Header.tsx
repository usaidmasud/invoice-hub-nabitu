import {
  ChevronRight,
  NotificationsOutlined,
  SmsOutlined,
} from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import MuiSwitch from "./MuiSwitch";

interface HeaderProps {
  drawerWidth: number;
  // darkMode?: boolean;
  onToggleDarkMode: () => void;
}

export default function Header({
  drawerWidth,
  // _darkMode,
  onToggleDarkMode,
}: HeaderProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // Handle user menu open/close
  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
        backgroundColor: "#fff",
        // display: "flex",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          gap: 2,
          height: 80,
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        {/* Dark Mode Toggle */}
        {/* <CustomSwitch /> */}
        <MuiSwitch sx={{ m: 1 }} onClick={onToggleDarkMode} />
        {/* <Switch {...label} defaultChecked /> */}
        {/* <IconButton color="inherit" onClick={onToggleDarkMode}>
          {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton> */}

        {/* Notifications */}
        <IconButton
          sx={{
            backgroundColor: "#E2E8F0",
            color: "#64748B",
          }}
          color="inherit"
        >
          {/* <Badge badgeContent={0} color="error"> */}
          <NotificationsOutlined sx={{ fontSize: 24 }} />
          {/* </Badge> */}
        </IconButton>

        {/* Messages */}
        <IconButton
          color="inherit"
          sx={{
            backgroundColor: "#E2E8F0",
            color: "#64748B",
          }}
        >
          <Badge badgeContent={0} color="error">
            <SmsOutlined sx={{ fontSize: 24 }} />
          </Badge>
        </IconButton>

        {/* User Login Dropdown */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 0,
              alignItems: "flex-end",
            }}
          >
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: 14,
                color: "#212B36",
              }}
            >
              Jhon Doe
            </Typography>
            <Typography
              sx={{
                fontWeight: 600,
                fontSize: 12,
                color: "#637381",
              }}
            >
              Verified Member
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 0 }}>
            <Avatar
              sx={{ width: 46, height: 46 }}
              src="https://s3-alpha-sig.figma.com/img/7644/08ef/d316b9785ad155fc6738f0a18dd0c978?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BBTI3S5kfEf68XHp3LVMj5T5P2Kk8ySWlRWeao0Tzc~RekwKcKdaeYjo0R~cELj4BYe5~4R8jB7Fa-44-MA4cnKhqlc61swwixFBvmVFUrwfE58RAX3h9X4kkXN9CYEfWALRmPsemCp0lNMRWzGPqNZS8YN1GUVQUzYZfsLRlznAN2MOcKDdT-cCk2-YE73AvpSOIly3SHaWg5EF~TLvU7GiNKS~L48qE4j5vMUJwCLRhfoSs-XqHFnzVfgmrbbVpsx3bt~-PNopYVhJVB14Bi2PHpe6vaVHp6hmO2qrPupx0GH865fGIGTTEz22qlav-w~TUWo9XvDxCk4O1LdXhg__"
            />
            <IconButton onClick={handleMenuOpen} color="inherit">
              <ChevronRight
                sx={{
                  fontSize: 24,
                  color: "#637381",
                  transform: "rotate(90deg)",
                }}
              />
            </IconButton>
          </Box>
        </Box>

        {/* User Dropdown Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          sx={{
            "& .MuiPaper-root": {
              boxShadow: "0px 4px 16px rgba(17, 17, 17, 0.1)",
              borderRadius: "8px",
              width: 150,
              marginTop: 2,
            },
          }}
        >
          <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
          <MenuItem onClick={handleMenuClose}>Setting</MenuItem>
          <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
}
