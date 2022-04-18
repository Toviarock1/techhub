import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import BankOfIndustryLogo from './../../assets/svgs/image 6.svg';
import VatebraTechHubLogo from './../../assets/svgs/image 7.svg';
import UatLogo from './../../assets/svgs/image 8.svg';
import classes from './OurPartners.module.css';

const OurPartners = () => {
    return (
        <div className='md:px-20 py-44'>
            <Container fluid>
                <div className='mb-16 md:mb-36 text-center'>
                    <h2 className={classes.Title}>Our founding partners</h2>
                </div>
                <Row className='flex items-center'>
                    <Col>
                        <img className='m-auto block' src={BankOfIndustryLogo} alt="" />
                    </Col>
                    <Col>
                        <img className='m-auto block' src={VatebraTechHubLogo} alt="" />
                    </Col>
                    <Col>
                        <img className='m-auto block' src={UatLogo} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default OurPartners