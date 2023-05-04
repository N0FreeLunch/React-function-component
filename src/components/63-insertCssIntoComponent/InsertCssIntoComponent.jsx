import React, {Component} from 'react';
import logo from './logo.png';
import './sample.css';

class InsertCssIntoComponent extends Component {
  render () {
    return (
      <div className="InsertCssIntoComponent">
        <header className="InsertCssIntoComponent-header">
          <img src={logo} className="app-logo" alt="logo" />
          <p>
          Edit <code>'Insert Css Into Component'</code> and save to reload
          </p>
          <a
            className="InsertCssIntoComponent-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    )
  }
}


export default InsertCssIntoComponent;
