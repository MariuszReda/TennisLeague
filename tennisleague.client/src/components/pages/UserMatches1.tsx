import { useEffect, useState } from "react";
import type { Match } from "../../model/Match";
import type { Court } from "../../model/Court";
import { MockMatches } from "../layout/Mock/MockMatches";
import { MockCourts } from "../layout/Mock/MockCourts";
import { Grid } from "@mui/material";
import MatchRow1 from "./MatchRow1";

export default function UserMatches1(){

    const [matches, setMatches] = useState<Match[]>([]) ;
    const [courts, setCourts] = useState<Court[]>([])
    
    useEffect(()=>{
        setMatches(MockMatches);
        setCourts(MockCourts)
        matches.sort((a,b)=>{
             return new Date(a.date || "").getTime() - new Date(b.date || "").getTime();
        })
    }, []);   
    
    const handleSave = (updatedMatch: Match) => {
    setMatches((prev) =>
        prev.map((match) =>
        match.id === updatedMatch.id ? updatedMatch : match
        )
    );
    };


    return(
        <Grid container spacing={2}>
            {matches.map((match)=>(
                <Grid key={match.id} size={12}>
                    <MatchRow1 
                    match={match} 
                    courts={courts} 
                    editable={true}
                    onSave={handleSave}
                    />                       
                </Grid>
            ))}           
        </Grid>
    );
}