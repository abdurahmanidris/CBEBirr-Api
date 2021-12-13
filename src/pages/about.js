import { Grid, Paper, Typography } from '@mui/material';

const About = () => {
  return (
    <Grid
      container
      spacing={0}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        py: 2,
        px: 15,
        maxHeight: '',
      }}
    >
      <Grid item xs={12} justifyContent="center" justifyItems="center">
        <Paper
          sx={{
            pt: '1rem',
            px: '2rem',
            boxShadow: 5,
            borderRadius: 15,
            overflowY: 'auto',
            height: '40vh',
            maxHeight: '80vh',
          }}
        >
          <Typography>lkhfdsalhkadlyhlkdsahl</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default About;
