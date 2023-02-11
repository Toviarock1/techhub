import React, { FormEvent, useState } from 'react';
//react bootstrap
import { Button, Container, Form, Modal, Spinner } from 'react-bootstrap';
import PrimaryBtn from '../../components/PrimaryBtn/PrimaryBtn';
//image
import Image from './../../assets/images/rental-space.jpeg';
import axios from 'axios';

const RentSpace = () => {
  const [modal, setModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: 'Application for booking of space',
    phone: '',
  });

  const showModal = () => setModal(true);
  const closeModal = () => setModal(false);

  const closeSuccessModal = () => setSuccessModal(false);

  const closeErrorModal = () => setShowErrorModal(false);

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
        .post('https://formsubmit.co/ajax/boiuattechhub@gmail.com', {
          name: contactForm.name,
          email: contactForm.email,
          subject: contactForm.subject,
          phone: contactForm.phone,
        })
        .then((res) => {
          console.log(res);
          closeModal();
          setLoading(false);
          setContactForm({
            name: '',
            email: '',
            subject: '',
            phone: '',
          });
          setSuccessModal(true);
        })
        .catch((err) => {
          setLoading(false);
          setShowErrorModal(true);
          closeModal();
          console.log(err);
        });
    }
  };

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
          <Button title="Book Space" className="PrimaryBtn" onClick={showModal}>
            Book Space
          </Button>
        </div>
      </Container>
      <Modal show={modal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Apply for booking of space</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
                disabled
                onChange={(e) =>
                  setContactForm({ ...contactForm, subject: e.target.value })
                }
                value={contactForm.subject}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupSubject">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                type="tel"
                name="Phone"
                onChange={(e) =>
                  setContactForm({ ...contactForm, phone: e.target.value })
                }
                value={contactForm.phone}
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
                'Submit'
              )}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      {/* success modal */}
      <Modal show={successModal} onHide={closeSuccessModal}>
        <Modal.Header closeButton>
          <Modal.Title>Thank you!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          We've received your message and will get back to you within 24 hours.{' '}
          <br /> In the meantime, make sure to{' '}
          <a
            className="no-underline text-green-500"
            href="https://www.facebook.com"
          >
            follow us on twitter
          </a>{' '}
          <br />
        </Modal.Body>
        <Modal.Footer>
          <Button
            // className={classes.ModalBtn}
            variant="secondary"
            onClick={closeSuccessModal}
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
            // className={classes.ModalBtn}
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

export default RentSpace;
