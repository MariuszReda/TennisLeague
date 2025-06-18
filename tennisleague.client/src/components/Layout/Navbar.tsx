import { AppBar,Typography, Box, Toolbar, IconButton, Button, Badge } from "@mui/material";
import { useState } from "react";
import {Menu , SportsBaseball, ChevronLeft} from "@mui/icons-material";
import JoinGame from "./JoinGame";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';

interface NavbarProps {
  onToggleSidebar: () => void;
  sidebarCollapsed: boolean;
}

export default function Navbar({ onToggleSidebar, sidebarCollapsed }: NavbarProps ) {

const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  const open = Boolean(anchorEl);    
  return (
      <AppBar position="sticky" color="primary" elevation={1}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: 2, alignItems:'center' }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton color="inherit" onClick={onToggleSidebar}>
              {sidebarCollapsed ? <Menu fontSize="large" /> : <ChevronLeft fontSize="large" />}
            </IconButton>
          </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1}}>
            <SportsBaseball />
            <Typography variant="h6" noWrap>
                Liga Tenisowa
            </Typography>
          </Box>


          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton color="inherit">
              <Badge badgeContent="2" color="success" anchorOrigin={{
                  vertical: 'bottom',
                    horizontal: 'left',
                  }}>
                <NotificationsIcon fontSize="large"/>
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <AccountCircleIcon fontSize="large"></AccountCircleIcon>
            </IconButton>
            <Button onClick={handleClick} variant="contained">Wejdź do gry!</Button>
            <JoinGame anchorEl={anchorEl} open={open} onClose={handleClose}/>
          </Box>
        </Toolbar>
      </AppBar>
  );
}