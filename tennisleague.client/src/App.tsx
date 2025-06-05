import { useEffect, useState } from 'react';
import RankingTable from './components/Table/RankingTable';
import Navbar from './components/Layout/Navbar';
import { createTheme, ThemeProvider, Container, CssBaseline } from "@mui/material";
import Sidebar from './components/Layout/Sidebar';
import Layout from './components/Layout/Layout';



function App() {
    return(
        <>
            <CssBaseline />
            <Layout />
            
        </>
    )
}

export default App;