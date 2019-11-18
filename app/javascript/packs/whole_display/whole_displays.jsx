import React from 'react'
import ReactDOM from "react-dom";

// import Navbars from "../page_header/navbars";

import { Row, Col, Card } from 'react-bootstrap';

import SampleText from "../page_content/sample_text";
import StronaGlowna from "../page_content/strona_glowna";
import Aktualnosci from "../page_content/aktualnosci";
import OSzkoleHistoria from "../page_content/o_szkole/o_szkole_historia";
import OSzkoleProgramyIProjekty from "../page_content/o_szkole/programy_i_projekty";
import OSzkoleGaleriaZdjec from "../page_content/o_szkole/galeria_zdjec";
import OSzkoleRadaRodzicow from "../page_content/o_szkole/rada_rodzicow";
import OSzkoleGronoPedagogiczne from "../page_content/o_szkole/grono_pedagogiczne";
import OSzkoleInformacjeRadyRodzicow from "../page_content/o_szkole/informacje_rady_rodzicow";
import DlaUczniaPlanLekcji from "../page_content/dla_ucznia/plan_lekcji";
import DlaRodzicaWazneDokumenty from "../page_content/dla_rodzica/wazne_dokumenty";
import DlaRodzicaPoradyPedagogaSzkolnego from "../page_content/dla_rodzica/porady_pedagoga_szkolnego";
import DlaRodzicaInformacjeDlaRodzicow from "../page_content/dla_rodzica/informacje_dla_rodzicow";
import Kontakt from "../page_content/kontakt"

import Navbars from "../page_header/navbars";

class WholeDisplays extends React.Component {

  constructor(props) {
    super(props);
    this.updateState = this.updateState.bind(this);
  }

  state = {
    viewState: 'strona-glowna',
  };

  updateState(newState) {
    this.setState({
      viewState: newState,
    });
  }


  render() {


    return(
      <>
        <Navbars updateStateFunction={this.updateState} />

        <Row className='ml-0' style={{width: '100%', height: '94.4vh'}}>
          <Col style={{ backgroundColor: 'lightgoldenrodyellow'}} />
          <Col xs={8} style={{ background: 'lightgray' }} >
            { (this.state.viewState == 'sample-text') && <SampleText /> }
            { (this.state.viewState == 'strona-glowna') && <StronaGlowna /> }
            { (this.state.viewState == 'aktualnosci') && <Aktualnosci /> }

            { (this.state.viewState == 'o-szkole-historia') && <OSzkoleHistoria /> }
            { (this.state.viewState == 'o-szkole-programy-i-projekty') && <OSzkoleProgramyIProjekty /> }
            { (this.state.viewState == 'o-szkole-galeria-zdjec') && <OSzkoleGaleriaZdjec /> }
            { (this.state.viewState == 'o-szkole-rada-rodzicow') && <OSzkoleRadaRodzicow /> }
            { (this.state.viewState == 'o-szkole-grono-pedagogiczne') && <OSzkoleGronoPedagogiczne /> }
            { (this.state.viewState == 'o-szkole-informacje-rady-rodzicow') && <OSzkoleInformacjeRadyRodzicow /> }

            { (this.state.viewState == 'dla-ucznia-plan-lekcji') && <DlaUczniaPlanLekcji /> }

            { (this.state.viewState == 'dla-rodzica-wazne-dokumenty') && <DlaRodzicaWazneDokumenty /> }
            { (this.state.viewState == 'dla-rodzica-porady-pedagoga-szkolnego') && <DlaRodzicaPoradyPedagogaSzkolnego /> }
            { (this.state.viewState == 'dla-rodzica-informacje-dla-rodzicow') && <DlaRodzicaInformacjeDlaRodzicow /> }

            { (this.state.viewState == 'kontakt') && <Kontakt /> }
          </Col>
          <Col style={{ backgroundColor: 'lightgoldenrodyellow'}}>

            <Card bg="success" text="white" className="mt-4" style={{ width: '100%' }}>
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