import { Box, Button, Card, CardContent, Grid, MenuItem, Select, TextField, Typography } from "@mui/material";
import type { Court } from "../../model/Court";
import type { Match } from "../../model/Match";
import { DatePicker} from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";

export default function MatchRow(
{ match, courts, editable, onSave }: 
{ match: Match, courts: Court[], editable: boolean, onSave: (match:Match)=>void }
){
    
    const [localMatch, setLocalMatch] = useState<Match>(match);

    const handleDateChange = (newDate: Dayjs | null) =>{
        setLocalMatch((prev)=>({
            ...prev,
            date: newDate ? newDate.format("YYYY-MM-DD") : null        
        }))
    }
    
    const handleCourtChange = (courtId: number) => {
    const selectedCourt = courts.find(c => c.id === courtId) || null;
    setLocalMatch((prev) => ({
        ...prev,
        location: selectedCourt,
    }));
    };
    
const handleScoreChange = (field: 'scoreA' | 'scoreB', value: string) => {
  const score = value === '' ? null : Number(value);

  setLocalMatch((prev) => ({
    ...prev,
    [field]: score,
  }));
};

  const handleSave = () => {
    onSave(localMatch);
  };

    return(
    <Card variant="outlined">
        <CardContent>
            <Grid container spacing={2} alignItems="center">
                <Grid size={{xs:12,sm:6, md:2}}>
                    {editable ? (
                        <DatePicker
                        label="Data meczu"
                        value={localMatch.date ? dayjs(localMatch.date) : null}
                        onChange={handleDateChange}
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
                        }}>
                            <Typography variant="body1">
                            {localMatch.date ? dayjs(localMatch.date).format("DD.MM.YYYY") : "–"}
                            </Typography>
                    </Box>
                    )}
                </Grid>

                <Grid size={{xs:12,sm:6, md:2}}>
                    {editable ? (
                        <Select
                        value={localMatch.location?.id ?? ""}
                        displayEmpty
                        onChange={(e) => handleCourtChange(e.target.value)}
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
                        {/* <Typography variant="body1">{match.location?.address ?? "–"}</Typography> */}
                        <Typography variant="body1">
  {match.location ? `${match.location.name} – ${match.location.address}` : "–"}
</Typography>

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
) : (  
  <Grid container spacing={1}>
    <Grid size="auto">
      <TextField
        value={localMatch.scoreA ?? ""}
        onChange={(e) =>
          handleScoreChange('scoreA', e.target.value)
        }
        inputMode="numeric"
        type="number"
        size="small"
        sx={{ width: 50 }}
      />
    </Grid>
    <Grid size="auto">
      <TextField
        value={localMatch.scoreB ?? ""}
        onChange={(e) =>
          handleScoreChange('scoreB', e.target.value)
        }
        type="number"
        size="small"
        sx={{ width: 50 }}
      />
    </Grid>
  </Grid>
)}
     
                    {/* {match.isFinished ? (
                        <Typography>
                        {match.scoreA} : {match.scoreB}
                        </Typography>
                    ):(  
                    <Grid container spacing={1}>
                        <Grid size="auto">
                            <TextField
                            value={localMatch.scoreA ?? ""}
                            onChange={(e) =>
                            handleScoreChange('scoreA', e.target.value)}
                            inputMode="numeric"
                            type="number"
                            size="small"
                            sx={{ width: 50 }}
                            />
                        </Grid>
                        <Grid size="auto">
                            <TextField
                            value={localMatch.scoreB ?? ""}
                            onChange={(e) =>
                            handleScoreChange('scoreB', e.target.value)}
                            type="number"
                            size="small"
                            sx={{ width: 50 }}
                            />
                        </Grid>
                    </Grid>
                    )} */}
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

                {!match.isFinished && editable &&(
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
                    onClick={() => handleSave}
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
}