import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import LogoutBtn from './logout';

const CustomNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" text="light" className="justify-content-between px-3" >
      <Navbar.Brand href="/">Monitoring</Navbar.Brand>
      <Nav className="ml-auto">
        <LogoutBtn />
      </Nav>
    </Navbar>
  );
};

export default CustomNavbar;
