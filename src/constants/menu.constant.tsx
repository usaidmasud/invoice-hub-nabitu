import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import { ReactNode } from "react";
interface MenuConstantProps {
  label: string;
  link: string;
  icon: ReactNode;
}
export const menuConstant: MenuConstantProps[] = [
  {
    label: "Add Invoice",
    link: "/invoices/add",
    icon: <FormatListBulletedIcon />,
  },
  {
    label: "My Invoice",
    link: "/invoices/list",
    icon: <FormatListBulletedIcon />,
  },
];
