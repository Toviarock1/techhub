import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'
import Logo from './../../assets/svgs/BOI-UAT-HUB-LOGO 1.svg';
import Logo2 from './../../assets/svgs/BOI-UAT-HUB-LOGO-2 1.svg'
import classes from './Header.module.css';

type HeaderProps = {
    navLinkWhite: boolean
}

const Header = ({ navLinkWhite }: HeaderProps) => {
    const [navbar, setNavbar] = useState(false);

    const changeBackgroundHandler = () => {
        if (window.scrollY >= 88) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    useEffect(() => {
        changeBackgroundHandler();
        window.addEventListener("scroll", changeBackgroundHandler);
    });

    return (
        <Navbar className={`${navbar ? (navLinkWhite ? classes.AboutNavbarScroll : classes.NavbarScroll) : classes.Navbar} md:px-11 h-14`} fixed='top' collapseOnSelect expand="lg" variant="dark">
            <Container className={classes.NavbarContainer} fluid>
                <Navbar.Brand href="/">
                    <img src={navLinkWhite ? Logo2 : Logo} className={`${classes.HeaderLogo} w-52`} alt="The BOI-UAT incubation center Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className={`${classes.NavbarCollapse}`}>
                    <Nav className="ms-auto flex items-center">
                        <Nav.Link className={navLinkWhite ? classes.NavLinkWhite : classes.NavLink} href="/">Home</Nav.Link>
                        <Nav.Link className={navLinkWhite ? classes.NavLinkWhite : classes.NavLink} href="about">About</Nav.Link>
                        <Nav.Link className={navLinkWhite ? classes.NavLinkWhite : classes.NavLink} href="programs">Programs</Nav.Link>
                        <Nav.Link className={navLinkWhite ? classes.NavLinkWhite : classes.NavLink} href="co-working-space">Co-Working Space</Nav.Link>
                        <Nav.Link className={navLinkWhite ? classes.NavLinkWhite : classes.NavLink} href="contact">Contact</Nav.Link>
                    </Nav>
                    <Nav className="flex items-center ml-2">
                        <Nav.Link className='p-0 mx-1 ml-5 my-2 md:my-auto' href="#features">
                            <FaLinkedin className={`text-xl ${navLinkWhite ? 'md:text-white' : 'text-black'} ${classes.NavLinkIcon}`} />
                        </Nav.Link>
                        <Nav.Link className='p-0 mx-1 my-2 md:my-auto' href="#features">
                            <FaFacebook className={`text-xl ${navLinkWhite ? 'md:text-white' : 'text-black'} ${classes.NavLinkIcon}`} />
                        </Nav.Link>
                        <Nav.Link className='p-0 mx-1 my-2 md:my-auto' href="#features">
                            <FaTwitter className={`text-xl ${navLinkWhite ? 'md:text-white' : 'text-black'} ${classes.NavLinkIcon}`} />
                        </Nav.Link>
                        <Nav.Link className='p-0 mx-1 my-2 md:my-auto' href="#features">
                            <FaInstagram className={`text-xl ${navLinkWhite ? 'md:text-white' : 'text-black'} ${classes.NavLinkIcon}`} />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header