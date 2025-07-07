import { Box, Grid, MenuItem, Paper, TextField, Typography } from "@mui/material";
import { MatchRow } from "./MatchRow";
import { useEffect, useState } from "react";
import type { Match } from "../../model/Match";
import { MockMatches } from "../layout/Mock/MockMatches";
import { MockCourts } from "../layout/Mock/MockCourts";

export default function Schedule(){

  const [searchQuery, setSearchQuery] = useState('');
  const [surfaceFilter, setSurfaceFilter] = useState('');
  const [matches, setMatches] = useState<Match[]>([]);
  
  const courtOptions = MockCourts;
  const filteredMatches = matches.filter((match)=>{
    const matchQuery = `${match.playerA} ${match.playerB}`.toLowerCase();
    const matchesQuery = matchQuery.includes(searchQuery.toLowerCase());
    const matchesSurface = surfaceFilter ? match.location === surfaceFilter : true;
    return matchesQuery && matchesSurface;
  })



      useEffect(()=>{
          setMatches(MockMatches);          
      }, []);

    



    return(
      <Box p={2}>
      <Grid container spacing={2}>
        {/* Panel filtrów */}
        <Grid size={{xs:12, md:2}}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>Filtry</Typography>
            <TextField
              label="Szukaj gracza"
              variant="outlined"
              fullWidth
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              margin="normal"
            />
            <TextField
              select
              label="Nawierzchnia"
              value={surfaceFilter}
              onChange={(e) => setSurfaceFilter(e.target.value)}
              fullWidth
              margin="normal"
            >
              <MenuItem value="">Wszystkie</MenuItem>
              {courtOptions.map((court) => (
                <MenuItem key={court.id}>
                  {court.address}
                </MenuItem>
              ))}
            </TextField>
          </Paper>
        </Grid>

        {/* Panel wyników */}
        {/* <Grid size={{xs:12, md:8}}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>Wyniki</Typography>
            {filteredMatches.length > 0 ? (
              filteredMatches.map((match) => (
                <MatchRow key={match.id} match={match} courts={courtOptions} editable={false} formState={}/>
              ))
            ) : (
              <Typography variant="body1">Brak wyników spełniających kryteria.</Typography>
            )}
          </Paper>
        </Grid> */}
      </Grid>
    </Box>
    )
}