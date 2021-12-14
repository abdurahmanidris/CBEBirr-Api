import { Grid, Paper, Typography } from '@mui/material';
import Image from 'next/image';
import { Phone } from 'react-icons';
import {
  FaPhone,
  FaPhoneAlt,
  FaPhoneSlash,
  FaPhoneSquare,
  FaPhoneVolume,
} from 'react-icons/fa';
import { IoIosCall, IoMdMail } from 'react-icons/io';

const Contact = () => {
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
            pt: '2rem',
            px: '2rem',
            boxShadow: 3,
            borderRadius: 15,
            overflowY: 'auto',
            height: '40vh',
            maxHeight: '80vh',
            textAlign: 'center',
          }}
        >
          <Typography
            variant="h4"
            sx={{
              mb: '2rem',
              fontWeight: 700,
              textDecoration: '',
              color: 'black',
            }}
          >
            Contact Us
          </Typography>
          <Grid container spacing={3} flex justifyContent="center">
            <Grid item xs={4}>
              {/* <Image src="" alt="Phone"></Image> */}
              <FaPhone
                style={{ fontSize: '5rem', padding: '1rem', color: 'purple' }}
              />
              <Typography sx={{ fontWeight: 700, pt: '1rem' }}>
                PHONE
              </Typography>
              <Typography sx={{ fontWeight: 700 }}>+ 0111334455</Typography>
            </Grid>
            <Grid item xs={4}>
              <FaPhoneVolume style={{ fontSize: '5rem', color: 'purple' }} />
              <Typography sx={{ fontWeight: 700, pt: '1rem' }}>
                CALL FREE
              </Typography>
              <Typography sx={{ fontWeight: 700 }}>+ 951</Typography>
            </Grid>
            <Grid item xs={4}>
              <IoMdMail style={{ fontSize: '5rem', color: 'purple' }} />
              <Typography sx={{ fontWeight: 700, pt: '1rem' }}>
                EMAIL
              </Typography>
              <Typography sx={{ fontWeight: 700 }}>cbe.et.com</Typography>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Contact;
