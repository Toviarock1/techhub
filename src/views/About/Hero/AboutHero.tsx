import React, { useEffect } from "react";
//react-bootstrap
import { Container, Row, Col } from "react-bootstrap";
//framer motion
import { motion, useAnimation } from "framer-motion";
import { InView, useInView } from "react-intersection-observer";
//images
import BankOfIndustryLogo from "./../../../assets/svgs/image 6.svg";
import VatebraTechHubLogo from "./../../../assets/svgs/image 7.svg";
import UatLogo from "./../../../assets/svgs/image 8.svg";
//css
import classes from "./AboutHero.module.css";

const HomeHero = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const heroVariant = {
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
    },
    hidden: {
      scale: 0,
      opacity: 0,
      y: 100,
    },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);
  const missionVariant = {
    hidden: { x: 500, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const visionVariant = {
    hidden: { x: -80, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);
  return (
    <>
      <div className={`${classes.BackgroundBg} md:h-120 md:px-20 pb-11 pt-44`}>
        <Container fluid>
          <div className="text-black mt-20 flex justify-center items-center flex-col">
            <motion.h1
              className={`${classes.HeroTitle} text-center`}
              ref={ref}
              variants={heroVariant}
              initial="hidden"
              animate={control}
              transition={{ duration: 1 }}
            >
              BOI -UAT Incubation Hub: the center for technovation and
              enterprise education.
            </motion.h1>
          </div>
        </Container>
      </div>
      <div className={`${classes.BackgroundBg} md:px-20 py-44`}>
        <Container fluid>
          <div>
            <motion.div
              ref={ref}
              variants={visionVariant}
              initial={"hidden"}
              animate={control}
              transition={{ duration: 2 }}
              className={`${classes.OurVisionCard} bg-blue-900 p-5 text-white rounded-3xl md:w-120`}
            >
              <h2>Our Vision</h2>
              <p>
                To be a leading entrepreneurial ecosystem, the go-to platform
                for entrepreneurs and small businesses to accelerate their
                growth and build strong, sustainable businesses. To create a
                thriving, successful future for all South Africans, through
                inclusive economic growth.
              </p>
            </motion.div>
            <motion.div
              ref={ref}
              variants={missionVariant}
              initial={"hidden"}
              animate={control}
              transition={{ duration: 2 }}
              className={`${classes.OurMissionCard} bg-white p-5 text-black rounded-3xl md:ml-64 md:w-120`}
            >
              <h2>Our Mission</h2>
              <p>
                To create a growing and powerfully enabling ecosystem of
                services, resources and learning experiences. To promote high
                growth entrepreneurs and businesses with the intention to
                attract investors and customers. To collaborate with local and
                international business and academia.
              </p>
            </motion.div>
          </div>
        </Container>
      </div>
      <div className="md:px-20 py-44">
        <Container fluid>
          <div className="mb-16 md:mb-36 text-center">
            <h2 className={classes.Title}>Our founding partners</h2>
          </div>
          <Row className="flex items-center">
            <Col>
              <img className="m-auto block" src={BankOfIndustryLogo} alt="" />
            </Col>
            <Col>
              <img className="m-auto block" src={VatebraTechHubLogo} alt="" />
            </Col>
            <Col>
              <img className="m-auto block" src={UatLogo} alt="" />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default HomeHero;
