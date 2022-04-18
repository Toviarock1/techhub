import React from 'react';
//components
import AboutHero from '../../views/AboutHero/AboutHero'
import Vision from '../../views/Vision/Vision';
import TheTeam from '../../views/TheTeam/TheTeam';
import OurPartners from '../../views/OurPartners/OurPartners';
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