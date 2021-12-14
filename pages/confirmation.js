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
import logo from '../public/images/logo.png';
// import { flexbox } from '@mui/system';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/home.module.css';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import confirmation from './api/confrmation/confirmation';
import router, { useRouter } from 'next/router';

export default function Confimation() {
  const {
    // register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  // const submitHandler = (e) => {
  //   // e.preventDefault();
  //   window.alert('kjhdslkj');
  // };

  // async function onSubmitForm(values) {
  //   // submitHandler(e);

  //   let config = {
  //     method: 'post',
  //     url: `${process.env.NEXT_PUBLIC_API_URL}./api/confrmation/confirmation`,
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     data: values,
  //   };

  //   try {
  //     const response = await axios(config);
  //     console.log(response);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }

  const backHandler = () => {
    router.back();
  };
  const nextHandler = () => {
    router.push('/test');
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
        py: 0,
        mx: 'auto',
      }}
    >
      <Grid item xs={12} sx={{}}>
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
                  fontFamily: "'DM Sans', sans-serif",
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
                src={logo}
                alt="logo"
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
            <p
              className={styles.description}
              sx={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Event Ticket Details:
            </p>
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
          <form onSubmit={handleSubmit()}>
            <Controller
              name="phone"
              control={control}
              rules={{
                required: false,
                minLength: 9,
              }}
              render={({ field }) => (
                <TextField
                  autoFocus
                  required
                  fullWidth
                  id="phone"
                  label="Phone Numberr"
                  type="number"
                  variant="outlined"
                  className={styles.textfield}
                  name="phone"
                  sx={{ mt: 2, mb: 1 }}
                  inputProps={{ type: 'number' }}
                  error={Boolean(errors.phone)}
                  helperText={
                    errors.phone
                      ? errors.phone.type === 'minLength'
                        ? 'Phone Number length is more than 9'
                        : 'Phone Number is required'
                      : ''
                  }
                  {...field}
                />
              )}
            ></Controller>

            <Controller
              name="pin"
              control={control}
              rules={{
                required: false,
                minLength: 6,
              }}
              render={({ field }) => (
                <TextField
                  required
                  id="pin"
                  label="PIN Number"
                  type="password"
                  fullWidth
                  autoComplete=""
                  variant="outlined"
                  className={styles.textfield}
                  inputProps={{ type: 'number' }}
                  error={Boolean(errors.pin)}
                  sx={{ my: 1 }}
                  helperText={
                    errors.pin
                      ? errors.pin.type === 'minLength'
                        ? 'Pin Number is more than 6 digit'
                        : 'Pin Number is required'
                      : ''
                  }
                  {...field}
                />
              )}
            ></Controller>

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
              sx={{ my: 1 }}
            />
            {/* <div>
              <label for="otp" className="sr-only">
                OTP
              </label>
              <input
                name="otp"
                type="number"
                ref={register({
                  required: {
                    value: true,
                    message: 'You must enter otp we have sent to you',
                  },
                  minLength: {
                    value: 6,
                    message: 'This is too short',
                  },
                  maxLength: {
                    value: 8,
                    message: 'This is too long',
                  },
                })}
                className={`block w-full shadow py-3 px-4 placeholder-gray-500 focus:ring-blue-500 focus:border-blue-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 ${
                  errors.otp ? 'ring-2 ring-red-500' : null
                }`}
                placeholder="enter otp here... "
              />
              <span className="text-red-400 text-sm py-2">
                {errors?.otp?.message}
              </span>
            </div> */}

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
                onClick={backHandler}
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
                onClick={nextHandler}
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
