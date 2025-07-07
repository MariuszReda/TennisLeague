import { useEffect, useState } from "react";
import type { Match } from "../../model/Match"
import { MockMatches } from "../layout/Mock/MockMatches";
import { Button, Card, Grid } from "@mui/material";
import { GameRow } from "./GameRow";
import { MockCourts } from "../layout/Mock/MockCourts";
import type { Court } from "../../model/Court";

export default function MyGames(){

    const [matches, setMatches] = useState<Match[]>([]);
    const [formState, setFormState] = useState<Record<number, any>>({});
    const [courts, setCourts] = useState<Court[]>([])

    useEffect(()=>{
        setMatches(MockMatches);
        setCourts(MockCourts)
        const sorted = matches.sort((a,b)=>{
             return new Date(a.date || "").getTime() - new Date(b.date || "").getTime();
        })
    }, []);

  const handleChange = (matchId: number, newData: any) => {
    setFormState((prev) => ({
      ...prev,
      [matchId]: newData,
    }));
  };

    const handleSave = (matchId: number) => {
    const update = formState[matchId];
    const court = courts.find((c: Court) => c.id === update.courtId);

    const updatedMatch = {
      ...matches.find((m) => m.id === matchId)!,
      date: update.date?.toISOString(),
      location: court?.name ?? "",
      scoreA: update.scoreA,
      scoreB: update.scoreB,
      isFinished: update.scoreA !== null && update.scoreB !== null,
    };

    setMatches((prev) =>
      prev.map((m) => (m.id === matchId ? updatedMatch : m))
    );
  };

  return (
    <Grid container spacing={2}>
      {matches.map((match) => (
        <Grid key={match.id} size={12}>
          <GameRow
            match={match}
            editable={!match.isFinished}
            courts={courts}
            formState={formState[match.id] ?? {}}
            onChange={handleChange}
          />
        </Grid>
      ))}
    </Grid>
  );
}