import React from 'react';
import { Container, Navbar, Nav, Image } from 'react-bootstrap';
const Footer = () => {
  return (
    <Navbar bg="warning" variant="dark">
      <Container>
        <Navbar.Brand text="display-2">
          The Genric
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="footer-nav" />
        <Navbar.Collapse id="footer-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#">
              <Image src="./image/youtube-logo.png" alt="YouTube" />
            </Nav.Link>
            <Nav.Link href="#">
              <Image src="" alt="Spotify" />
            </Nav.Link>
             <Nav.Link href="#">
              <Image src="" alt="Facebook" />
            </Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Footer;
