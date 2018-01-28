'use strict';

import React, { Component } from 'react'
import './Header.css'

class Header extends React.Component {
    render() {
        return (
            <header className="Header">
                <nav>
                    <ul>
                        <li><a class="smooth-scroll" href="#home">Home</a></li>
                        <li><a class="smooth-scroll" href="#about">About</a></li>
                        <li><a class="smooth-scroll" href="#work">Work</a></li>
                        <li><a class="smooth-scroll" href="#skills">Skills</a></li>
                        <li><a class="smooth-scroll" href="#education">Education</a></li>
                        <li><a class="smooth-scroll" href="#portfolio">Portfolio</a></li>
                        <li><a class="smooth-scroll" href="#references">References</a></li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Header;
