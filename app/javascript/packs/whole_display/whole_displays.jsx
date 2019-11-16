import React from 'react'
import ReactDOM from "react-dom";

// import Navbars from "../page_header/navbars";

import { Row, Col, Card } from 'react-bootstrap';

import SampleText from "../page_content/sample_text";
import StronaGlowna from "../page_content/strona_glowna";
import Aktualnosci from "../page_content/aktualnosci";
import OSzkoleHistoria from "../page_content/o_szkole/o_szkole_historia";


class WholeDisplays extends React.Component {

  state = {
    viewState: 'sample-text',
  };


  render() {


    return(
      <>
        {/* <Navbars /> */}

        <Row style={{width: '100%'}}>
          <Col />
          <Col xs={8} style={{ background: 'lightgray' }} >
            { (this.state.viewState == 'sample-text') && <SampleText /> }
            { (this.state.viewState == 'strona-glowna') && <StronaGlowna /> }
            { (this.state.viewState == 'aktualnosci') && <Aktualnosci /> }
            { (this.state.viewState == 'o-szkole-historia') && <OSzkoleHistoria /> }
          </Col>
          <Col>

            <Card bg="success" text="white" className="mt-4" style={{ position: 'fixed' }}>
              <Card.Header>
                <h3 style={{ color: '#e4ffe0'}}>Kontakt</h3>
              </Card.Header>

              <Card.Body>

                <Card.Subtitle style={{ color: '#d5ffcf', fontSize: '1.25em' }}>Telefon:</Card.Subtitle>
                <Card.Text style={{ color: '#e4ffe0' }}>+48 123 456 789</Card.Text>

                <Card.Subtitle style={{ color: '#d5ffcf', fontSize: '1.25em' }}>E-mail:</Card.Subtitle>
                <Card.Text style={{ color: '#e4ffe0' }}>sp.rokiciny@gmail.com</Card.Text>
              </Card.Body>
            </Card>

          </Col>
        </Row>


      </>
    )
  }

}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <WholeDisplays />,
        document.body.appendChild(document.createElement('div')),
    )
});