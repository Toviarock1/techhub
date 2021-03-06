import React from 'react';
import Hero from '../../views/Home/HomeHero/HomeHero';
import Services from '../../views/Home/Services/Services';
import Welcome from '../../views/Home/Welcome/Welcome';
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