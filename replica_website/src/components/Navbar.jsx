import React from "react";
import Container from 'react-bootstrap/Container';
import NavLink from "react-bootstrap/esm/NavLink";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// the navbar that i created
function Navoptions() {
    return (
      <>
        <Navbar className="Move"  variant="dark">
          <Container>
            <Nav className="me-auto .me-4">
              {/* all the links to their respective places but are not functional */}
              <Nav.Link className="nav-link" href="#home">Home</Nav.Link>
              <Nav.Link className="nav-link" href="#features">Movies</Nav.Link>
              <Nav.Link className="nav-link" href="#pricing">Tv Series</Nav.Link>
              <Nav.Link className="nav-link" href="#mostpopular">Most Popular</Nav.Link>
              <Nav.Link className="nav-link" href="#topairing">Top Airing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        </>
        )
    }

    export default Navoptions
