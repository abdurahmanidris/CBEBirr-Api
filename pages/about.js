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
            pt: '3rem',
            px: '2rem',
            boxShadow: 3,
            borderRadius: 15,
            overflowY: 'auto',
            height: '40vh',
            maxHeight: '80vh',
            textAlign: 'center',
          }}
        >
          <Typography variant="h4" sx={{ mb: 2 }}>
            About Us
          </Typography>
          <Typography>
            CBE Birr is a mobile based banking whereby the bank selects, trains
            and authorizes agents to provide banking services on behalf of the
            bank through a mobile phone. It is deployed as a means of extending
            financial services to the unbanked segment of the public.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default About;
