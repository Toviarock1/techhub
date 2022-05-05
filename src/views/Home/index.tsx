import React from 'react';
//components
import Hero from './HomeHero/HomeHero';
import Services from './Services/Services';
import Welcome from './Welcome/Welcome';
import Layout from './../../hoc/Layout/Layout';

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