import React from 'react'
import { Container } from 'react-bootstrap';
import classes from './HomeHero.module.css';

const HomeHero = () => {
    return (
        <div className={`${classes.BackgroundBg} h-120 px-20 pt-44`}>
            <Container fluid>
                <div className='text-black'>
                    <h1 className={classes.HeroTitle}>BOI-UAT <br />
                        <span className="text-red-500">Incubation</span>
                        <br /> Hub<span className="text-red-500">.</span>
                    </h1>
                    <p className={classes.HeroParagraph}>
                        Learn how to code efficiently and create apps and games that work. Consult with best experts to apply skills in action.
                    </p>
                </div>
            </Container>
        </div>
    )
}

export default HomeHero