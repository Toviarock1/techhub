import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={`${classes.Footer} bg-green-900 pt-16 pb-2`}>
      <div className="border-white border-y-2 py-16">
        <div className="md:px-20">
          <Container fluid>
            <div>
              <Row>
                <Col className="space-y-2">
                  <div>
                    <Link to={'/about'} className="text-white no-underline">
                      About us
                    </Link>
                  </div>
                  <div>
                    <Link to="/contact" className="text-white no-underline">
                      Contact us
                    </Link>
                  </div>
                  <div>
                    <Link to="/important info" className="text-white no-underline">
                      Important info
                    </Link>
                  </div>
                </Col>

                <Col lg={5} className="">
                  <div className="mt-11 md:mt-auto w-96">
                    <Form>
                      <Form.Group>
                        <Form.Label className="text-white">
                          Subcribe to our newsletter:
                        </Form.Label>
                        <div className="flex">
                          <Row>
                            <Col sm={8}>
                              <Form.Control
                                className={`${classes.FooterInput}`}
                                type="email"
                                placeholder="Your Email"
                              />
                            </Col>
                            <Col xs={4}>
                              <Button className={classes.NewsletterBtn}>
                                Subcribe
                              </Button>
                            </Col>
                          </Row>
                        </div>
                      </Form.Group>
                    </Form>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </div>
      <div className="md:px-20 mt-4">
        <Row className="mr-0 md:mr-auto">
          <Col xs={12} sm={6}>
            <p className="text-white text-xs">
              &copy; BOI-UAT hub | All Rights Reserved
            </p>
          </Col>
          <Col xs={12} sm={6}>
            <div className="flex justify-end">
              <div className="flex">
                <div className="px-2">
                  <a href="#">
                    <FaLinkedin className="text-xl text-white" />
                  </a>
                </div>
                <div className="px-2">
                  <a href="#">
                    <FaFacebook className="text-xl text-white" />
                  </a>
                </div>
                <div className="px-2">
                  <a href="#">
                    <FaTwitter className="text-xl text-white" />
                  </a>
                </div>
                <div className="px-2">
                  <a href="#">
                    <FaInstagram className="text-xl text-white" />
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
