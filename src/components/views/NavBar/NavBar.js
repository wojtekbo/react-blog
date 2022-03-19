import React from 'react';
import styles from './NavBar.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
    <div className={styles.Navbar}>
      <Navbar className="mt-4 mb-4 rounded" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Blog App</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
