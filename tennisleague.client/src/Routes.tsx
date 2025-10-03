import { createBrowserRouter } from "react-router-dom";
import DashBoard from "./components/pages/DashBoard";
import App from "./App";
import RankingTable from "./components/pages/RankingTable";
import Schedule from "./components/pages/Schedule";
import MyGames from "./components/pages/UserMatches";
import AdminGames from "./components/pages/AdminGames";
import AdminPlayers from "./components/pages/AdminPlayers";
import Regulations from "./components/pages/Regulations";
import UserMatches1 from "./components/pages/UserMatches1";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {path:"", element:<DashBoard/>},
            {path:'table', element:<RankingTable/>},
            {path:'schedule', element:<Schedule/>},
            {path:'games', element:<UserMatches1/>},
            {path:'ragulation', element:<Regulations/>},
            {path:'admin/games', element:<AdminGames/>},
            {path:'admin/players', element:<AdminPlayers/>}
        ]
    }
])