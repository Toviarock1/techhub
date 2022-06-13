import React from "react";
import { Container } from "react-bootstrap";
import PrimaryBtn from "../../components/PrimaryBtn/PrimaryBtn";
import Image from "./../../assets/images/Bayelsa-d-1.jpg";
import classes from "./CoWorkingSpace.module.css";

const WorkingSpace = () => {
  return (
    <div>
      <div className="bg-green-800 text-white mt-23 h-14 align-middle">
        <Container>
          <h2 className="pt-2 text-white">Co-working Space</h2>
        </Container>
      </div>
      <div className="md:px-20 py-20 md:py-44">
        <Container fluid>
          <div className="">
            <img className="w-full" src={Image} alt="" />
          </div>
          <div className={`${classes.Content} mt-24 leading-9`}>
            <h3> Welcome to BOI- UAT Co-working Space</h3>
            <p>
              BOI-UAT Space provides coworking spaces where entrepreneurs,
              freelancers, startups and companies can work at the fraction of
              the cost. Our Space is designed to spark up innovation and support
              productivity.
            </p>
            <p>
              {" "}
              Working from our space gives you access to a community where you
              can share expertise, knowledge, and valuable tips.
            </p>
            <h4> Included Amenities</h4>
            <ul>
              <li> Super-fast Internet</li>
              <li>
                {" "}
                Spaces includes desks and chairs designed for privacy without
                inhibiting collaboration
              </li>
              <li> Printers/Scanners/Copier</li>
              <li>
                Free refreshments like coffee, tea, and water all day long
              </li>
              <li>
                Front Desk Officer to attend to all your needs from 10am-4pm,
                Mon-Fri.
              </li>
              <li>Meeting Rooms</li>
              <li>Conference Rooms</li>
            </ul>
            <PrimaryBtn classStyle="PrimaryBtn" title="Coming Soon" disabled />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default WorkingSpace;
