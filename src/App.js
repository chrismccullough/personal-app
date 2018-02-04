import React, { Component } from 'react'

import fontawesome from '@fortawesome/fontawesome'
import brands from '@fortawesome/fontawesome-free-brands'
import { faCheckSquare } from '@fortawesome/fontawesome-free-solid'

import Header from './Components/Header/Header'
import About from './Components/About/About'
import Resume from './Components/Resume/Resume'
import Portfolio from './Components/Portfolio/Portfolio'
import Testimonials from './Components/Testimonials/Testimonials'
import Footer from './Components/Footer/Footer'

import './App.css'

import './CSS/default.css'
import './CSS/layout.css'
import './CSS/media-queries.css'
import './CSS/magnific-popup.css'

fontawesome.library.add(brands, faCheckSquare)

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />

                <About />
                <Resume />
                <Portfolio />
                <Testimonials />

                <Footer />
            </div>
        );
    }
}

export default App;
