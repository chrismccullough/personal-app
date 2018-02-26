import React from 'react';
import { Link } from 'react-scroll';

const navConfig = {
   spy: true,
   smooth: true,
   hashSpy: true,
   offset: 0,
   duration: 1000,
   delay: 500,
   ignoreCancelEvents: false
};

const navigation = (props) => (
    <nav id="nav-wrap" className="opaque">
       <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
       <a className="mobile-btn" href="javascript:void(0)" title="Hide navigation">Hide navigation</a>

        <ul id="nav" className="nav">
            {
                props.data.map((navNode, index) => {
                     return (
                         <li key={index}>
                             <Link activeClass="active"
                                 to={navNode.Section}
                                 spy={navConfig.spy}
                                 smooth={navConfig.smooth}
                                 hashSpy={navConfig.hashSpy}
                                 offset={navConfig.offset}
                                 duration={navConfig.duration}
                                 delay={navConfig.delay}
                                 ignoreCancelEvents={navConfig.ignoreCancelEvents}
                             >
                               {navNode.Section}
                             </Link>
                         </li>
                     )
                 })
            }
        </ul>
    </nav>
);

export default navigation;
