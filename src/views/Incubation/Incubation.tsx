import React, { FormEvent, useState } from 'react';
import { Button, Container, Form, Modal, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
//components
// import PrimaryBtn from "../../components/PrimaryBtn/PrimaryBtn";
//image
import Image from './../../assets/images/incubation-business.jpg';
//css
import classes from './Incubation.module.css';

const Incubation = () => {
  const [modal, setModal] = useState(false);
  const [successModal, setSuccessModal] = useState(false);
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: 'Application for business program',
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
    <div>
      <div className={`${classes.BackgroundBg} md:h-120 md:px-20 pt-44`}>
        <Container fluid>
          <div className="text-black mt-20 flex justify-center items-center flex-col">
            <motion.h1
              className={`${classes.HeroTitle} text-center`}
              // ref={ref}
              // variants={heroVariant}
              // initial="hidden"
              // animate={control}
              transition={{ duration: 1 }}
            >
              Incubation
            </motion.h1>
            <p className={`font-bold text-5xl ${classes.Description}`}>
              What Is A Business Incubator And How Does It Work?
            </p>
          </div>
        </Container>
      </div>
      <div className={`md:px-20 pt-44`}>
        <Container fluid>
          <div>
            <h2 className="text-4xl font-bold">
              What Is a Business Incubator?
            </h2>
            <p className="text-lg font-light text-left">
              Business incubators are specially designed programs to help young
              startups innovate and grow. They usually provide workspaces,
              mentorship, education and access to investors for startups or sole
              entrepreneurs. These resources allow companies and ideas to take
              shape while operating at a lower cost during the early stages of
              business incubation. Incubators require an application process to
              join and usually require a commitment for a specific amount of
              time.
            </p>
          </div>
          <div className="py-20">
            <h2 className="text-4xl font-bold">
              EXAMPLES OF BUSINESS INCUBATORS
            </h2>
            <p className="text-lg font-light text-left">
              Business incubators have been around since the 1950s. Since then,
              they have evolved into many forms. While there are several types
              of incubators, they all share the common goal of promoting growth.
              Here are a few kinds you may find while searching for incubator
              programs: time.
            </p>
            <ul>
              <li className="text-lg text-left list-disc my-4">
                <b>Academic institutions:</b> Many business incubators are run
                by universities or have academic affiliations. Some programs
                work with university students, while others accept cohorts of
                young companies.
              </li>
              <li className="text-lg text-left list-disc my-4">
                <b>Non-profit development corporations: </b> Both non-profit and
                government agencies use incubators to stimulate economic
                development. These programs may specifically accept companies
                geared toward public welfare.
              </li>
              <li className="text-lg text-left list-disc my-4">
                <b>For-profit property development ventures:</b> Larger
                corporations develop many incubators for various purposes. These
                programs may be an investment opportunity or a way to fund
                subsidiaries, develop technology or find partnerships.
              </li>
              <li className="text-lg text-left list-disc my-4">
                <b>Venture capital firms: </b> Some venture capital firms
                establish incubators as an investment opportunity. These
                incubators may invest in startups in exchange for equity or
                offer funding further along in the program.
              </li>
            </ul>
          </div>
          <div className="py-20">
            <h2 className="text-4xl font-bold">
              How Long Do Business Incubators Usually Take?
            </h2>
            <p className="text-lg font-light text-left">
              The difference between incubators and accelerators is that
              incubators typically follow a less rigid schedule and can be
              tailored to a business's unique needs. These programs are like
              residencies with the added benefit of educational programming and
              mentorship. Consequently, the business incubation process can vary
              depending on your company's needs. Generally, you can stay in an
              incubator for as long as it takes you to grow your business to a
              sustainable level.
            </p>
          </div>
          <div className="py-20">
            <h2 className="text-4xl font-bold">
              How Does the Application Process Work?
            </h2>
            <p className="text-lg font-light text-left">
              To sign up for a business incubator, you will need to be either a
              Hub or Chess/ICT club member and get accepted into an incubator
              program. Each business incubator, much like accelerators and
              pre-accelerators, has a unique application process. However, it's
              often less competitive than startup accelerators. The application
              process is usually comprised of a few steps:
            </p>
            <ul>
              <li className="text-lg text-left list-disc my-4">
                <b>Apply:</b> Fill out an application form and answer questions
                about yourself or your business. Some incubators look for a
                business plan and a discussion of your previous business
                activities.
              </li>
              <li className="text-lg text-left list-disc my-4">
                <b>Interview: </b> Typically, interviews are short and designed
                so the interviewer can learn about your experience quickly. They
                are usually a brief video call.
              </li>
              <li className="text-lg text-left list-disc my-4">
                <b>Receive a decision:</b> The notification time frame can vary.
                Generally, it is pretty short, taking just a few weeks for an
                incubator to make an acceptance decision. If you're interested
                in financial aid, you can apply after getting accepted.
              </li>
            </ul>
          </div>
          <div className={`my-20`}>
            <img src={Image} className={`${classes.Pros}`} alt="" />
            <h2 className="text-4xl font-bold mt-5">
              Pros of a Business Incubator
            </h2>
            <p className="text-lg font-light text-left">
              There are many benefits of a business incubator for a growing
              startup. Here's what you can gain by applying:
            </p>
            <ul>
              <li className="text-lg text-left list-disc my-4">
                <b>Save on rent:</b> An incubator usually offers a coworking
                space at a low cost. These programs allow you to save on
                operating expenses while you grow your business.
              </li>
              <li className="text-lg text-left list-disc my-4">
                <b>Learn and grow: </b> The best business incubators give you
                access to a network of mentors, coaches and educational
                programming geared toward business innovation. Mentors may
                include entrepreneurs, accountants, HR professionals, angel
                investors, lawyers, researchers and more.
              </li>
              <li className="text-lg text-left list-disc my-4">
                <b>Find funding:</b> An incubator often gives you close contact
                with venture capitalists who may want to fund your ideas.
                Acceptance into a reputable program can impress investors and
                serve as proof of your skills and drive.
              </li>
              <li className="text-lg text-left list-disc my-4">
                <b>Network with other startups:</b> While incubators aren't
                usually cohort-based, you'll share your office space with a
                group of fellow innovators. There are many benefits of coworking
                spaces for startups. They allow you to take advantage of shared
                resources such as utilities, saving on costs. You'll also be in
                a prime location to meld minds and partner with other companies.
              </li>
              <li className="text-lg text-left list-disc my-4">
                <b>Improve focus:</b> Incubators offer a structured environment
                that can help you immerse yourself in your work. Whether you
                have daily workshops or scheduled work time, you can establish
                good work habits to get your business off the ground.
              </li>
            </ul>
          </div>
          <div className={`my-20`}>
            <h2 className="text-4xl font-bold mt-5">
              Cons of a Business Incubator
            </h2>
            <p className="text-lg font-light text-left">
              While business incubators offer a host of benefits, there are a
              few downsides to consider. Remember these as you apply for
              programs:
            </p>
            <ul>
              <li className="text-lg text-left list-disc my-4">
                <b>Time commitment:</b> While accelerators and pre-accelerators
                offer structured, time-bound programs, incubators have a slower
                pace. They're the right fit for companies that need more time to
                grow.
              </li>
              <li className="text-lg text-left list-disc my-4">
                <b>Learn and grow: </b> The best business incubators give you
                access to a network of mentors, coaches and educational
                programming geared toward business innovation. Mentors may
                include entrepreneurs, accountants, HR professionals, angel
                investors, lawyers, researchers and more.
              </li>
              <li className="text-lg text-left list-disc my-4">
                <b>Limited access:</b> Incubators have varying degrees of
                selectivity. The programs with higher reputations see more
                applicants and are harder to get into. The application process
                can be rigorous at the most discerning institutions.
              </li>
              <li className="text-lg text-left list-disc my-4">
                <b>Rigid schedule: </b> For some companies, incubators can
                detract from the demands of running a business. Programs often
                require strict attendance at training, workshops and social
                activities. While distracting for some, this education can be
                invaluable to those who need and want it.
              </li>
              <li className="text-lg text-left list-disc my-4">
                <b>Improve focus:</b> Incubators offer a structured environment
                that can help you immerse yourself in your work. Whether you
                have daily workshops or scheduled work time, you can establish
                good work habits to get your business off the ground.
              </li>
            </ul>
          </div>
          <div className="py-20">
            <h2 className="text-4xl font-bold">
              Who Are Business Incubators Looking For?
            </h2>
            <p className="text-lg font-light text-left pb-2">
              Most incubators are looking for great ideas and startups that can
              grow over a few years. While many startup incubators focus on
              helping you build a business model, others seek a fully
              fleshed-out business plan from applicants.
            </p>
            <p className="text-lg font-light text-left pb-2">
              Some incubators are tied to particular industries or academic
              programs. In these cases, they look for business ideas and growing
              companies that serve the same field. For example, an incubator
              funded by a hospital will look for companies in the medical or
              pharmaceutical industry. Common incubator sectors include software
              development and professional services. Other programs seek a
              general population of companies across many industries.
            </p>
            <p className="text-lg font-light text-left pb-2">
              Further, some incubators, especially non-profit versions, serve
              particular groups. Some focus on women-run businesses, underserved
              populations or university students. Others take applicants from
              across the country or even internationally.
            </p>
          </div>
          <div className="py-20">
            <h2 className="text-4xl font-bold">
              Is a Business Incubator Program Right for Your Business?
            </h2>
            <p className="text-lg font-light text-left pb-2">
              A business incubator is designed for early-stage companies and
              startups. If you're looking for mentorship and affordable office
              space as a first-time chief executive officer (CEO), an incubator
              could be the right choice for you. You'll also have to consider if
              a long-term commitment is practical for your business.
            </p>
            <p className="text-lg font-light text-left pb-2">
              With so much variation in how incubator programs operate, it's
              even more crucial to consider which is the right fit for you. As
              you weigh your options, consider the type of support you need. If
              you are looking for seed funding, note that only a small
              percentage of incubators provide equity investments — which
              narrows down your options. Depending on your industry, it can be
              useful to work with coaches who have experience in your field. You
              may also want to look at alumni and success metrics.
            </p>
            <p className="text-lg font-light text-left pb-2">
              Further, some incubators, especially non-profit versions, serve
              particular groups. Some focus on women-run businesses, underserved
              populations or university students. Others take applicants from
              across the country or even internationally.
            </p>
          </div>
          <div className="py-20">
            <h2 className="text-5xl font-bold text-center">
              Apply to Our Business Program Today
            </h2>
            <div className="text-center mt-5">
              <button className={classes.ApplyBtn} onClick={showModal}>
                Apply
              </button>
            </div>
          </div>
        </Container>
      </div>
      <Modal show={modal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Apply for business program</Modal.Title>
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
            className={classes.ModalBtn}
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

export default Incubation;
