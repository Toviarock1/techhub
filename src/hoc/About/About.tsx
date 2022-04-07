import React from 'react'
import AboutHero from '../../views/AboutHero/AboutHero'
import Vision from '../../views/Vision/Vision';
import TheTeam from '../../views/TheTeam/TheTeam';
import Footer from '../../views/Footer/Footer';
import OurPartners from '../../views/OurPartners/OurPartners';
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