import { AppBar,Typography, Box, Container, Toolbar, IconButton } from "@mui/material";
import LayersIcon from '@mui/icons-material/Layers';
import Brightness4Icon from "@mui/icons-material/Brightness4";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./Sidebar";
import RankingTable from "../Table/RankingTable";
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';


export default function Navbar({ onToggleSidebar }: { onToggleSidebar: () => void }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      {/* Navbar */}
      <AppBar position="sticky" color="primary" elevation={1}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between", px: 2, alignItems:'center' }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <IconButton color="inherit" onClick={onToggleSidebar}>
              <MenuIcon />
            </IconButton>

          </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1}}>
            <SportsBaseballIcon />
            <Typography variant="h6" noWrap>
                Liga Tenisowa
            </Typography>
            </Box>


          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Typography variant="body1">Wejdź do gry!</Typography>
            <IconButton color="inherit">
              <Brightness4Icon />
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