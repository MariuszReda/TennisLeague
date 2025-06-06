// SidebarItem.tsx
import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";

interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  to: string;
  collapsed: boolean;
}

const sidebarItemStyles = (collapsed: boolean) => ({
  "& .MuiListItemIcon-root": {
    minWidth: collapsed ? "auto" : 48,
    justifyContent: collapsed ? "center" : "flex-start",
  },
  "& .MuiListItemText-root": {
    display: collapsed ? "none" : "block",
    transition: "opacity 0.3s",
  },
});

export default function SidebarItem({ icon, text, to, collapsed }: SidebarItemProps) {
  return (
    <ListItem disablePadding>
      <ListItemButton component={Link} to={to} sx={sidebarItemStyles(collapsed)}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  );
}
