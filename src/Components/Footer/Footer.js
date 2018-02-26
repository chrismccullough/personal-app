import React from 'react';
import { Link } from 'react-scroll';
import Social from '../Social/Social';

const footer = () => (
    <footer>
        <div className="row">
            <div className="twelve columns">

                <Social />

                <ul className="copyright">
                    <li><span>&copy; Copyright {(new Date().getFullYear())} Chris McCullough</span></li>
                    <li>
                        This site is developed in React by Chris McCullough using the original design of the Ceevee template from
                        &nbsp;<a title="Styleswhout" href="http://www.styleshout.com/" target="_blank" rel="noopener noreferrer">Styleshout</a>
                    </li>
                </ul>
            </div>

            <div id="go-top">
                <Link
                    to={"about"}
                    smooth={true}
                    offset={0}
                    duration={1000}
                    delay={500}
                >
                    <i className="icon-up-open"></i>
                </Link>
            </div>
        </div>
    </footer>
);

export default footer;
