import { AppBar,Typography, Box, Toolbar, IconButton, Button } from "@mui/material";
import { useState } from "react";
import {Menu ,Brightness4 , SportsBaseball, ChevronLeft} from "@mui/icons-material";
import JoinGame from "./JoinGame";

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
            <Button onClick={handleClick} variant="contained">Wejdź do gry!</Button>
            <JoinGame anchorEl={anchorEl} open={open} onClose={handleClose}/>
            <IconButton color="inherit">
              <Brightness4 fontSize="large"/>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
  );
}