/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';
import { Card, Image, Text, Heading, Button } from 'theme-ui';
import { border, shadows } from '@mui/material/node_modules/@mui/system';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Fast Performance',
    title: 'Fast Performance',
    text: 'Get your concert via cbe birr',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Partnership deal',
    title: 'Partnership deal',
    text: 'Work with us when ever you think about preparing concert',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Pro Subscriptionkkkkkk',
    title: 'Intergrity',
    text: 'We care alot about your privciy and security.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Customer Support',
    title: 'Customer Support',
    text: 'We are here to support you anytime.',
  },
];

export default function K() {
  return (
    <section sx={{ variant: 'section.KeyFeature' }} id="feature">
      <Container>
        <SectionHeader slogan="SELECT AND BUY YOUR DESIRED TICKETS" />
        <Grid sx={styles.grid}>
          {/* <FeatureCardColumn
            key={data[1].id}
            src={data[1].imgSrc}
            alt={data[1].altText}
            title={data[1].title}
            text={data[1].text}
          /> */}
          <Card
            sx={{
              maxWidth: 300,
              boxShadow: '0 0 3px 5px rgba(0, 0, 0, .125)',
              border: 2,
              borderColor: 'primary',
            }}
          >
            <Image src={data[1].imgSrc} sx={{ justifyContent: 'center' }} />
            <Heading as="h3">Christmas Concert</Heading>
            <Text>Addis Abeba, Ethiopia</Text>
            <Text>Moday January 11, 2022</Text>
            <Text>4:00 PM local Time</Text>

            <Heading as="h1" sx={{ color: 'purple', fontWeight: 900 }}>
              1000 Birr
            </Heading>

            <Button
              variant="secondary"
              // sx={{
              //   my: 5,
              //   color: 'purple',
              //   borderColor: 'purple',
              //   mx: 8,
              // }}
              sx={styles.button}
            >
              BUY
            </Button>
          </Card>

          <Card
            sx={{
              maxWidth: 300,
              boxShadow: '0 0 3px 5px rgba(0, 0, 0, .125)',
              border: 2,
              borderColor: 'primary',
            }}
          >
            <Image src={data[1].imgSrc} sx={{ justifyContent: 'center' }} />
            <Heading as="h3">Christmas Concert</Heading>
            <Text>Addis Abeba, Ethiopia</Text>
            <Text>Moday January 11, 2022</Text>
            <Text>4:00 PM local Time</Text>

            <Heading as="h1" sx={{ color: 'purple', fontWeight: 900 }}>
              1000 Birr
            </Heading>

            <Button
              variant="secondary"
              // sx={{
              //   my: 5,
              //   color: 'purple',
              //   borderColor: 'purple',
              //   mx: 8,
              // }}
              sx={styles.button}
            >
              BUY
            </Button>
          </Card>

          <Card
            sx={{
              maxWidth: 300,
              boxShadow: '0 0 3px 5px rgba(0, 0, 0, .125)',
              border: 2,
              borderColor: 'primary',
            }}
          >
            <Image src={data[1].imgSrc} sx={{ justifyContent: 'center' }} />
            <Heading as="h3">Christmas Concert</Heading>
            <Text>Addis Abeba, Ethiopia</Text>
            <Text>Moday January 11, 2022</Text>
            <Text>4:00 PM local Time</Text>

            <Heading as="h1" sx={{ color: 'purple', fontWeight: 900 }}>
              1000 Birr
            </Heading>

            <Button
              variant="secondary"
              // sx={{
              //   my: 5,
              //   color: 'purple',
              //   borderColor: 'purple',
              //   mx: 8,
              // }}
              sx={styles.button}
            >
              BUY
            </Button>
          </Card>
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
  button: {
    mx: 'auto',
    justifyContent: 'center',
    my: 5,
    color: 'purple',
    borderColor: 'purple',
    marginLeft: '30%',
  },
};
