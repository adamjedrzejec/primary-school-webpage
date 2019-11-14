import React from 'react'
import ReactDOM from "react-dom";
import { Button } from 'react-bootstrap';

import Navbars from "../page_header/navbars";

class WholeDisplays extends React.Component {

  render() {
    return(
      <div>
        <Navbars />
        <h1>Test header</h1>
        <Button>Default button</Button>
      </div>
    )
  }

}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <WholeDisplays />,
        document.body.appendChild(document.createElement('div')),
    )
});