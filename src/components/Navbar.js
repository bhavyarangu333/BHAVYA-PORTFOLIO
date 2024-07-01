import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { CgGitFork } from "react-icons/cg";
import { AiFillStar } from "react-icons/ai";
import Button from "react-bootstrap/Button";
import { FaLinkedinIn } from "react-icons/fa"; // Import LinkedIn icon
import { AiFillGithub } from "react-icons/ai"; // Import GitHub icon
import { AiOutlineMail } from "react-icons/ai"; // Import Gmail icon

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
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>



            {/* LinkedIn Link */}
            <Nav.Item>
              <Nav.Link
                href="https://www.linkedin.com/in/bhavya-rangu-66b72a1b8/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn style={{ fontSize: "1.8em", color: "#ffffff", backgroundColor: "#0077B5", borderRadius: "50%", padding: "6px" }} />
              </Nav.Link>
            </Nav.Item>

            {/* GitHub Link */}
            <Nav.Item>
              <Nav.Link
                href="https://github.com/bhavyarangu333"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub style={{ fontSize: "1.8em", color: "#ffffff", backgroundColor: "#333333", borderRadius: "50%", padding: "4px" }} /> 
              </Nav.Link>
            </Nav.Item>

            {/* Gmail Link */}
            <Nav.Item>
              <Nav.Link
                href="mailto:bhavyaangu0309@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineMail style={{ fontSize: "1.8em", color: "#ffffff", backgroundColor: "#D14836", borderRadius: "50%", padding: "6px" }} />
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/bhavyarangu333/BHAVYA-PORTFOLIO.git"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.5em", marginRight: "5px" }} />{" "}
                <AiFillStar style={{ fontSize: "1.3em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
