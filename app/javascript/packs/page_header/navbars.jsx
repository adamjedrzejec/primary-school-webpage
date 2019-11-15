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
              <Nav.Link href="strona-glowna">Strona główna</Nav.Link>
              <Nav.Link href="aktualnosci">Aktualności</Nav.Link>
              <NavDropdown title="O szkole" id="about-school-dropdown">
                <NavDropdown.Item href="o-szkole/historia">Historia szkoły</NavDropdown.Item>
                <NavDropdown.Item href="o-szkole/programy-i-projekty">Programy i projekty</NavDropdown.Item>
                <NavDropdown.Item href="o-szkole/galeria-zdjec">Galeria zdjęć</NavDropdown.Item>
                <NavDropdown.Item href="o-szkole/rada-rodzicow">Rada Rodziców</NavDropdown.Item>
                <NavDropdown.Item href="o-szkole/grono-pedagogiczne">Grono pedagogiczne</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="o-szkole/informacje-rady-rodzicow">Informacje Rady Rodziców</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Dla ucznia" id="for-students-dropdown">
                <NavDropdown.Item href="dla-ucznia/plan-lekcji">Plan lekcji</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Dla rodziców" id="for-parents-dropdown">
                <NavDropdown.Item href="dla-rodzicow/wazne-dokumenty">Ważne dokumenty</NavDropdown.Item>
                <NavDropdown.Item href="dla-rodzicow/porady-pedagoga-szkolnego">Porady pedagoga szkolnego</NavDropdown.Item>
                <NavDropdown.Item href="dla-rodzicow/informacje-dla-rodzicow">Informacje dla rodziców</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="kontakt">Kontakt</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }

}
