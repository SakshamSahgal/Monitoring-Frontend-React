import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import LogoutBtn from './logout';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function CustomNavbar() {
  return (
    <Navbar bg="dark" variant="dark" text="light" className="justify-content-between px-3" >
      <Navbar.Brand href="/" style={{ color: 'white' }}>Monitoring</Navbar.Brand>
      <Navbar.Brand href="/resources" style={{ color: 'white' }}>Resources</Navbar.Brand>
      
      <Nav className="ml-auto">
        <LogoutBtn />
      </Nav>
    </Navbar>
  );
};

export default CustomNavbar;
