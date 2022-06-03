import React, { useEffect } from "react";
//react-bootsrap
import { Container } from "react-bootstrap";
import { useAnimation, motion } from "framer-motion";
import { InView, useInView } from "react-intersection-observer";
//css
import classes from "./Vision.module.css";

const Vision = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

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
              To be a leading entrepreneurial ecosystem, the go-to platform for
              entrepreneurs and small businesses to accelerate their growth and
              build strong, sustainable businesses. To create a thriving,
              successful future for all South Africans, through inclusive
              economic growth.
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
              To create a growing and powerfully enabling ecosystem of services,
              resources and learning experiences. To promote high growth
              entrepreneurs and businesses with the intention to attract
              investors and customers. To collaborate with local and
              international business and academia.
            </p>
          </motion.div>
        </div>
      </Container>
    </div>
  );
};

export default Vision;
