import React, { Fragment } from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';

const Header = () => {
  return (
    <Fragment>
      <Navbar bg='dark' expand='sm' variant='dark' fixed='top'>
        <Container>
          <Navbar.Brand href='#home'>Home</Navbar.Brand>
          <Navbar.Brand href='#store'>Store</Navbar.Brand>
          <Navbar.Brand href='#about'>About</Navbar.Brand>
          <Button href='#cart'>Cart</Button>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Header;
