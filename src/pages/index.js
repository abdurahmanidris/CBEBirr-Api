import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from 'theme';

import SEO from 'components/seo';
import Layout from 'components/layout';
// import Banner from '../sections/banner';
// import KeyFeature from '../sections/key-feature';
// import ServiceSection from '../sections/service-section';
// import Feature from '../sections/feature';
// import CoreFeature from '../sections/core-feature';
// import WorkFlow from '../sections/workflow';
// import Package from '../sections/package';
// import TeamSection from '../sections/team-section';
// import TestimonialCard from '../sections/testimonial';
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
} from '@mui/material';
import data from '../../utils/data';
import NextLink from 'next/link';
import styles from '../../styles/Home.module.css';
import { tickets } from '../../data/tickets';
import { Link } from 'react-scroll';
import { flexbox, width } from '@mui/material/node_modules/@mui/system';

export default function IndexPage() {
  return (
    <div>
      <SEO title="NextJS Landing Page" />

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
              maxHeight: '80vh',
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
                            <span className={styles.eventName}>
                              {' '}
                              {ticket.name}
                            </span>
                          </Typography>
                        </ListItem>
                        <ListItem className={styles.listItem}>
                          <Typography>{ticket.dateAndTime}</Typography>
                        </ListItem>

                        <ListItem className={styles.listItem}>
                          <Typography>{ticket.location}</Typography>
                        </ListItem>
                        <ListItem>
                          <Typography>
                            <span className={styles.price}>
                              {' '}
                              {ticket.price} ETB
                            </span>
                          </Typography>
                        </ListItem>
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
                          <Link href="/confirmation">
                            <a>
                              <Button
                                variant="contained"
                                size="small"
                                color="secondary"
                                sx={{}}
                                style={{
                                  marginBottom: 4,
                                }}
                              >
                                Get Ticket
                              </Button>
                            </a>
                          </Link>
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
    </div>
  );
}
