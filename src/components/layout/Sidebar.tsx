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
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
interface SidebarProps {
  drawerWidth: number;
}
export default function Sidebar({ drawerWidth }: SidebarProps) {
  const pathname = usePathname();
  return (
    <Drawer
      sx={{
        // p: 0,
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#1C2434",
          color: "#fff",
          py: "28px",
          px: "38px",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      {/* <Toolbar /> */}
      <Box
      // sx={{
      //   py: "28px",
      //   px: "38px",
      // }}
      >
        <Image width={166} height={44.57} src={"/logo.png"} alt={"Logo"} />
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
                    // mb: "32px",
                  }}
                >
                  <ListItemIcon
                    sx={{
                      color: pathname === item.link ? "#fff" : "#9D9D9D",
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    sx={{
                      fontSize: 16,
                      fontWeight: 600,
                      color: pathname === item.link ? "#fff" : "#9D9D9D",
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
