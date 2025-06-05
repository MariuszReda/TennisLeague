import React from "react";
import { List, ListItem,ListItemButton, ListItemText, Toolbar, Box, Paper, Divider, Typography, ListItemIcon } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BarChartIcon from "@mui/icons-material/BarChart";
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

export default function Sidebar() {
  return (

 <Paper elevation={1} sx={{ width: 250, height: "100%" }}>
          <List>
            <Typography variant="subtitle2" sx={{ px: 2, pt: 2 }}>Menu główne</Typography>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon><DashboardIcon /></ListItemIcon>
                <ListItemText primary="Tabela" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon><SportsTennisIcon /></ListItemIcon>
                <ListItemText primary="Moje mecze" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon><CalendarMonthIcon /></ListItemIcon>
                <ListItemText primary="Terminarz" />
              </ListItemButton>
            </ListItem>
            <Divider sx={{ my: 1 }} />
            <Typography variant="subtitle2" sx={{ px: 2 }}>Panel administratora</Typography>
            <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon><BarChartIcon /></ListItemIcon>
                  <ListItemText primary="Zarządzaj meczami" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon><ManageAccountsIcon /></ListItemIcon>
                  <ListItemText primary="Zarządzaj zwodnikami" />
                </ListItemButton>                         
            </ListItem>
          </List>
        </Paper>
  );
}