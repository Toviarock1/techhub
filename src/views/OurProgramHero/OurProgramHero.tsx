import React from 'react'
import { Container } from 'react-bootstrap';
import classes from './OurProgramHero.module.css';

const OurProgramHero = () => {
    return (
        <div className={`${classes.BackgroundBg} h-120 md:px-20 pt-44`}>
            <Container fluid>
                <div className='text-black mt-20 flex justify-center items-center flex-col'>
                    <h1 className={`${classes.HeroTitle} text-center`}>Our Programs</h1>
                </div>
            </Container>
        </div>
    )
}

export default OurProgramHero