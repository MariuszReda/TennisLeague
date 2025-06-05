import { AppBar,Typography, Box, Toolbar, IconButton, Button } from "@mui/material";
import RankingTable from "../Table/RankingTable";
import { useState } from "react";
import JoinGame from "./JoinGame";
import Sidebar from "./Sidebar";
import {Menu ,Brightness4 , SportsBaseball} from "@mui/icons-material";



export default function Navbar({ onToggleSidebar }: { onToggleSidebar: () => void }) {

const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  const open = Boolean(anchorEl);    
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <AppBar position="sticky" color="primary" elevation={1}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: 2, alignItems:'center' }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton color="inherit" onClick={onToggleSidebar}>
              <Menu fontSize="large" />
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

      <Box sx={{ display: "flex", flexGrow: 1 }}>
        <Sidebar />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <RankingTable/>
        </Box>
      </Box>
    </Box>
  );
}