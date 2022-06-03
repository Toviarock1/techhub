import React from "react";
//react-bootstrap
import { Col, Row } from "react-bootstrap";
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
  return (
    <div className="mt-16">
      <Row className={`${flexRowReverse ? "flex flex-row-reverse" : "flex"}`}>
        <Col xs={12} sm={6}>
          <img className="m-auto block" src={image} alt="" />
        </Col>
        <Col xs={12} sm={6}>
          <div className="mt-8">
            <h2 className={classes.Title}>{title}</h2>
            <p className={classes.Description}>{description}</p>
            <div className="mt-11">
              <PrimaryBtn classStyle="PrimaryBtn" />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProgramsCard;
