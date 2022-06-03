import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { InView, useInView } from "react-intersection-observer";
import PrimaryBtn from "./../../../components/PrimaryBtn/PrimaryBtn";
import WelcomeImage from "./../../../assets/svgs/Rectangle 10.svg";
import classes from "./Welcome.module.css";

const Welcome = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const welcomeImgVariant = {
    visible: {
      x: 50,
      opacity: 1,
    },
    hidden: {
      x: 0,
      opacity: 0,
    },
  };

  const welcomeTextVariant = {
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
    },
    hidden: {
      y: 4,
      x: 100,
      opacity: 0,
    },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <div className="bg-white md:px-20 py-32 pb-48">
      <Container fluid>
        <div>
          <Row>
            <Col xs={12} sm={6}>
              <h2 className={classes.MobileWelcomeTitle}>
                Welcome to BOI-UAT Incubation Hub.{" "}
              </h2>
              <motion.img
                ref={ref}
                src={WelcomeImage}
                className="m-auto block"
                alt="Tech hub working space"
                variants={welcomeImgVariant}
                initial="hidden"
                animate={control}
                transition={{ duration: 1.6 }}
              />
            </Col>
            <Col>
              <motion.h2
                variants={welcomeTextVariant}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.1 }}
                className={classes.WelcomeTitle}
              >
                Welcome to <br />
                BOI-UAT Incubation Hub.{" "}
              </motion.h2>
              <motion.p
                variants={welcomeTextVariant}
                initial="hidden"
                animate={control}
                transition={{ duration: 0.5 }}
                className={`${classes.WelcomeDescription} mt-16`}
              >
                BOI-UAT Incubation Hub is established to solve the problem of
                inadequate support structure, mentorship system for incubating,
                or developing business ideas by young people in south-south
                Nigeria.
              </motion.p>
              <motion.p
                variants={welcomeTextVariant}
                initial="hidden"
                animate={control}
                transition={{ duration: 1 }}
                className={`${classes.WelcomeDescription} mt-11`}
              >
                Incubation at BOI-UAT helps early stage entrepreneurs through
                product development, growth hacking and building a sustainable
                business model.
              </motion.p>
              <motion.p
                variants={welcomeTextVariant}
                initial="hidden"
                animate={control}
                transition={{ duration: 1.5 }}
                className={`${classes.WelcomeDescription} mt-11`}
              >
                We provide seed capital, office space, high internet access,
                meeting room and other facilities.
              </motion.p>
              <PrimaryBtn classStyle="PrimaryBtn" />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Welcome;
