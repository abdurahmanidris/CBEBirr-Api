import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from '../theme';

import SEO from '../components/seo';
import Layout from '../components/layout';

import {
  CardActionArea,
  CardActions,
  CardContent,
  Card,
  CardMedia,
  Grid,
  Typography,
  Paper,
  Button,
  List,
  ListItem,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import data from '../utils/data';
import NextLink from 'next/link';
import styles from '../styles/Home.module.css';
import { tickets } from '../data/tickets';
import { Link } from 'react-scroll';
// import { flexbox, width } from '@mui/material/node_modules/@mui/system';
import router, { useRouter } from 'next/router';

export default function IndexPage() {
  const [age, setAge] = React.useState('');
  const router = useRouter();

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const nextHandler = (e) => {
    // e.prevenDefault();
    router.push('/confirmation');
  };
  return (
    // <div>
    // <SEO title="NextJS Landing Page" />

    <Grid
      container
      spacing={0}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        py: 1,
        px: '0rem',
        // maxHeight: '',
        mx: 'auto',
      }}
    >
      <Grid item xs={12}>
        <Paper
          sx={{
            pt: '0rem',

            px: '5rem',
            boxShadow: 2,
            borderRadius: 10,
            overflowY: 'auto',
            maxHeight: '82vh',
            display: 'flex',
            justifyContent: 'center',
            mx: 'auto',
          }}
          className={styles.paper}
        >
          {/* <Paper
          sx={{ display: 'flex', justifyContent: 'center' }}
          style={{ maxHeight: '100%', overflow: 'auto' }}
        > */}
          <Grid
            container
            spacing={0}
            sx={{ padding: 5, maxHeight: '100vh' }}
            align-items="center"
          >
            {tickets.map((ticket) => (
              <Grid item xs={12} md={6} lg={3} key={ticket.name}>
                <Card
                  sx={{ borderRadius: 6, boxShadow: 3 }}
                  style={{ width: '20rem', height: 'auto', marginBlock: 10 }}
                >
                  <CardMedia
                    component="img"
                    image={ticket.image}
                    title={ticket.name}
                    sx={{ padding: 0, height: '8rem' }}
                  ></CardMedia>
                  <CardContent sx={{ padding: 0 }}>
                    <List sx={{}}>
                      <ListItem>
                        <Typography>
                          <span className={styles.eventName} sx={{ pl: 2 }}>
                            {' '}
                            {ticket.name}
                          </span>
                        </Typography>
                      </ListItem>
                      {/* <ListItem className={styles.listItem}> */}
                      <Typography sx={{ px: 3 }}>
                        {ticket.dateAndTime}
                      </Typography>
                      <Typography sx={{ px: 3 }}>{ticket.location}</Typography>
                      {/* </ListItem> */}
                      <Grid container>
                        <ListItem>
                          <Grid item xs={6}>
                            <Typography sx={{ pl: 2 }}>
                              <span className={styles.price}>
                                {' '}
                                {ticket.price * age} ETB
                              </span>
                            </Typography>
                          </Grid>
                          <Grid item xs={6}>
                            <FormControl fullWidth variant="outlined">
                              <InputLabel id="demo-simple-select-label">
                                Amount
                              </InputLabel>
                              <Select
                                labelId="amount"
                                id="amount"
                                value={age}
                                label="Amount"
                                onChange={handleChange}
                              >
                                <MenuItem value={10}>1</MenuItem>
                                <MenuItem value={20}>2</MenuItem>
                                <MenuItem value={30}>3</MenuItem>
                                <MenuItem value={30}>4</MenuItem>
                                <MenuItem value={30}>5</MenuItem>
                                <MenuItem value={30}>6</MenuItem>
                                <MenuItem value={30}>7</MenuItem>
                                <MenuItem value={30}>8</MenuItem>
                              </Select>
                            </FormControl>
                          </Grid>
                        </ListItem>
                      </Grid>
                    </List>
                  </CardContent>
                  <Grid container>
                    <Grid
                      item
                      xs={12}
                      sx={{ display: 'flex', justifyContent: 'center' }}
                    >
                      <CardActions sx={{ mx: 'auto' }}>
                        {/* <Link
                          href={'/' + ticket.id}
                          key={ticket.id}
                          sx={{ textDecoration: 'none' }}
                        > */}
                        {/* <Link href="/confirmation"> */}
                        {/* <a> */}
                        <Button
                          variant="contained"
                          size="small"
                          color="secondary"
                          sx={{}}
                          style={{
                            marginBottom: 4,
                          }}
                          onClick={nextHandler}
                        >
                          Get Ticket
                        </Button>
                        {/* </a> */}
                        {/* </Link> */}
                        {/* </Link> */}
                      </CardActions>
                    </Grid>
                  </Grid>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Grid>
    </Grid>
    // </div>
  );
}
