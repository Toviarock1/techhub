import React from 'react';
//components
import OurProgram from './OurProgram/OurProgram'
import OurProgramHero from './OurProgramHero/OurProgramHero'
import Layout from './../../hoc/Layout/Layout'

const Program = () => {
    return (
        <Layout navLinkColor={true}>
            <>
                <OurProgramHero />
                <OurProgram />
            </>
        </Layout>
    )
}

export default Program