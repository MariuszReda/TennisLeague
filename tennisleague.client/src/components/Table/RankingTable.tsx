import { useEffect, useState } from "react"
import type { Player } from "../../model/Player"
import axios from "axios";



export default function RankingRable(){

    const [players, setPlayers] = useState<Player[]>([]);
    
    useEffect(()=>{
        const fetchPlayers = async () => {
            try
            {
                const response = await axios.get("/api/table");
                setPlayers(response.data);
            }
            catch(err)
            {
                console.error(err);
            }

        };

        fetchPlayers();
    }, [])

    return(
        <table>
            <thead>
                <tr>
                    <th>Pozycja</th>
                    <th>Zawodnik</th>
                    <th>Mecze</th>
                    <th>Zwyciestwa</th>
                    <th>Przegrane</th>
                    <th>Sety Zdobyte</th>
                    <th>Sety Stracone</th>
                    <th>Punkty</th>
                </tr>
            </thead>
            <tbody>
                {players.map((player)=>(
                    <tr key={player.id}>
                        <td>{player.position}</td>
                        <td>{player.fullName}</td>
                        <td>{player.matches}</td>
                        <td>{player.wins}</td>
                        <td>{player.losses}</td>
                        <td>{player.setsWon}</td>
                        <td>{player.setsLost}</td>
                        <td>{player.points}</td>                  
                    </tr>
                ))}
            </tbody>
        </table>
    )
};