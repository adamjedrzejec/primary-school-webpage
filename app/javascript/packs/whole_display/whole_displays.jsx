import React from 'react'
import ReactDOM from "react-dom";

import Navbars from "../page_header/navbars";

import { Row, Col } from 'react-bootstrap';

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
        <Navbars />

        <Row>
          <Col />
          <Col xs={8} style={{ background: 'lightgray' }} >
            { (this.state.viewState == 'sample-text') && <SampleText /> }
            { (this.state.viewState == 'strona-glowna') && <StronaGlowna /> }
            { (this.state.viewState == 'aktualnosci') && <Aktualnosci /> }
            { (this.state.viewState == 'o-szkole-historia') && <OSzkoleHistoria /> }
          </Col>
          <Col />
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