import { menuConstant } from "@/constants/menu.constant";
import {
  Box,
  Drawer,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ResponsiveTooltip from "../ResponsiveTooltip";
interface SidebarProps {
  drawerWidth: number;
}

export default function Sidebar({ drawerWidth }: SidebarProps) {
  const pathname = usePathname();
  console.log("🚀 ~ Sidebar ~ pathname:", pathname);
  return (
    <Drawer
      sx={{
        width: {
          md: 100,
          xs: 100,
          sm: 100,
          lg: drawerWidth,
        },
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: {
            md: 100,
            xs: 100,
            sm: 100,
            lg: drawerWidth,
          },
          boxSizing: "border-box",
          backgroundColor: "#1C2434",
          color: "#fff",
          py: "28px",
          px: {
            xs: "16px",
            sm: "16px",
            md: "16px",
            lg: "38px",
          },
        },
      }}
      variant="permanent"
      anchor="left"
    >
      {/* <Toolbar /> */}
      <Box>
        <Box
          component="img"
          src={"/logo-02.svg"}
          alt={"Logo"}
          width={166}
          height={44.57}
          display={{
            xs: "none",
            sm: "none",
            md: "none",
            lg: "block",
          }}
        />
        <Box
          component="img"
          src={"/logo.svg"}
          alt={"Logo"}
          ml={1}
          display={{
            xs: "block",
            sm: "block",
            md: "block",
            lg: "none",
          }}
        />

        <Typography
          sx={{
            mt: "49px",
            fontWeight: 600,
            fontSize: 14,
            color: "#9D9D9D",
          }}
        >
          MENU
        </Typography>
        <MenuList
          sx={{
            p: 0,
            m: 0,
            mt: "17px",
          }}
        >
          {menuConstant.map((item, index) => {
            return (
              <Link key={index} href={item.link} passHref legacyBehavior>
                <MenuItem
                  sx={{
                    py: "16px",
                    px: 0,
                    m: 0,
                    justifyContent: {
                      xs: "center",
                      sm: "center",
                      md: "center",
                      lg: "flex-start",
                    },
                  }}
                >
                  <ResponsiveTooltip title={item.label} breakpoint="md">
                    <ListItemIcon
                      sx={{
                        color: pathname === item.link ? "#fff" : "#9D9D9D",
                        minWidth: {
                          xs: "auto",
                          sm: "auto",
                          md: "auto",
                          lg: "56px",
                        },
                      }}
                    >
                      <Box
                        component="img"
                        src={
                          pathname === item.link ? item.activeIcon : item.icon
                        }
                        alt={item.label}
                      />
                    </ListItemIcon>
                  </ResponsiveTooltip>
                  <ListItemText
                    sx={{
                      fontSize: 16,
                      fontWeight: 600,
                      color: pathname === item.link ? "#fff" : "#9D9D9D",
                      display: {
                        xs: "none",
                        sm: "none",
                        md: "none",
                        lg: "block",
                      },
                    }}
                    primary={item.label}
                  />
                </MenuItem>
              </Link>
            );
          })}
        </MenuList>
      </Box>
    </Drawer>
  );
}
