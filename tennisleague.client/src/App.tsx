import { useEffect, useState } from 'react';
import Navbar from './components/Layout/Navbar';
import { createTheme, ThemeProvider, Container, CssBaseline } from "@mui/material";
import Layout from './components/layout/Layout';



function App() {
    return(
        <>
            <CssBaseline />
            <Layout />           
        </>
    )
}

export default App;