import React, { useEffect } from "react";
//react bootstrap
import { Container } from "react-bootstrap";
//animation
import { motion, useAnimation } from "framer-motion";
import { InView, useInView } from "react-intersection-observer";
//css
import classes from "./OurProgramHero.module.css";

const OurProgramHero = () => {
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
  return (
    <div className={`${classes.BackgroundBg} h-120 md:px-20 pt-44`}>
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
            Our Programs
          </motion.h1>
        </div>
      </Container>
    </div>
  );
};

export default OurProgramHero;
