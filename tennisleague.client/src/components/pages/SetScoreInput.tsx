import { Box, Grid, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

export type SetScoreInputProps = {
  scoreA: number | null;
  scoreB: number | null;
  tiebreakA?: number | null;
  tiebreakB?: number | null;
  editable?: boolean;
  onChange: (scoreA: number | null, scoreB: number | null, tiebreakA?: number | null, tiebreakB?: number | null) => void;
};

const isValidSetScore = (a: number | null, b: number | null): boolean => {
  if (a === null || b === null) return true; // allow typing live
  const max = Math.max(a, b);
  const min = Math.min(a, b);
  if (max === 6 && min <= 4) return true;
  if (max === 7 && (min === 5 || min === 6)) return true;
  if (a === 6 && b === 6) return true; // tiebreak in progress
  return false;
};

const SetScoreInput = ({
  scoreA,
  scoreB,
  tiebreakA,
  tiebreakB,
  editable = true,
  onChange
}: SetScoreInputProps) => {
  const [localA, setLocalA] = useState<string>(scoreA !== null ? String(scoreA) : "");
  const [localB, setLocalB] = useState<string>(scoreB !== null ? String(scoreB) : "");
  const [tbA, setTbA] = useState<string>(tiebreakA !== null ? String(tiebreakA) : "");
  const [tbB, setTbB] = useState<string>(tiebreakB !== null ? String(tiebreakB) : "");

  useEffect(() => {
    const a = localA === "" ? null : Number(localA);
    const b = localB === "" ? null : Number(localB);
    const tA = tbA === "" ? null : Number(tbA);
    const tB = tbB === "" ? null : Number(tbB);
    onChange(a, b, tA, tB);
  }, [localA, localB, tbA, tbB]);

  const a = localA === "" ? null : Number(localA);
  const b = localB === "" ? null : Number(localB);
  const showTiebreak = (a === 7 && b === 6) || (a === 6 && b === 7);

  const scoreOptions = Array.from({ length: 8 }, (_, i) => i); // 0..7

  if (!editable) {
    return (
      <Box display="flex" gap={1} alignItems="center">
        <Typography variant="body1">
          {localA} : {localB}
        </Typography>
        {showTiebreak && tbA !== "" && tbB !== "" && (
          <Typography variant="body2">({tbA}:{tbB})</Typography>
        )}
      </Box>
    );
  }

  return (
    <Grid container spacing={1} alignItems="center">
      <Grid >
        <Select
          size="small"
          value={localA}
          onChange={(e) => setLocalA(e.target.value)}
          displayEmpty
        >
          <MenuItem value="">-</MenuItem>
          {scoreOptions.map((val) => (
            <MenuItem key={val} value={String(val)}>{val}</MenuItem>
          ))}
        </Select>
      </Grid>
      <Grid >
        <Typography variant="body1">:</Typography>
      </Grid>
      <Grid >
        <Select
          size="small"
          value={localB}
          onChange={(e) => setLocalB(e.target.value)}
          displayEmpty
        >
          <MenuItem value="">-</MenuItem>
          {scoreOptions.map((val) => (
            <MenuItem key={val} value={String(val)}>{val}</MenuItem>
          ))}
        </Select>
      </Grid>

      {showTiebreak && (
        <>
          <Grid >
            <TextField
              size="small"
              value={tbA}
              onChange={(e) => setTbA(e.target.value)}
              sx={{ width: 40 }}
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              placeholder="TB A"
            />
          </Grid>
          <Grid >
            <Typography variant="body2">:</Typography>
          </Grid>
          <Grid >
            <TextField
              size="small"
              value={tbB}
              onChange={(e) => setTbB(e.target.value)}
              sx={{ width: 40 }}
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
              placeholder="TB B"
            />
          </Grid>
        </>
      )}

      {!isValidSetScore(a, b) && (
        <Grid >
          <Typography color="error" variant="caption">
            Niepoprawny wynik seta
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default SetScoreInput;
