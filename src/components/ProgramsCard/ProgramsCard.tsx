import React, { useEffect } from "react";
//react-bootstrap
import { Col, Row } from "react-bootstrap";
//animation
import { motion, useAnimation } from "framer-motion";
import { InView, useInView } from "react-intersection-observer";
//components
import PrimaryBtn from "../PrimaryBtn/PrimaryBtn";
//css
import classes from "./ProgramsCard.module.css";

type ProgramsCardProps = {
  image: string;
  title: string;
  description: string;
  flexRowReverse: boolean;
};

const ProgramsCard = ({
  image,
  title,
  description,
  flexRowReverse,
}: ProgramsCardProps) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const imgVariant = {
    visible: {
      x: 0,
      opacity: 1,
    },
    hidden: {
      x: flexRowReverse ? 100 : -100,
      opacity: 0,
    },
  };

  const textVariant = {
    visible: {
      x: 0,
      opacity: 1,
    },
    hidden: {
      x: flexRowReverse ? -100 : 100,
      opacity: 0,
    },
  };

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <div className="mt-16">
      <Row className={`${flexRowReverse ? "flex flex-row-reverse" : "flex"}`}>
        <Col xs={12} sm={6}>
          <motion.img
            className="m-auto block"
            ref={ref}
            variants={imgVariant}
            initial="hidden"
            animate={control}
            transition={{ duration: 1 }}
            src={image}
            alt=""
          />
        </Col>
        <Col xs={12} sm={6}>
          <motion.div
            className="mt-8"
            ref={ref}
            variants={textVariant}
            initial="hidden"
            animate={control}
            transition={{ duration: 1 }}
          >
            <h2 className={classes.Title}>{title}</h2>
            <p className={classes.Description}>{description}</p>
            <div className="mt-11">
              <PrimaryBtn title="Learn More" classStyle="PrimaryBtn" />
            </div>
          </motion.div>
        </Col>
      </Row>
    </div>
  );
};

export default ProgramsCard;
