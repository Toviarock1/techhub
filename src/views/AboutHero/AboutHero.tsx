import React from 'react'
import { Button, Container } from 'react-bootstrap';
import { FaArrowCircleRight } from "react-icons/fa";
import PrimaryBtn from '../../components/PrimaryBtn/PrimaryBtn';
import classes from './AboutHero.module.css';

const HomeHero = () => {
    return (
        <div className={`${classes.BackgroundBg} h-120 px-20 pt-44`}>
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