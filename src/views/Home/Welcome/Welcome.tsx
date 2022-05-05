import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import PrimaryBtn from './../../../components/PrimaryBtn/PrimaryBtn';
import WelcomeImage from "./../../../assets/svgs/Rectangle 10.svg";
import classes from './Welcome.module.css';

const Welcome = () => {
  return (
    <div className='bg-white md:px-20 py-32 pb-48'>
      <Container fluid>
        <div>
          <Row>
            <Col xs={12} sm={6}>
              <h2 className={classes.MobileWelcomeTitle}>Welcome to BOI-UAT Incubation Hub. </h2>
              <img src={WelcomeImage} alt="Tech hub working space" />
            </Col>
            <Col>
              <h2 className={classes.WelcomeTitle}>Welcome to <br />BOI-UAT Incubation Hub. </h2>
              <p className={`${classes.WelcomeDescription} mt-16`}>
                BOI-UAT Incubation Hub is established to solve the problem of inadequate support structure, mentorship system for incubating, or developing business ideas by young people in south-south Nigeria.
              </p>
              <p className={`${classes.WelcomeDescription} mt-11`}>
                Incubation at BOI-UAT helps early stage entrepreneurs through product development, growth hacking and building a sustainable business model.
              </p>
              <p className={`${classes.WelcomeDescription} mt-11`}>
                We provide seed capital, office space, high internet access, meeting room and other facilities.
              </p>
              <PrimaryBtn classStyle='PrimaryBtn' />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default Welcome