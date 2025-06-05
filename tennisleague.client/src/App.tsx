import {useState } from 'react';
import {CssBaseline } from "@mui/material";
import Layout from './components/layout/Layout';



function App() {
    // const [sidebarOpen, setSidebarOpen] = useState(true);

    // const handleToggleSidebar = () => {
    // setSidebarOpen((prev) => !prev);
    // };
    return(
        <>
            <CssBaseline />
            <Layout />           
        </>
    )
}

export default App;