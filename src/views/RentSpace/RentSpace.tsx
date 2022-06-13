import React from "react";
//react bootstrap
import { Container } from "react-bootstrap";
import PrimaryBtn from "../../components/PrimaryBtn/PrimaryBtn";
//image
import Image from "./../../assets/images/Bayelsa-d-1.jpg";

const RentSpace = () => {
  return (
    <div className="md:px-20 py-20 md:py-44">
      <Container fluid>
        <div>
          <img className="w-full" src={Image} alt="" />
        </div>
        <div className="Content mt-24 leading-9">
          <h3>BOI-UAT Incubation Center Rental Space for 3000/Day</h3>
          <p>
            BOI-UAT Space provides coworking spaces where entrepreneurs,
            freelancers, startups and companies can work at the fraction of the
            cost. Our Space is designed to spark up innovation and support
            productivity. Working from our space gives you access to a community
            where you can share expertise, knowledge, and valuable tips.
          </p>
        </div>
        <div className="border-t-2 border-b-2 py-2 border-gray-300 Content">
          <ul>
            <li>1 day minimum booking</li>
            <li>
              Discounts may apply when booking a week, a quarter, or more than a
              month.
            </li>
          </ul>
        </div>
        <div className="border-t-2 border-b-2 py-2 mt-6 border-gray-300 Content">
          <h5>Amenities (4 available)</h5>
          <ul>
            <li>Lighting</li>
            <li>Security System</li>
            <li>Internet Access</li>
            <li>Printers/Scanners/Copier</li>
          </ul>
        </div>
        <div className="border-t-2 border-b-2 py-2 mt-6 border-gray-300 Content">
          <h5>Opening hours</h5>
          <ul>
            <li>Monday to Friday: 10:00 am - 4:00pm</li>
          </ul>
        </div>
        <div className="border-t-2 border-b-2 py-2 mt-6 border-gray-300 Content">
          <h5>Space rules</h5>
          <ul>
            <li>Booking Cost: 3000 Naira per Day</li>
            <br />
            <li>
              We give you the space "as is", you are obligated to return it in
              original condition. If you need extra cleaning or trash removal,
              you can hire our third party for an additional fee. <br /> Thank
              you.
            </li>
          </ul>
        </div>
        <div className="my-6">
          <PrimaryBtn
            title="Book Space"
            classStyle="PrimaryBtn"
            link="contact"
          />
        </div>
      </Container>
    </div>
  );
};

export default RentSpace;
