import React from 'react'
import ReactDOM from "react-dom";

import Navbars from "../page_header/navbars";

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
        { (this.state.viewState == 'sample-text') && <SampleText /> }
        { (this.state.viewState == 'strona-glowna') && <StronaGlowna /> }
        { (this.state.viewState == 'aktualnosci') && <Aktualnosci /> }
        { (this.state.viewState == 'o-szkole-historia') && <OSzkoleHistoria /> }
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