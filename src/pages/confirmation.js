import {
  Button,
  Card,
  CardMedia,
  Grid,
  List,
  ListItem,
  Paper,
  TextField,
  Typography,
  Text,
} from '@mui/material';
// import { flexbox } from '@mui/system';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../../styles/home.module.css';
// import CopyRight from './components/CopyRight';
import { useForm, Controller } from 'react-hook-form';
// import Layout from './components/Layout';

export default function Home() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
    },
  });

  const onSubmit = (e, formData) => {
    e.preventDefault();
  };
  return (
    // <Layout>
    <Grid
      container
      spacing={3}
      className={styles.grid}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        py: 5,
        px: 0,
      }}
    >
      <Grid item xs={12} md={} sx={{}}>
        <Paper
          sx={{ pt: '2rem', px: '5rem', boxShadow: 5, borderRadius: 15 }}
          className={styles.paper}
        >
          <Grid container justifyContent="center" spacing={3}>
            <Grid item xs={9}>
              <Typography
                className={styles.title}
                sx={{
                  fontWeight: 900,
                  fontSize: '1.9rem',
                  lineHeight: '2rem',
                  mb: '0rem',
                }}
              >
                Get Your Tickets
              </Typography>
            </Grid>
            <Grid
              item
              xs={3}
              sx={{ mt: ' -1rem', mr: ' -5rem', ml: ' 1rem', mb: '1rem' }}
            >
              <Image
                src="/cbebirrlogo.png"
                alt="CBEBirr"
                width={100}
                height={100}
                className=""
              />
            </Grid>
          </Grid>
          <Grid
            item
            sx={{
              border: 1,
              borderRadius: 4,
              borderColor: 'purple',
              px: 2,
            }}
          >
            <p className={styles.description}>Event Ticket Details:</p>
            <List sx={{}}>
              <ListItem>
                <Typography>
                  <span className={styles.listTitle}>Event Name: </span>
                  Christmas Concert
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  <span className={styles.listTitle}>Date: </span>
                  December 20,2021
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  <span className={styles.listTitle}>Time: </span>4:00 PM
                  LocalTime
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  <span className={styles.listTitle}>Location:</span> Hilton
                  Hotel
                </Typography>
              </ListItem>
              <ListItem>
                <Typography>
                  <span className={styles.listTitle}>Price:</span>
                  <span className={styles.price}> 1000 ETB</span>
                </Typography>
              </ListItem>
            </List>
            {/* <hr sx={{}} className={styles.hr} /> */}
          </Grid>
          <form onSubmit="">
            <TextField
              margin="normal"
              autoFocus
              required
              fullWidth
              id="phone"
              label="Phone Number"
              type="number"
              autoComplete=""
              variant="outlined"
              className={styles.textfield}
              name="phone"
            />
            <TextField
              required
              id="pin"
              label="PIN Number"
              type="password"
              fullWidth
              autoComplete=""
              variant="outlined"
              className={styles.textfield}
            />
            <TextField
              required
              id="birthDate"
              label=""
              type="date"
              fullWidth
              autoComplete=""
              helperText="Date of Birth"
              variant="outlined"
              className={styles.textfield}
              sx={{}}
            />

            <Grid item sx={{ display: 'flex', justifyContent: 'end' }}>
              <Button
                type=""
                fullWidth
                variant="outlined"
                sx={{
                  mt: 3,
                  mb: 2,
                  mx: 5,
                  width: 150,
                  borderColor: 'purple',
                  color: 'purple',
                }}
              >
                Back
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  width: 150,
                  backgroundColor: 'purple',
                }}
                onPress={handleSubmit(onSubmit)}
              >
                Next
              </Button>
            </Grid>
          </form>
          <Typography sx={{ paddingTop: 5, pb: 2 }}>
            {' '}
            Powered by <span className={styles.logo}>CBEBirr</span>
          </Typography>
        </Paper>
      </Grid>
    </Grid>
    // </Layout>
  );
}
