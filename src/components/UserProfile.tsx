import { ChevronRight, Logout, PersonAdd, Settings } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { Fragment } from "react";

export default function UserProfile() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Box
          sx={{
            display: {
              sm: "flex",
              xs: "none",
            },
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
          <IconButton onClick={handleClick} color="inherit">
            <Avatar
              sx={{ width: 46, height: 46 }}
              src="https://s3-alpha-sig.figma.com/img/7644/08ef/d316b9785ad155fc6738f0a18dd0c978?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BBTI3S5kfEf68XHp3LVMj5T5P2Kk8ySWlRWeao0Tzc~RekwKcKdaeYjo0R~cELj4BYe5~4R8jB7Fa-44-MA4cnKhqlc61swwixFBvmVFUrwfE58RAX3h9X4kkXN9CYEfWALRmPsemCp0lNMRWzGPqNZS8YN1GUVQUzYZfsLRlznAN2MOcKDdT-cCk2-YE73AvpSOIly3SHaWg5EF~TLvU7GiNKS~L48qE4j5vMUJwCLRhfoSs-XqHFnzVfgmrbbVpsx3bt~-PNopYVhJVB14Bi2PHpe6vaVHp6hmO2qrPupx0GH865fGIGTTEz22qlav-w~TUWo9XvDxCk4O1LdXhg__"
            />
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
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Fragment>
  );
}
