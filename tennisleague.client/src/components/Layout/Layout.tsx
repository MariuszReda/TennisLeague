import { Box, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleToggleSidebar = () => {
     setSidebarOpen((prev) => !prev);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Navbar onToggleSidebar={handleToggleSidebar} sidebarCollapsed={sidebarOpen} />
      <Box sx={{ display: "flex", flexGrow: 1 }}>
        <Sidebar collapsed={!sidebarOpen} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  );
}
