import { useEffect, useState } from "react"
import type { Player } from "../../model/Player"
import axios from "axios";
import {styled ,Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: 'gray',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

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
        <TableContainer component={Paper}>
             <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Pozycja</StyledTableCell>
                        <StyledTableCell align="left">Zawodnik</StyledTableCell>
                        <StyledTableCell align="left">Mecze</StyledTableCell>
                        <StyledTableCell align="left">Zwyciestwa</StyledTableCell>
                        <StyledTableCell align="left">Przegrane</StyledTableCell>
                        <StyledTableCell align="left">Sety Zdobyte</StyledTableCell>
                        <StyledTableCell align="left">Sety Stracone</StyledTableCell>
                        <StyledTableCell align="left">Punkty</StyledTableCell>
                    </TableRow>
                    </TableHead>
            <TableBody>
                {players.map((player)=>(
                    <StyledTableRow key={player.id}>
                        <StyledTableCell>{player.position}</StyledTableCell>
                        <StyledTableCell>{player.fullName}</StyledTableCell>
                        <StyledTableCell>{player.matches}</StyledTableCell>
                        <StyledTableCell>{player.wins}</StyledTableCell>
                        <StyledTableCell>{player.losses}</StyledTableCell>
                        <StyledTableCell>{player.setsWon}</StyledTableCell>
                        <StyledTableCell>{player.setsLost}</StyledTableCell>
                        <StyledTableCell>{player.points}</StyledTableCell>                  
                    </StyledTableRow>
                ))}
            </TableBody>                
             </Table>
        </TableContainer>



    )
};