import { useEffect, useState } from "react";
import type { Match } from "../../model/Match"
import { MockMatches } from "../layout/Mock/MockMatches";
import { Card, Grid } from "@mui/material";

export default function MyGames(){

    const [matches, setMatches] = useState<Match[]>([]);
    const [formState, setFormState] = useState<Record<number, any>>({});

    useEffect(()=>{
        setMatches(MockMatches);
        const sorted = matches.sort((a,b)=>{
             return new Date(a.date || "").getTime() - new Date(b.date || "").getTime();
        })
    }, []);

    return(
        <Grid>
            {matches.map((match)=>
            <Grid size={8} key={match.id}>
                <Card variant="outlined">
                {match.date} {match.location} | {match.playerA} {match.scoreA} : {match.scoreB} {match.playerB}

                </Card>
            </Grid>
            )}
        </Grid>
         
    )
}