import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import classes from "./HomeHero.module.css";

const HomeHero = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const heroVariant = {
    visible: { opacity: 1, x: "10px" },
    hidden: { opacity: 0, x: 0 },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);
  return (
    <div className={`${classes.BackgroundBg} h-120 md:px-20 pt-60 md:pt-44`}>
      <Container fluid>
        <motion.div
          ref={ref}
          variants={heroVariant}
          initial="hidden"
          animate={control}
          transition={{ duration: 1 }}
          className="text-black"
        >
          <h1 className={classes.HeroTitle}>
            BOI-UAT <br />
            <span className="text-red-500">Incubation</span>
            <br /> Hub<span className="text-red-500">.</span>
          </h1>
          <p className={classes.HeroParagraph}>
            Learn how to code efficiently and create apps and games that work.
            Consult with best experts to apply skills in action.
          </p>
        </motion.div>
      </Container>
    </div>
  );
};

export default HomeHero;
