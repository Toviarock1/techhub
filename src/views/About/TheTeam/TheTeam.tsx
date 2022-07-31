import React, { useEffect, useRef, useState } from "react";
import { Container, Card, Col, Row, Button } from "react-bootstrap";
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Carousel } from "antd";
import { motion } from "framer-motion";
import classes from "./TheTeam.module.css";
import Image from "./../../../assets/images/simon.jpg";
import MobileTeamImages from "./images";
import Ma from "./../../../assets/images/ma.jpg";
import Mercy from "./../../../assets/images/mercy.jpg";
import TeamCard from "../../../components/TeamCard/TeamCard";

const TheTeam: React.FC = () => {
  // const [width, setWidth] = useState(0);
  // const carouselRef = useRef(document.createElement("div"));

  // useEffect(() => {
  //     console.log(carouselRef.current.scrollWidth, carouselRef.current.offsetWidth);
  //     setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
  // }, [])

  // const contentStyle: React.CSSProperties = {
  //   height: "500px",
  //   lineHeight: "260px",
  //   textAlign: "center",
  //   background: "#364d79",
  // };

  return (
    <div className="md:px-20 py-44 green">
      <Container fluid>
        <div>
          <div className={`${classes.TheTeamContent}`}>
            <h2>The Team</h2>
            <h3>A focus on leadership</h3>
            <p>
              BOI-UAT Incubation center is led by a team of dynamic, committed
              professionals with diverse backgrounds and experience.
            </p>
          </div>
          <div className="carousel">
            <div className="inner-carousel">
              <Carousel autoplay className={classes.MainCarousel}>
                <div>
                  <div className="flex items-center justify-center space-x-24 my-24">
                    <TeamCard img={Image} title="Web Developer" />
                    <TeamCard img={Image} title="Web Developer" />
                    <TeamCard img={Image} title="Web Developer" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-center space-x-24 my-24">
                    <TeamCard img={Image} title="Web Developer" />
                    <TeamCard img={Image} title="Web Developer" />
                    <TeamCard img={Image} title="Web Developer" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-center space-x-24 my-24">
                    <TeamCard img={Image} title="Web Developer" />
                    <TeamCard img={Image} title="Web Developer" />
                    <TeamCard img={Image} title="Web Developer" />
                  </div>
                </div>
              </Carousel>
              <Carousel autoplay className={classes.MobileCarousel}>
                {MobileTeamImages.map((image, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-center space-x-24 my-24">
                      <TeamCard img={image} title="Web Developer" />
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TheTeam;
