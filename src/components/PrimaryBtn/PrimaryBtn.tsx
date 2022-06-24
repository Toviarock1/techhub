import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FaArrowCircleRight } from "react-icons/fa";

type PrimaryBtnProps = {
  classStyle: string;
  title: string;
  link?: string;
  disabled?: boolean;
  slug?: string;
};

const PrimaryBtn = ({ classStyle, title, disabled, slug }: PrimaryBtnProps) => {
  return disabled ? (
    <Button
      className={`${classStyle}`}
      variant="success"
      disabled={disabled ? true : false}
    >
      {title}
      <span className="ml-2">
        <FaArrowCircleRight />
      </span>
    </Button>
  ) : (
    <Link to={`${slug}`} className="LinkBtn">
      <Button
        className={`${classStyle}`}
        variant="success"
        disabled={disabled ? true : false}
      >
        {title}
        <span className="ml-2">
          <FaArrowCircleRight />
        </span>
      </Button>
    </Link>
  );
};

export default PrimaryBtn;
