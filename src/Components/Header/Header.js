'use strict';

import React, { Component } from 'react'
import Data from '../../Stores/navigation'
import Navigation from './Navigation';

import './Header.css'

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    render() {
        return (
            <header className="Header">
                <Navigation data={Data} />
            </header>
        );
    }
}

export default Header;
