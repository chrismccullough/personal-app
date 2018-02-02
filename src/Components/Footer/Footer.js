import React, { Component } from 'react'
import Social from '../Social/Social'

class Copyright extends Component {
    render() {
        return (
            <span>&copy; Copyright {(new Date().getFullYear())} Chris McCullough</span>
        )
    }
}

class Footer extends Component {
    render() {
        return (
            <footer>
                <div class="row">
                    <div class="twelve columns">

                        <Social />

                        <ul class="copyright">
                            <li><Copyright /></li>
                            <li>
                                This site is developed in React by Chris McCullough using the original design of the Ceevee template from
                                &nbsp;<a title="Styleswhout" href="http://www.styleshout.com/" target="_blank" rel="noopener noreferrer">Styleswhout</a>
                            </li>
                        </ul>
                    </div>

                    <div id="go-top"><a class="smoothscroll" title="Back to Top" href="#home"><i class="icon-up-open"></i></a></div>
                </div>
            </footer>
        );
    }
}

export default Footer;
