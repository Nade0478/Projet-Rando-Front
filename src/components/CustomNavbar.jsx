import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "./Logo";

const CustomNavbar = () => {
  return (
    <div>
      <Logo />
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Randonnées pédestre" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/place">Modifie des Randonnée</NavDropdown.Item>
                <NavDropdown.Item href="/opinion">Consulte les opinions</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Blog" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/blog">Consulte le Blog</NavDropdown.Item>
                <NavDropdown.Item href="/blog/add">Ajoute du contenu au Blog</NavDropdown.Item>
                <NavDropdown.Item href="/blog/edit">Modifie du contenu du Blog</NavDropdown.Item>
                <NavDropdown.Item href="/article">Consulte les articles</NavDropdown.Item>
                <NavDropdown.Item href="/article/add">Ajoute des articles</NavDropdown.Item>
                <NavDropdown.Item href="/article/edit">Modifie des articles</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Home" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/home">Consulte la page d'accueil</NavDropdown.Item>
                <NavDropdown.Item href="/home/add">Ajoute la page d'accueil</NavDropdown.Item>
                <NavDropdown.Item href="/home/edit">Modifie la page d'accueil</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="User" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/user">Consulte les users</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Login" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/login">Se connecter</NavDropdown.Item>
                <NavDropdown.Item href="/logout">Déconnexion</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Register" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/register">S'inscrire</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default CustomNavbar;
