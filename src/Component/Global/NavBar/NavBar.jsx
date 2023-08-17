import React from "react";
import "./NavBar.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import logo from "../../../Assets/logo.png";
import { Link } from "react-router-dom";
import Contact from "../Contact/Contact";


const NavBar = () => {
  return (
    <div className="Nav">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/"><img src={logo} alt="logo image" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav>
            <> <NavLink to='/' className="nav-link">ACCUEILLE </NavLink></>
            <> <NavLink to='/entreprise' className="nav-link">Notre Entreprise </NavLink></>
            <> <NavLink to='/expertise' className="nav-link">Domaines d'expertises</NavLink></>
            <><NavLink to='/realisation' className="nav-link"> Réalisation </NavLink></>
            <Nav.Link className='btn-contact' > <Contact/> </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
