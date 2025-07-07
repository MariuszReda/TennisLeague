import {
  Box,
  Typography,
  Grid,
  Paper,
  List,
  ListItemButton,
  ListItemText,
} from "@mui/material";

const sections = [
  { id: "general", title: "Postanowienia ogólne" },
  { id: "participation", title: "Uczestnictwo" },
  { id: "matches", title: "Zasady meczu" },
  { id: "scoring", title: "Punktacja" },
  { id: "fairplay", title: "Zasady fair play" },
];

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Regulations(){
  return (
    <Box p={2}>
      <Grid container spacing={4}>
        {/* Treść regulaminu */}
        <Grid size={{xs:12, md:9}} >
          <Paper elevation={2} sx={{ p: 3 }}>
            {sections.map((section) => (
              <Box key={section.id} id={section.id} sx={{ mb: 4 }}>
                <Typography variant="h5" gutterBottom>
                  {section.title}
                </Typography>
                <Typography variant="body1">
                  {/* Tu możesz dodać konkretny tekst dla każdej sekcji */}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  facilisi. Fusce nec bibendum quam. Mauris convallis nibh in
                  augue vestibulum, at consequat sapien dapibus.
                </Typography>
              </Box>
            ))}
          </Paper>
        </Grid>

        {/* Nawigacja */}
        <Grid size={{xs:12,md:3}}>
          <Paper elevation={1} sx={{ p: 2, position: "sticky", top: 20 }}>
            <Typography variant="h6" gutterBottom>
              Nawigacja
            </Typography>
            <List dense>
              {sections.map((section) => (
                <ListItemButton
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                >
                  <ListItemText primary={section.title} />
                </ListItemButton>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}


