import * as React from 'react';

import Layout from '../components/MyLayout';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Apartments from '../components/Apartments';
import Contact from '../components/Contact';

const IndexPage: React.FunctionComponent = () => {
  return (
    <Layout>
      <Hero />
      <AboutUs id="about-us" />
      <Apartments id="apartments" />
      <Contact />
    </Layout>
  );
};

export default IndexPage;
