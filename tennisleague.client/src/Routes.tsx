import { createBrowserRouter } from "react-router-dom";
import DashBoard from "./components/pages/DashBoard";
import App from "./App";
import RankingTable from "./components/pages/RankingTable";
import Schedule from "./components/pages/Schedule";
import MyGames from "./components/pages/MyGames";
import AdminGames from "./components/pages/AdminGames";
import AdminPlayers from "./components/pages/AdminPlayers";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {path:"", element:<DashBoard/>},
            {path:'table', element:<RankingTable/>},
            {path:'schedule', element:<Schedule/>},
            {path:'games',element:<MyGames/>},
            {path:'admin/games', element:<AdminGames/>},
            {path:'admin/players', element:<AdminPlayers/>}
        ]
    }
])