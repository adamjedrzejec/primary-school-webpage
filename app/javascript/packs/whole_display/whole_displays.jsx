import React from 'react'
import ReactDOM from "react-dom";

class WholeDisplays extends React.Component {

  render() {
    return(
      <h1>Test header</h1>
    )
  }

}

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <WholeDisplays />,
        document.body.appendChild(document.createElement('div')),
    )
});