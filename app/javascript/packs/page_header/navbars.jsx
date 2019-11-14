import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

export default class Navbars extends React.Component {

  render() {
    return(
      <div>
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
          {/* <Navbar.Brand href="#home">Strona główna</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Strona główna</Nav.Link>
              <Nav.Link href="#news">Aktualności</Nav.Link>
              <NavDropdown title="O szkole" id="about-school-dropdown">
                <NavDropdown.Item href="#action/3.1">Historia szkoły</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Programoy i projekty</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Galeria zdjęć</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Rada Rodziców</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Grono pedagogiczne</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Informacje Rady Rodziców</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Dla ucznia" id="for-students-dropdown">
                <NavDropdown.Item href="#action/3.1">Plan lekcji</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Dla rodziców" id="for-parents-dropdown">
                <NavDropdown.Item href="#action/3.1">Ważne dokumenty</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Porady pedagoga szkolnego</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Informacje dla rodziców</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#contact">Kontakt</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }

}
