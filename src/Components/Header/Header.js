import React from 'react';
import { Link } from 'react-scroll';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faChevronCircleDown } from '@fortawesome/fontawesome-free-solid';
import NavData from '../../Stores/navigation';
import Navigation from './Navigation';
import Social from '../Social/Social';

const header = () => (
    <header id="home">
        <Navigation data={NavData} />
        <div className="row banner">
            <div className="banner-text">
                <h1 className="responsive-headline">Chris McCullough</h1>

                <h3>I am a <span>front end web developer</span> and <span>software engineer</span> based in Seattle, Washington.  I am passionate about developing standards-compliant web experiences using cutting edge languages and
technologies; bringing my skills, experience, work ethic and thirst for learning to all new challenges and opportunities.</h3>
                <br/>
                <h3 className="center">
                    Please <a className="smoothscroll" href="#about">start scrolling</a> to learn more <a className="smoothscroll" href="#about">about me</a>.
                </h3>

                <hr />

                <Social />

            </div>
        </div>

        <p className="scrolldown">
            <Link
                to={"about"}
                smooth={true}
                offset={0}
                duration={1000}
                delay={500}
            >
              <FontAwesomeIcon icon={faChevronCircleDown} />
            </Link>
        </p>
    </header>
);

export default header;
