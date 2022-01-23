import React from 'react';
import { Navbar, Container } from 'react-bootstrap'
import "../style/Header.css";
function Header() {
  return <div>
    <>
      <Navbar bg="light" expand="lg" className="navBarContainer">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <img src="https://www.minagate.com/assets/images/logo-small.png" className='headerLogo' alt='logo' />

        </Container>
      </Navbar>
    </>
  </div>;
}

export default Header;
