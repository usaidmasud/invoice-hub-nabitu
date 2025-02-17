interface MenuConstantProps {
  label: string;
  link: string;
  icon: string;
  activeIcon: string;
}
export const menuConstant: MenuConstantProps[] = [
  {
    label: "Add Invoice",
    link: "/invoices/add",
    icon: "/icon-capital.svg",
    activeIcon: "/icon-capital-active.svg",
  },
  {
    label: "My Invoice",
    link: "/invoices/list",
    icon: "/icon-list.svg",
    activeIcon: "/icon-list-active.svg",
  },
];
