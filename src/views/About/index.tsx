import React from "react";
//components
import AboutHero from "./Hero/AboutHero";
import Vision from "./Vision/Vision";
import TheTeam from "./TheTeam/TheTeam";
//hoc component
import Layout from "../../hoc/Layout/Layout";

const About = () => {
  return (
    <Layout navLinkColor={true}>
      <>
        <AboutHero />
        <Vision />
        <TheTeam />
      </>
    </Layout>
  );
};

export default About;
