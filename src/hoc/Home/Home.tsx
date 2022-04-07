import React from 'react';
import Hero from '../../views/HomeHero/HomeHero';
import Services from '../../views/Services/Services';
import Welcome from '../../views/Welcome/Welcome';
import Layout from '../Layout/Layout';

const Home = () => {
    return (
        <Layout navLinkColor={false}>
            <>
                <Hero />
                <Welcome />
                <Services />
            </>
        </Layout>
    )
}

export default Home