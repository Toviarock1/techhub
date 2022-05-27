import React, { useEffect, useRef, useState } from "react";
import { Container, Card, Col, Row, Button } from "react-bootstrap";
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Carousel } from "antd";
import { motion } from "framer-motion";
import classes from "./TheTeam.module.css";
import Image from "./../../../assets/images/simon.jpg";

const TheTeam: React.FC = () => {
  // const [width, setWidth] = useState(0);
  // const carouselRef = useRef(document.createElement("div"));

  // useEffect(() => {
  //     console.log(carouselRef.current.scrollWidth, carouselRef.current.offsetWidth);
  //     setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
  // }, [])

  const contentStyle: React.CSSProperties = {
    height: "500px",
    lineHeight: "260px",
    textAlign: "center",
    background: "#364d79",
  };

  return (
    <div className="md:px-20 py-44 green">
      <Container fluid>
        <div>
          <div className={`${classes.TheTeamContent}`}>
            <h2>The Team</h2>
            <h3>A focus on leadership</h3>
            <p>
              Riversands I-Hub is led by a team of dynamic, committed
              professionals with diverse backgrounds and experience.
            </p>
          </div>
          <div className="carousel">
            <div className="inner-carousel">
              <Carousel autoplay>
                <div>
                  <div className="flex items-center justify-center space-x-32 my-24">
                    <div>
                      <Card style={{ width: "18rem" }}>
                        <Card.Img variant="top" src={Image} />
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </div>
                    <div>
                      <Card style={{ width: "18rem" }}>
                        <Card.Img variant="top" src={Image} />
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </div>
                    <div>
                      <Card style={{ width: "18rem" }}>
                        <Card.Img variant="top" src={Image} />
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-center space-x-32 my-24">
                    <div>
                      <Card style={{ width: "18rem" }}>
                        <Card.Img variant="top" src={Image} />
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </div>
                    <div>
                      <Card style={{ width: "18rem" }}>
                        <Card.Img variant="top" src={Image} />
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </div>
                    <div>
                      <Card style={{ width: "18rem" }}>
                        <Card.Img variant="top" src={Image} />
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-center space-x-32 my-24">
                    <div>
                      <Card style={{ width: "18rem" }}>
                        <Card.Img variant="top" src={Image} />
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </div>
                    <div>
                      <Card style={{ width: "18rem" }}>
                        <Card.Img variant="top" src={Image} />
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </div>
                    <div>
                      <Card style={{ width: "18rem" }}>
                        <Card.Img variant="top" src={Image} />
                        <Card.Body>
                          <Card.Title>Card Title</Card.Title>
                          <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                      </Card>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TheTeam;
