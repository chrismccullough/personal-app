'use strict';

import React, { Component } from 'react'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import './Home.css'

class Home extends React.Component {
    render() {
        return (
            <section id="Home">
                <a name="home"/>
                <h1>Chris McCullough</h1>

                <hr/>

                <ul class="Social">
                    <li><a href=""><FontAwesomeIcon icon={["fas","envelope"]}/></a></li>
                    <li><a href=""><FontAwesomeIcon icon={["fab","linkedin"]}/></a></li>
                    <li><a href=""><FontAwesomeIcon icon={["fab","github"]}/></a></li>
                    <li><a href=""><FontAwesomeIcon icon={["fab","twitter"]}/></a></li>
                    <li><a href=""><FontAwesomeIcon icon={["fab","pinterest"]}/></a></li>
                </ul>
                <div class="circle-down">
                    <FontAwesomeIcon icon={["fas","chevron-circle-down"]}/>
                </div>
            </section>
        );
    }
}

export default Home;
