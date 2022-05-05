import React from 'react';
//react-bootstrap
import { Container } from 'react-bootstrap';
//components
import PrimaryBtn from '../../../components/PrimaryBtn/PrimaryBtn';
//css
import classes from './AboutHero.module.css';

const HomeHero = () => {
    return (
        <div className={`${classes.BackgroundBg} md:h-120 md:px-20 pb-11 pt-44`}>
            <Container fluid>
                <div className='text-black mt-20 flex justify-center items-center flex-col'>
                    <h1 className={`${classes.HeroTitle} text-center`}>BOI -UAT Incubation Hub: the center for technovation and enterprise education.</h1>
                    <PrimaryBtn classStyle="PrimaryBtn text-center mt-10" />
                </div>
            </Container>
        </div>
    )
}

export default HomeHero