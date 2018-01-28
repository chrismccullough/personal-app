'use strict';

import React, { Component } from 'react';
import './Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <footer className="App-footer">
                <a className="Footer-link" href="https://www.linkedin.com/in/chris-mccullough-21671b4">linkedin</a>
                <div className="Copyright">
                    &copy; 2018 - All rights reserved
                </div>
            </footer>
        );
    }
}

export default Footer;
