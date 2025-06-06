import { List, ListItem,ListItemButton, ListItemText, Paper, Divider, Typography, ListItemIcon } from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BarChart from "@mui/icons-material/BarChart";
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import TableChartIcon from '@mui/icons-material/TableChart';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import type { text } from "stream/consumers";

  interface Props{
    collapsed: boolean;
  }

export default function Sidebar({collapsed}: Props) {

   const sidebarSectionTitleStyles = (collapsed: boolean) => ({
      px: 2,
      pt: 2,
      opacity: collapsed ? 0 : 1,
      transition: "opacity 0.3s",
      whiteSpace: "nowrap",
      overflow: "hidden",
    });


  return (

        <Paper elevation={1} sx={{ width:collapsed? 60 :250, height: "100%", transition:"width 0.3s ease", overflowX: "hidden" }}>
          <List>
            {/* <Typography variant="subtitle2" sx={sidebarSectionTitleStyles(collapsed)}>Menu główne</Typography> */}
            <SidebarItem icon={<HomeIcon fontSize="large"/>} text="Aktualności" to="/" collapsed={collapsed}></SidebarItem>
            <SidebarItem icon={<TableChartIcon fontSize="large"/>} text="Tabela" to="/table" collapsed={collapsed}></SidebarItem>
            <SidebarItem icon={<SportsTennisIcon fontSize="large"/>} text="Moje mecze" to="/games" collapsed={collapsed}></SidebarItem>
            <SidebarItem icon={<CalendarMonthIcon fontSize="large"/>}text="Terminarz" to="/schedule" collapsed={collapsed}></SidebarItem>

            <Divider sx={{ my: 1 }} />
            {/* <Typography variant="subtitle2" sx={sidebarSectionTitleStyles(collapsed)}>Panel administratora</Typography> */}
            <SidebarItem icon={<BarChart fontSize="large"/>} text="Zarządzaj meczami" to="/schedule" collapsed={collapsed}></SidebarItem>
            <SidebarItem icon={<ManageAccountsIcon fontSize="large"/>}text="Zarządzaj zwodnikami" to="/schedule" collapsed={collapsed}></SidebarItem>
          </List>
        </Paper>
  );
}