import React from 'react';
import { ThemeProvider } from 'theme-ui';
import theme from '../theme';

import SEO from '../components/seo';
import Layout from '../components/layout';
import Banner from '../sections/banner';
import KeyFeature from '../sections/key-feature';
import K from '../sections/k';

import ServiceSection from '../sections/service-section';
import Feature from '../sections/feature';
import CoreFeature from '../sections/core-feature';
import Package from '../sections/package';
import TeamSection from '../sections/team-section';
import TestimonialCard from '../sections/testimonial';
import WorkFlow from '../sections/workflow';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <SEO title="4 Steps to Get Ticket" />
        {/* <Banner /> */}
        <KeyFeature />
        {/* <K /> */}
        {/* <ServiceSection /> */}
        {/* <Feature /> */}
        {/* <CoreFeature /> */}
        {/* <tickets /> */}
        {/* <Package /> */}
        {/* <WorkFlow /> */}
        {/* <TeamSection /> */}
        {/* <TestimonialCard /> */}
      </div>
    </ThemeProvider>
  );
}
