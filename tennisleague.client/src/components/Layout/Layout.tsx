import { Box, Toolbar, Typography } from "@mui/material";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import RankingTable from "../Table/RankingTable";

export default function Layout() {
  const handleToggleSidebar = () => {
    // implementacja zwijania w przyszłości
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Navbar onToggleSidebar={function (): void {
                  throw new Error("Function not implemented.");
              } } />
        <Toolbar />

      </Box>
    </Box>
  );
}
