import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
//css
import classes from './Services.module.css';
//images
import TrainingImage from './../../assets/svgs/Rectangle 15.svg';
import CoWorkingSpaceImage from './../../assets/svgs/Rectangle 19.svg';
import IncubationImage from './../../assets/svgs/Rectangle 20.svg';
import TechMeetUpImage from './../../assets/svgs/Rectangle 21.svg';

const Services = () => {
    return (
        <div className='bg-white px-20 py-30 pb-48'>
            <Container>
                <div>
                    <div className='text-center mb-24'>
                        <h2 className={classes.ServicesTitle}>Our Services</h2>
                    </div>
                    <Row>
                        <Col>
                            <div className='flex justify-center'>
                                <img src={TrainingImage} alt="" />
                            </div>
                            <div>
                                <p className={classes.TrainingTitle}>TRAINING</p>
                            </div>
                        </Col>
                        <Col>
                            <div className='flex justify-center'>
                                <img src={CoWorkingSpaceImage} alt="" />
                            </div>
                            <div>
                                <p className={classes.TrainingTitle}>CO-WORKING</p>
                            </div>
                        </Col>
                        <Col>
                            <div className='flex justify-center'>
                                <img src={IncubationImage} alt="" />
                            </div>
                            <div>
                                <p className={classes.TrainingTitle}>INCUBATION</p>
                            </div>
                        </Col>
                        <Col>
                            <div className='flex justify-center'>
                                <img src={TechMeetUpImage} alt="" />
                            </div>
                            <div>
                                <p className={classes.TrainingTitle}>TECH MEET-UP</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    )
}

export default Services