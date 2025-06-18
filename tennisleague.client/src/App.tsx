import {CssBaseline } from "@mui/material";
import Layout from './components/layout/Layout';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function App() {
    return(
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <CssBaseline />
            <Layout />           
        </LocalizationProvider>
    )
}

export default App;