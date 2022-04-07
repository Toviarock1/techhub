import axios from 'axios';
import React, { useState } from 'react';
//react-boostrap
import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap'
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import classes from './ContactUs.module.css';

const ContactUs = () => {
    const [validated, setValidated] = useState(false);
    const [loading, setLoading] = useState(false);
    const [contactForm, setContactForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleSubmit = (event: any): void => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        event.preventDefault();
        setValidated(true);
        if (form.checkValidity() === true) {
            console.log(contactForm);
            axios.post('https://formsubmit.co/ajax/boiuattechhub@gmail.com', {
                name: contactForm.name,
                email: contactForm.email,
                subject: contactForm.subject,
                message: contactForm.message
            }).then(res => {
                console.log(res);
                setLoading(false);
            }).catch(err => {
                setLoading(false);
                console.log(err);
            })
        }
    };
    return (
        <div className='px-20 py-44'>
            <Container fluid>
                <Row>
                    <Col xs={5}>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formGroupName">
                                <Form.Label>Your Name (required)</Form.Label>
                                <Form.Control type="text" onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })} required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupEmail">
                                <Form.Label>Your Email (required)</Form.Label>
                                <Form.Control type="email" onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })} required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGroupSubject">
                                <Form.Label>Subject</Form.Label>
                                <Form.Control type="text" onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })} required />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Your Message</Form.Label>
                                <Form.Control as="textarea" rows={7} onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })} required />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="FormBtn">
                                {loading ? <Spinner className='mx-4' animation="border" variant="warning" /> : "Submit"}
                            </Button>
                        </Form>
                    </Col>
                    <Col>
                        <div className='text-center'>
                            <h2 className={classes.Title}>Follow us</h2>
                            <p className={classes.Description}>boiuattechhub@gmail.com</p>
                            <ul className='flex justify-center p-0'>
                                <li className='px-2'>
                                    <a href="#">
                                        <FaLinkedin className={'text-black text-xl'} />
                                    </a>
                                </li>
                                <li className='px-2'>
                                    <a href="#">
                                        <FaFacebook className={'text-black text-xl'} />
                                    </a>
                                </li>
                                <li className='px-2'>
                                    <a href="#">
                                        <FaTwitter className={'text-black text-xl'} />
                                    </a>
                                </li>
                                <li className='px-2'>
                                    <a href="#">
                                        <FaInstagram className={'text-black text-xl'} />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col>
                        <h2 className={classes.Title}>Our Address</h2>
                        <p className={classes.Description}>
                            Obinze, Along Owerri-Port-harcourt
                            Expressway,  Opposite Whitehouse Bus Stop,

                            Owerri, Imo State.
                        </p>
                        <p className={classes.Description}>
                            Call: +234-703-849-9799<br />
                            Email: info@heartlandincubator.com
                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ContactUs