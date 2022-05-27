import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView, InView } from "react-intersection-observer";
//css
import classes from "./Services.module.css";
//images
import TrainingImage from "./../../../assets/svgs/Rectangle 15.svg";
import CoWorkingSpaceImage from "./../../../assets/svgs/Rectangle 19.svg";
import IncubationImage from "./../../../assets/svgs/Rectangle 20.svg";
import TechMeetUpImage from "./../../../assets/svgs/Rectangle 21.svg";

const Services = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const servicesVariant = {
    visible: { scale: 1 },
    hidden: { scale: 0 },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);
  return (
    <div className="bg-white md:px-20 py-30 pb-48">
      <Container>
        <div>
          <div className="text-center mb-24">
            <h2 className={classes.ServicesTitle}>Our Services</h2>
          </div>
          <Row>
            <Col>
              <div className="flex justify-center">
                <motion.img
                  ref={ref}
                  variants={servicesVariant}
                  initial="hidden"
                  animate={control}
                  transition={{ duration: 1 }}
                  src={TrainingImage}
                  alt=""
                />
              </div>
              <div className="mt-9 text-center">
                <a href="#" className={classes.TrainingTitle}>
                  TRAINING
                </a>
              </div>
            </Col>
            <Col>
              <div className="flex justify-center">
                <motion.img
                  ref={ref}
                  variants={servicesVariant}
                  initial="hidden"
                  animate={control}
                  transition={{ duration: 1.2 }}
                  src={CoWorkingSpaceImage}
                  alt=""
                />
              </div>
              <div className="mt-9 text-center">
                <a href="#" className={classes.TrainingTitle}>
                  CO-WORKING
                </a>
              </div>
            </Col>
            <Col>
              <div className="flex justify-center">
                <motion.img
                  ref={ref}
                  variants={servicesVariant}
                  initial="hidden"
                  animate={control}
                  transition={{ duration: 1.3 }}
                  src={IncubationImage}
                  alt=""
                />
              </div>
              <div className="mt-9 text-center">
                <a href="#" className={classes.TrainingTitle}>
                  INCUBATION
                </a>
              </div>
            </Col>
            <Col>
              <div className="flex justify-center">
                <motion.img
                  ref={ref}
                  variants={servicesVariant}
                  initial="hidden"
                  animate={control}
                  transition={{ duration: 1.4 }}
                  src={TechMeetUpImage}
                  alt=""
                />
              </div>
              <div className="mt-9 text-center">
                <a href="#" className={classes.TrainingTitle}>
                  TECH MEET-UP
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Services;
