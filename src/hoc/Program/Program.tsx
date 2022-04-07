import React from 'react'
import OurProgram from '../../views/OurProgram/OurProgram'
import OurProgramHero from '../../views/OurProgramHero/OurProgramHero'
import Layout from '../Layout/Layout'

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