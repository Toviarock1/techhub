import React, { useEffect } from "react";
//react-bootstrap
import { Container } from "react-bootstrap";
//framer motion
import { motion, useAnimation } from "framer-motion";
import { InView, useInView } from "react-intersection-observer";
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
  return (
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
            BOI -UAT Incubation Hub: the center for technovation and enterprise
            education.
          </motion.h1>
        </div>
      </Container>
    </div>
  );
};

export default HomeHero;
