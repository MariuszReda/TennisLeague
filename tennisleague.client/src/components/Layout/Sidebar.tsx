import {List, Paper, Divider} from "@mui/material";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BarChart from "@mui/icons-material/BarChart";
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import TableChartIcon from '@mui/icons-material/TableChart';
import HomeIcon from '@mui/icons-material/Home';
import SidebarItem from "./SidebarItem";
import EditLocationAltOutlinedIcon from '@mui/icons-material/EditLocationAltOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import HelpIcon from '@mui/icons-material/Help';
  interface Props{
    collapsed: boolean;
  }

export default function Sidebar({collapsed}: Props) {
  return (

        <Paper elevation={1} sx=
        {{ width:collapsed? 60 : 250, 
            height: "100%", 
            transition:"width 0.3s ease", 
            overflowX: "hidden",
            flexShrink: 0,
            }}>
          <List>
            <SidebarItem icon={<HomeIcon fontSize="large"/>} text="Aktualności" to="/" collapsed={collapsed}></SidebarItem>
            <SidebarItem icon={<TableChartIcon fontSize="large"/>} text="Tabela" to="/table" collapsed={collapsed}></SidebarItem>
            <SidebarItem icon={<SportsTennisIcon fontSize="large"/>} text="Moje mecze" to="/games" collapsed={collapsed}></SidebarItem>
            <SidebarItem icon={<CalendarMonthIcon fontSize="large"/>}text="Terminarz" to="/schedule" collapsed={collapsed}></SidebarItem>
            <SidebarItem icon={<MapOutlinedIcon fontSize="large"/>}text="Lista kortów" to="/schedule" collapsed={collapsed}></SidebarItem>
            <SidebarItem icon={<HelpIcon fontSize="large"/>}text="Regulamin ogólny" to="/ragulation" collapsed={collapsed}></SidebarItem>

            <Divider sx={{ my: 1 }} />
            <SidebarItem icon={<BarChart fontSize="large"/>} text="Zarządzaj meczami" to="/schedule" collapsed={collapsed}></SidebarItem>
            <SidebarItem icon={<ManageAccountsIcon fontSize="large"/>}text="Zarządzaj zwodnikami" to="/schedule" collapsed={collapsed}></SidebarItem>
            <SidebarItem icon={<EditLocationAltOutlinedIcon fontSize="large"/>}text="Zarządzaj listą kortów" to="/schedule" collapsed={collapsed}></SidebarItem>

          </List>
        </Paper>
  );
}