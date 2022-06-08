import React from "react";
import { Button } from "react-bootstrap";
import { FaArrowCircleRight } from "react-icons/fa";

type PrimaryBtnProps = {
  classStyle: string;
  title: string;
  link?: string;
};

const PrimaryBtn = ({ classStyle, title, link }: PrimaryBtnProps) => {
  return (
    <Button
      className={`${classStyle} w-3/12`}
      variant="success"
      href={`/${link}`}
    >
      {title}
      <span className="ml-2">
        <FaArrowCircleRight />
      </span>
    </Button>
  );
};

export default PrimaryBtn;
