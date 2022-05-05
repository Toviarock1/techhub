import React from 'react'
import { Container } from 'react-bootstrap';
import classes from './Vision.module.css';

const Vision = () => {
    return (
        <div className={`${classes.BackgroundBg} md:px-20 py-44`}>
            <Container fluid>
                <div>
                    <div className={`${classes.OurVisionCard} bg-blue-900 p-5 text-white rounded-3xl md:w-120`}>
                        <h2>Our Vision</h2>
                        <p>
                            To be a leading entrepreneurial ecosystem,
                            the go-to platform for entrepreneurs and small businesses to
                            accelerate their growth and build strong, sustainable businesses.
                            To create a thriving, successful future for all South
                            Africans, through inclusive economic growth.
                        </p>
                    </div>
                    <div className={`${classes.OurMissionCard} bg-white p-5 text-black rounded-3xl md:ml-64 md:w-120`}>
                        <h2>Our Mission</h2>
                        <p>
                            To create a growing and powerfully enabling
                            ecosystem of services, resources and learning experiences.
                            To promote high growth entrepreneurs and
                            businesses with the intention to attract investors
                            and customers.
                            To collaborate with local and international business and academia.
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Vision