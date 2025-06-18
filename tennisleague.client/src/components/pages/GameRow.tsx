import React from "react";
import {
  Grid,
  Typography,
  TextField,
  Select,
  MenuItem,
  Card,
  CardContent,
} from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import type { Match } from "../../model/Match";
import type { Court } from "../../model/Court";


interface MatchRowProps {
  match: Match;
  editable: boolean;
  courts: Court[];
  formState: {
    date?: Dayjs | null;
    courtId?: number | null;
    scoreA?: number | null;
    scoreB?: number | null;
  };
  onChange: (matchId: number, newState: MatchRowProps["formState"]) => void;
}

export function GameRow({
  match,
  editable,
  courts,
  formState,
  onChange,
}: MatchRowProps) {
  const dateValue = formState.date ?? (match.date ? dayjs(match.date) : null);
  const scoreA = formState.scoreA ?? match.scoreA;
  const scoreB = formState.scoreB ?? match.scoreB;
  const selectedCourtId = formState.courtId ?? null;

  const handleChange = (key: keyof MatchRowProps["formState"], value: any) => {
    onChange(match.id, { ...formState, [key]: value });
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Grid container spacing={2} alignItems="center">
          <Grid size={{xs:12,sm:6, md:2}} >
            {editable ? (
              <DateTimePicker
                label="Data meczu"
                value={dateValue}
                onChange={(newDate) => handleChange("date", newDate)}
                slotProps={{ textField: { size: "small", fullWidth: true } }}
              />
            ) : (
              <>
                <Typography variant="body2">
                  {match.date ? dayjs(match.date).format("DD.MM.YYYY HH:mm") : "–"}
                </Typography>
              </>
            )}
          </Grid>
          <Grid size={{xs:12,sm:6, md:2}}>
            {editable ? (
              <Select
                value={selectedCourtId ?? ""}
                displayEmpty
                onChange={(e) => handleChange("courtId", Number(e.target.value))}
                fullWidth
                size="small"
              >
                <MenuItem value="">Wybierz kort</MenuItem>
                {courts.map((court) => (
                  <MenuItem key={court.id} value={court.id}>
                    {court.name} – {court.address}
                  </MenuItem>
                ))}
              </Select>
            ) : (
              <Typography variant="body2">{match.location ?? "–"}</Typography>
            )}
          </Grid>

          <Grid size={{xs:12,sm:6, md:2}}>
            <Typography>{match.playerA}</Typography>
          </Grid>

          <Grid size={{xs:12,sm:6, md:2}}>
            {editable && dateValue && selectedCourtId ? (
              <Grid container spacing={1}>
                <Grid size="auto">
                  <TextField
                    value={scoreA ?? ""}
                    onChange={(e) =>
                      handleChange("scoreA", parseInt(e.target.value))
                    }
                    type="number"
                    size="small"
                    sx={{ width: 50 }}
                  />
                </Grid>
                <Grid size="auto">
                  <TextField
                    value={scoreB ?? ""}
                    onChange={(e) =>
                      handleChange("scoreB", parseInt(e.target.value))
                    }
                    type="number"
                    size="small"
                    sx={{ width: 50 }}
                  />
                </Grid>
              </Grid>
            ) : match.isFinished ? (
              <Typography>
                {match.scoreA} : {match.scoreB}
              </Typography>
            ) : (
              <Typography variant="caption" color="text.secondary">
                Ustaw datę i kort
              </Typography>
            )}
          </Grid>

          <Grid size={{xs:12,sm:6, md:2}}>
            <Typography>{match.playerB}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};
