import React, { FormEvent, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
//react-boostrap
import {
  Button,
  Col,
  Container,
  Form,
  Modal,
  Row,
  Spinner,
} from "react-bootstrap";
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import classes from "./ContactUs.module.css";

const ContactUs = () => {
  const { slug } = useParams();
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    event.preventDefault();
    setValidated(true);
    if (form.checkValidity() === true) {
      setLoading(true);
      console.log(contactForm);
      axios
        .post("https://formsubmit.co/ajax/boiuattechhub@gmail.com", {
          name: contactForm.name,
          email: contactForm.email,
          subject: contactForm.subject,
          message: contactForm.message,
        })
        .then((res) => {
          console.log(res);
          setShowModal(true);
          setLoading(false);
          setContactForm({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        })
        .catch((err) => {
          setLoading(false);
          setShowErrorModal(true);
          console.log(err);
        });
    }
  };

  const closeModal = () => setShowModal(false);
  const closeErrorModal = () => setShowErrorModal(false);

  useEffect(() => {
    if (slug) {
      setTimeout(() => alert(`please fill the form for your ${slug}`), 1000);
      alert(`please fill the form for your ${slug}`);
      return setContactForm({ ...contactForm, subject: slug });
    }
  }, [slug]);

  return (
    <div className="md:px-20 py-44 pt-24">
      <div className="mb-11">
        <iframe
          title="google map"
          style={{ width: "100%", height: "500px", backgroundColor: "green" }}
          src="https://maps.google.com/maps?q=toru-orua&t=&z=15&ie=UTF8&iwloc=&output=embed"
          data-testid="google map"
        ></iframe>
      </div>
      <Container fluid>
        <Row>
          <Col xs={12} sm={4}>
            <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
              data-testid="form"
            >
              <Form.Group className="mb-3" controlId="formGroupName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  onChange={(e) =>
                    setContactForm({ ...contactForm, name: e.target.value })
                  }
                  value={contactForm.name}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Your Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  onChange={(e) =>
                    setContactForm({ ...contactForm, email: e.target.value })
                  }
                  value={contactForm.email}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  type="text"
                  name="subject"
                  onChange={(e) =>
                    setContactForm({ ...contactForm, subject: e.target.value })
                  }
                  value={contactForm.subject}
                  required
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Your Message</Form.Label>
                <Form.Control
                  as="textarea"
                  name="message"
                  rows={7}
                  onChange={(e) =>
                    setContactForm({ ...contactForm, message: e.target.value })
                  }
                  value={contactForm.message}
                  required
                />
              </Form.Group>

              <Button
                disabled={loading}
                variant="primary"
                type="submit"
                className="FormBtn"
              >
                {loading ? (
                  <Spinner
                    className="mx-3"
                    animation="border"
                    variant="warning"
                  />
                ) : (
                  "Submit"
                )}
              </Button>
            </Form>
          </Col>
          <Col xs={12} sm={4}>
            <div className="text-center my-28 md:my-auto">
              <h2 className={classes.Title}>Follow us</h2>
              <p className={classes.Description}>boiuattechhub@gmail.com</p>
              <ul className="flex justify-center p-0">
                <li className="px-2">
                  <a href="https://www.facebook.com">
                    <FaLinkedin className={"text-black text-xl"} />
                  </a>
                </li>
                <li className="px-2">
                  <a href="https://www.facebook.com">
                    <FaFacebook className={"text-black text-xl"} />
                  </a>
                </li>
                <li className="px-2">
                  <a href="https://www.facebook.com">
                    <FaTwitter className={"text-black text-xl"} />
                  </a>
                </li>
                <li className="px-2">
                  <a href="https://www.facebook.com">
                    <FaInstagram className={"text-black text-xl"} />
                  </a>
                </li>
              </ul>
            </div>
          </Col>
          <Col xs={12} sm={4}>
            <h2 className={classes.Title}>Our Address</h2>
            <p className={classes.Description}>
              BOI-UAT Incubation Centre, Block D, University of africa,
              toru-orua, Bayelsa State.
            </p>
            <p className={classes.Description}>
              Call: +234-813-137-6420
              <br />
              Email: boiuattechhub@gmail.com
            </p>
          </Col>
        </Row>
      </Container>
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Thank you!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          We've received your message and will get back to you within 24 hours.{" "}
          <br /> In the meantime, make sure to{" "}
          <a
            className="no-underline text-green-500"
            href="https://www.facebook.com"
          >
            follow us on twitter
          </a>{" "}
          <br />
        </Modal.Body>
        <Modal.Footer>
          <Button
            className={classes.ModalBtn}
            variant="secondary"
            onClick={closeModal}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      {/* error modal */}
      <Modal show={showErrorModal} onHide={closeErrorModal}>
        <Modal.Header closeButton>
          <Modal.Title>Ooops</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Please check your internet connection and try again
        </Modal.Body>
        <Modal.Footer>
          <Button
            className={classes.ModalBtn}
            variant="secondary"
            onClick={closeErrorModal}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ContactUs;
