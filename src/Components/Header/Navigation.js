'use strict';

import React, { Component } from 'react'

import * as Scroll from 'react-scroll';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class Navigation extends Component {
    render() {
        const navConfig = {
           spy: true,
           smooth: true,
           hashSpy: true,
           offset: 50,
           duration: 500,
           delay: 1000,
           ignoreCancelEvents: false
        }

        let navNodes = this.props.data.map(navNode => {
             return (
                 <li>
                     <Link activeClass="active"
                         to={navNode.Name}
                         spy={navConfig.spy}
                         smooth={navConfig.smooth}
                         hashSpy={navConfig.hashSpy}
                         offset={navConfig.offset}
                         duration={navConfig.duration}
                         delay={navConfig.delay}
                         onSetActive={this.handleSetActive}
                         onSetInactive={this.handleSetInactive}
                         ignoreCancelEvents={navConfig.ignoreCancelEvents}
                     >
                       {navNode.Name}
                     </Link>
                 </li>
             )
         })

         return (
             <nav>
                 <ul>
                     {navNodes}
                 </ul>
             </nav>
         )
     }
}

export default Navigation;
