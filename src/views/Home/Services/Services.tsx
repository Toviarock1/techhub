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
  const serviceTextVariant = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
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
                  transition={{ duration: 0.1 }}
                  src={TrainingImage}
                  alt=""
                />
              </div>
              <div className="mt-9 text-center">
                <motion.a
                  href="/programs"
                  ref={ref}
                  variants={serviceTextVariant}
                  transition={{ duration: 2 }}
                  initial={"hidden"}
                  animate={control}
                  className={classes.TrainingTitle}
                >
                  TRAINING
                </motion.a>
              </div>
            </Col>
            <Col>
              <div className="flex justify-center">
                <motion.img
                  ref={ref}
                  variants={servicesVariant}
                  initial="hidden"
                  animate={control}
                  transition={{ duration: 0.3 }}
                  src={CoWorkingSpaceImage}
                  alt=""
                />
              </div>
              <div className="mt-9 text-center">
                <motion.a
                  href="/co-working-space"
                  ref={ref}
                  variants={serviceTextVariant}
                  transition={{ duration: 2 }}
                  initial={"hidden"}
                  animate={control}
                  className={classes.TrainingTitle}
                >
                  CO-WORKING
                </motion.a>
              </div>
            </Col>
            <Col>
              <div className="flex justify-center">
                <motion.img
                  ref={ref}
                  variants={servicesVariant}
                  initial="hidden"
                  animate={control}
                  transition={{ duration: 0.5 }}
                  src={IncubationImage}
                  alt=""
                />
              </div>
              <div className="mt-9 text-center">
                <motion.a
                  href="/incubation"
                  ref={ref}
                  variants={serviceTextVariant}
                  transition={{ duration: 2 }}
                  initial={"hidden"}
                  animate={control}
                  className={classes.TrainingTitle}
                >
                  INCUBATION
                </motion.a>
              </div>
            </Col>
            <Col>
              <div className="flex justify-center">
                <motion.img
                  ref={ref}
                  variants={servicesVariant}
                  initial="hidden"
                  animate={control}
                  transition={{ duration: 0.7 }}
                  src={TechMeetUpImage}
                  alt=""
                />
              </div>
              <div className="mt-9 text-center">
                <motion.a
                  href="/rent-space"
                  ref={ref}
                  variants={serviceTextVariant}
                  transition={{ duration: 2 }}
                  initial={"hidden"}
                  animate={control}
                  className={classes.TrainingTitle}
                >
                  TECH MEET-UP
                </motion.a>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Services;
