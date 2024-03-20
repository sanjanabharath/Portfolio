import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";


import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
        Sanjana
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" >
            <Nav.Item style={{marginTop: "20px"}}>
            <a href="#home" style={{ textDecoration: "none", color: "white", }}>Home</a>
            </Nav.Item>

            <Nav.Item style={{marginTop: "20px"}}>
            <a href="#about" style={{ textDecoration: "none", color: "white", }}>About</a>
            </Nav.Item>

            <Nav.Item style={{marginTop: "20px"}}>
            <a href="#projects" style={{ textDecoration: "none", color: "white", }}>Projects</a>
            </Nav.Item>

            

            <Nav.Item style={{marginTop: "20px"}}>
              <a href="#blogs" style={{ textDecoration: "none", color: "white", }}>Blogs</a>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://www.linkedin.com/in/sanjana-bharath-1266461a6/"
                target="_blank"
                className="fork-btn-inner"
                style={{marginTop: "10px"}}
              >
                Contact
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
