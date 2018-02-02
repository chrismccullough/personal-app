import React, { Component } from 'react'
import NavData from '../../Stores/navigation'
import Navigation from './Navigation'
import Social from '../Social/Social'

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = { data: [] };
    }

    render() {
        return (
            <header id="home">
                <Navigation data={NavData} />

                <div className="row banner">
                    <div className="banner-text">
                        <h1 className="responsive-headline">Chris McCullough</h1>
                        <h3>I am a <span>front end web developer</span> and <span>software engineer</span> based in Seattle, Washington.  I am passionate about developing standards-compliant web experiences using cutting edge languages and
technologies; bringing my skills, experience, work ethic and thirst for learning to all new challenges and opportunities. Please <a className="smoothscroll" href="#about">start scrolling</a> to learn more <a className="smoothscroll" href="#about">about me</a>.</h3>

                        <hr />

                        <Social />

                    </div>
                </div>

                <p className="scrolldown">
                    <a className="smoothscroll" href="#about">
                        <i className="icon-down-circle"></i>
                    </a>
                </p>
            </header>
        );
    }
}

export default Header;
