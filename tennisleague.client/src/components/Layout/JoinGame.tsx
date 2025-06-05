import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography, Popover, type PopoverOrigin, Box } from '@mui/material';

interface JoinGameProps {
  anchorEl: HTMLElement | null;
  open: boolean;
  onClose: () => void;
}

export default function JoinGame({open, onClose,anchorEl}: JoinGameProps){
  const id = open ? 'join-game-popover' : undefined;

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' } as PopoverOrigin}
      transformOrigin={{ vertical: 'top', horizontal: 'center' } as PopoverOrigin}
      PaperProps={{
        sx: {
          padding: 2,
          width: 300,
          borderRadius: 2,
          boxShadow: 6,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        Witaj w lidze!
      </Typography>
      <Typography variant="body2">
        Dołącz do gry, sprawdź mecze i zmierz się z przyjaciółmi!
      </Typography>
      <Box mt={2}>
        <Button fullWidth variant="contained" color="primary">
          Rozpocznij
        </Button>
      </Box>
      <Box mt={1}>
        <Typography variant="body2">
          Pierwszy raz? <Button size="small">Załóż konto</Button>
        </Typography>
      </Box>
    </Popover>
  );

}