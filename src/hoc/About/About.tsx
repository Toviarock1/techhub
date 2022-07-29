import React from 'react';
//components
import AboutHero from '../../views/About/Hero/AboutHero'
import Vision from '../../views/About/Vision/Vision';
import TheTeam from '../../views/About/TheTeam/TheTeam';
import OurPartners from '../../views/About/OurPartners/OurPartners';
//hoc component
import Layout from '../Layout/Layout';

const About = () => {
    return (
        <Layout navLinkColor={true}>
            <>
                <AboutHero />
                <Vision />
                <TheTeam />
                <OurPartners />
            </>
        </Layout>
    )
}

export default About