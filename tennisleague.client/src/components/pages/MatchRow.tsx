import React from "react";
import {
  Grid,
  Typography,
  TextField,
  Select,
  MenuItem,
  Card,
  CardContent,
  Button,
  Box,
} from "@mui/material";
import { DatePicker, DateTimePicker } from "@mui/x-date-pickers";
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
  onSave: (matchId: number) => void;
}

export function MatchRow({
  match,
  editable,
  courts,
  formState,
  onChange,
  onSave
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
              <DatePicker
                label="Data meczu"
                value={dateValue}
                onChange={(newDate) => handleChange("date", newDate)}
                slotProps={{ textField: { size: "small", fullWidth: true } }}
              />
            ) : (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            paddingX: 1,
            borderRadius: '4px',
            justifyContent: 'center'
          }}
        >
          <Typography variant="body1">
            {match.date ? dayjs(match.date).format("DD.MM.YYYY") : "–"}
          </Typography>
        </Box>
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
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                paddingX: 1,
                borderRadius: '4px',
                justifyContent: 'center'
              }}
            >
              <Typography variant="body1">{match.location ?? "–"}</Typography>
            </Box>
            )}
          </Grid>

          <Grid size={{xs:12,sm:6, md:2}}>
           <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                paddingX: 1,
                borderRadius: '4px',
                justifyContent: 'center'
              }}
            >
            <Typography>{match.playerA}</Typography>
            </Box>
          </Grid>

          <Grid size={{xs:12,sm:6, md:2}}>
            <Grid container spacing={1} alignItems="center" justifyContent="center">
              
            {match.isFinished ? (
              <Typography>
                {match.scoreA} : {match.scoreB}
              </Typography>
            ):(  
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
            )}
          </Grid>
         </Grid>

          <Grid size={{xs:12,sm:6, md:2}}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                paddingX: 1,
                borderRadius: '4px',
                justifyContent: 'center'
              }}
            >
            <Typography>{match.playerB}</Typography>
            </Box>
          </Grid>
          {!match.isFinished && (
          <Grid size={{xs:12,sm:6, md:2}}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                paddingX: 1,
                borderRadius: '4px',
                justifyContent: 'flex-end'
              }}
            >
             <Button
              onClick={() => onSave(match.id)}
              sx={{ mt: 1 }}
              variant="contained"
            >
              Zapisz
            </Button>
            </Box>
          </Grid>
          )
          }

        </Grid>
      </CardContent>
      
    </Card>
  );
};
