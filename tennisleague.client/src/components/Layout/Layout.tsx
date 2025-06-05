import { Box, Toolbar, Typography } from "@mui/material";
import Navbar from "./Navbar";
import RankingTable from "../pages/RankingTable";
import { useState } from "react";
import Sidebar from "./Sidebar";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
     setSidebarOpen((prev) => !prev);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Navbar onToggleSidebar={handleToggleSidebar} />
      <Box sx={{ display: "flex", flexGrow: 1 }}>
        {sidebarOpen && <Sidebar />}
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <RankingTable />
        </Box>
      </Box>
    </Box>
  );
}
