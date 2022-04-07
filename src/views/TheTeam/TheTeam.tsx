import React from 'react'
import { Container, Card, Button, Col, Row } from 'react-bootstrap'
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import classes from './TheTeam.module.css';
import Image from './../../assets/images/professionalpics.webp';
import MercyImage from './../../assets/images/IMG-20220309-WA0032.jpg';

const TheTeam = () => {
    return (
        <div className='px-20 py-44'>
            <Container fluid>
                <div>
                    <div className={`${classes.TheTeamContent}`}>
                        <h2>The Team</h2>
                        <h3>A focus on leadership</h3>
                        <p>Riversands I-Hub is led by a team of dynamic, committed professionals with diverse backgrounds and experience.</p>
                    </div>
                    <Row>
                        <Col>
                            <Card className='mt-11' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={Image} />
                                <Card.Body>
                                    <Card.Title>Managing Director</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <div>
                                        <ul className='flex'>
                                            <li className='mx-2'><a href="#"><FaLinkedin className={`text-xl  text-black`} /></a></li>
                                            <li className='mx-2' ><a href="#"><FaLinkedin className={`text-xl  text-black`} /></a></li>
                                            <li className='mx-2' ><a href="#"><FaLinkedin className={`text-xl  text-black`} /></a></li>
                                            <li className='mx-2' ><a href="#"><FaLinkedin className={`text-xl  text-black`} /></a></li>
                                        </ul>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='mt-11' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={Image} />
                                <Card.Body>
                                    <Card.Title>Managing Director</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <div>
                                        <ul className='flex'>
                                            <li className='mx-2'><a href="#"><FaLinkedin className={`text-xl  text-black`} /></a></li>
                                            <li className='mx-2' ><a href="#"><FaLinkedin className={`text-xl  text-black`} /></a></li>
                                            <li className='mx-2' ><a href="#"><FaLinkedin className={`text-xl  text-black`} /></a></li>
                                            <li className='mx-2' ><a href="#"><FaLinkedin className={`text-xl  text-black`} /></a></li>
                                        </ul>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='mt-11' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={Image} />
                                <Card.Body>
                                    <Card.Title>Managing Director</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <div>
                                        <ul className='flex'>
                                            <li className='mx-2'><a href="#"><FaLinkedin className={`text-xl  text-black`} /></a></li>
                                            <li className='mx-2' ><a href="#"><FaLinkedin className={`text-xl  text-black`} /></a></li>
                                            <li className='mx-2' ><a href="#"><FaLinkedin className={`text-xl  text-black`} /></a></li>
                                            <li className='mx-2' ><a href="#"><FaLinkedin className={`text-xl  text-black`} /></a></li>
                                        </ul>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='mt-11' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={Image} />
                                <Card.Body>
                                    <Card.Title>Managing Director</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <div>
                                        <ul className='flex'>
                                            <li className='mx-2'><a href="#"><FaLinkedin className={`text-xl  text-black`} /></a></li>
                                            <li className='mx-2' ><a href="#"><FaLinkedin className={`text-xl  text-black`} /></a></li>
                                            <li className='mx-2' ><a href="#"><FaLinkedin className={`text-xl  text-black`} /></a></li>
                                            <li className='mx-2' ><a href="#"><FaLinkedin className={`text-xl  text-black`} /></a></li>
                                        </ul>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='mt-11' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={Image} />
                                <Card.Body>
                                    <Card.Title>Managing Director</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <div>
                                        <ul className='flex'>
                                            <li className='mx-2'><a href="#"><FaLinkedin className={`text-xl  text-black`} /></a></li>
                                            <li className='mx-2' ><a href="#"><FaLinkedin className={`text-xl  text-black`} /></a></li>
                                            <li className='mx-2' ><a href="#"><FaLinkedin className={`text-xl  text-black`} /></a></li>
                                            <li className='mx-2' ><a href="#"><FaLinkedin className={`text-xl  text-black`} /></a></li>
                                        </ul>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='mt-11' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={Image} />
                                <Card.Body>
                                    <Card.Title>Managing Director</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <div>
                                        <ul className='flex'>
                                            <li className='mx-2'><a href="#"><FaLinkedin className={`text-xl  text-black`} /></a></li>
                                            <li className='mx-2' ><a href="#"><FaLinkedin className={`text-xl  text-black`} /></a></li>
                                            <li className='mx-2' ><a href="#"><FaLinkedin className={`text-xl  text-black`} /></a></li>
                                            <li className='mx-2' ><a href="#"><FaLinkedin className={`text-xl  text-black`} /></a></li>
                                        </ul>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='mt-11' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={Image} />
                                <Card.Body>
                                    <Card.Title>Managing Director</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <div>
                                        <ul className='flex'>
                                            <li className='mx-2'><a href="#"><FaLinkedin className={`text-xl  text-black`} /></a></li>
                                            <li className='mx-2' ><a href="#"><FaLinkedin className={`text-xl  text-black`} /></a></li>
                                            <li className='mx-2' ><a href="#"><FaLinkedin className={`text-xl  text-black`} /></a></li>
                                            <li className='mx-2' ><a href="#"><FaLinkedin className={`text-xl  text-black`} /></a></li>
                                        </ul>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='mt-11' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={Image} />
                                <Card.Body>
                                    <Card.Title>Managing Director</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <div>
                                        <ul className='flex'>
                                            <li className='mx-2'><a href="#"><FaLinkedin className={`text-xl  text-black`} /></a></li>
                                            <li className='mx-2' ><a href="#"><FaLinkedin className={`text-xl  text-black`} /></a></li>
                                            <li className='mx-2' ><a href="#"><FaLinkedin className={`text-xl  text-black`} /></a></li>
                                            <li className='mx-2' ><a href="#"><FaLinkedin className={`text-xl  text-black`} /></a></li>
                                        </ul>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='mt-11' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={Image} />
                                <Card.Body>
                                    <Card.Title>Managing Director</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <div>
                                        <ul className='flex'>
                                            <li className='mx-2'><a href="#"><FaLinkedin className={`text-xl  text-black`} /></a></li>
                                            <li className='mx-2' ><a href="#"><FaLinkedin className={`text-xl  text-black`} /></a></li>
                                            <li className='mx-2' ><a href="#"><FaLinkedin className={`text-xl  text-black`} /></a></li>
                                            <li className='mx-2' ><a href="#"><FaLinkedin className={`text-xl  text-black`} /></a></li>
                                        </ul>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className='mt-11' style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={Image} />
                                <Card.Body>
                                    <Card.Title>Managing Director</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <div>
                                        <ul className='flex'>
                                            <li className='mx-2'><a href="#"><FaLinkedin className={`text-xl  text-black`} /></a></li>
                                            <li className='mx-2' ><a href="#"><FaLinkedin className={`text-xl  text-black`} /></a></li>
                                            <li className='mx-2' ><a href="#"><FaLinkedin className={`text-xl  text-black`} /></a></li>
                                            <li className='mx-2' ><a href="#"><FaLinkedin className={`text-xl  text-black`} /></a></li>
                                        </ul>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>

                </div>
            </Container>
        </div>
    )
}

export default TheTeam