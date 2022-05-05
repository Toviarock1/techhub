import React, { useEffect, useRef, useState } from 'react'
import { Container, Card, Col, Row } from 'react-bootstrap'
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import { motion } from 'framer-motion';
import classes from './TheTeam.module.css';
import images from './images'

const TheTeam = () => {
    const [width, setWidth] = useState(0);
    const carouselRef = useRef(document.createElement("div"));

    useEffect(() => {
        console.log(carouselRef.current.scrollWidth, carouselRef.current.offsetWidth);
        setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
    }, [])

    return (
        <div className='md:px-20 py-44'>
            <Container fluid>
                <div>
                    <div className={`${classes.TheTeamContent}`}>
                        <h2>The Team</h2>
                        <h3>A focus on leadership</h3>
                        <p>Riversands I-Hub is led by a team of dynamic, committed professionals with diverse backgrounds and experience.</p>
                    </div>
                    <motion.div ref={carouselRef} className='carousel' whileTap={{ cursor: "grabbing" }}>
                        <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className='inner-carousel'>
                            {images.map(image => {
                                return (
                                    <motion.div className='item'>
                                        <img src={image} alt="" />
                                    </motion.div>
                                )
                            })}
                        </motion.div>
                    </motion.div>

                </div>
            </Container >
        </div >
    )
}

export default TheTeam