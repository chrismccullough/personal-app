'use strict';

import React, { Component } from 'react'

import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import { faCheckSquare } from '@fortawesome/fontawesome-free-solid'

import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Resume from './Components/Resume/Resume'
import Reference from './Components/References/References'
import Footer from './Components/Footer/Footer'

import './App.css'
import './CSS/Grid.css'

fontawesome.library.add(brands, faCheckSquare)

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />

                <Home />
                <About />
                <Resume />
                <Reference />

                <Footer />
            </div>
        );
    }
}

export default App;
