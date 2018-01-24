import React, { Component } from 'react';
import './Header.css';
import logo from '../../logo.svg';

class Header extends React.Component {
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
    );
  }
}

export default Header;
