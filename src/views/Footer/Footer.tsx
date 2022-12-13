import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { links } from './../../shared/utility';
import Logo from './../../assets/svgs/BOI-UAT-HUB-LOGO-2 1.svg';
//css
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={`${classes.Footer} bg-green-900 pt-16 pb-2`}>
      <div className="border-white border-y-2 py-16">
        <div className="md:px-20">
          <Container fluid>
            <div>
              <Row>
                <Col className="space-y-2">
                  {/* <div>
                    <Link to={"/about"} className="text-white no-underline">
                      About us
                    </Link>
                  </div>
                  <div>
                    <Link to="/contact" className="text-white no-underline">
                      Contact us
                    </Link>
                  </div>
                  <div>
                    <Link
                      to="/important info"
                      className="text-white no-underline"
                    >
                      Important info
                    </Link>
                  </div> */}
                  <img src={Logo} alt="" className="w-70" />
                </Col>

                <Col lg={5} className="">
                  <div className="mt-11 md:mt-auto w-96">
                    <div>
                      <p className="text-white">Subcribe to our newsletter:</p>
                      <div className="flex">
                        <Row>
                          <div
                            id="mc_embed_signup"
                            style={{ background: 'transparent' }}
                          >
                            <form
                              action="https://gmail.us14.list-manage.com/subscribe/post?u=f77fdbb78f993eb2d5e4b951f&amp;id=5891acc950"
                              method="post"
                              id="mc-embedded-subscribe-form"
                              name="mc-embedded-subscribe-form"
                              className="validate"
                              target="_blank"
                              noValidate
                            >
                              <div
                                id="mc_embed_signup_scroll"
                                className="flex items-center justify-start"
                              >
                                <div
                                  className="mc-field-group text-white"
                                  style={{ width: '55%' }}
                                >
                                  <label htmlFor="mce-EMAIL">
                                    Email Address{' '}
                                  </label>
                                  <input
                                    type="email"
                                    name="EMAIL"
                                    className="required email outline-none text-black"
                                    id="mce-EMAIL"
                                    style={{ height: '32px' }}
                                  />
                                </div>

                                <div className="optionalParent">
                                  <div className="clear foot">
                                    <input
                                      type="submit"
                                      value="Subscribe"
                                      name="subscribe"
                                      id="mc-embedded-subscribe"
                                      className="button"
                                      style={{
                                        margin: '0px 5px -6px 13px',
                                        background: '#054814',
                                        border: '1px solid white',
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </form>
                          </div>
                        </Row>
                      </div>
                    </div>
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
                  <a href={links.linkedin}>
                    <FaLinkedin className="text-xl text-white" />
                  </a>
                </div>
                <div className="px-2">
                  <a href={links.facebook}>
                    <FaFacebook className="text-xl text-white" />
                  </a>
                </div>
                <div className="px-2">
                  <a href={links.twitter}>
                    <FaTwitter className="text-xl text-white" />
                  </a>
                </div>
                {/* <div className="px-2">
                  <a href="https://www.facebook.com">
                    <FaInstagram className="text-xl text-white" />
                  </a>
                </div> */}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </footer>
  );
};

export default Footer;
