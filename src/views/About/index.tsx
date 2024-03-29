import React from 'react';
//components
import AboutHero from './Hero/AboutHero';
import Vision from './Vision/Vision';
import TheTeam from './TheTeam/TheTeam';
import OurPartners from './OurPartners/OurPartners';
//hoc component
import Layout from '../../hoc/Layout/Layout';

const About = () => {
  return (
    <Layout navLinkColor={true}>
      <>
        <AboutHero />
        <Vision />
        <OurPartners />
      </>
    </Layout>
  );
};

export default About;
