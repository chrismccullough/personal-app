import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const social = () => (
    <ul className="social">
        <li><a href="mailto:cmccullough@gmail.com"><FontAwesomeIcon className="fa" icon={["fas","envelope"]}/></a></li>
        <li><a href="https://www.linkedin.com/in/chris-mccullough/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="fa" icon={["fab","linkedin"]}/></a></li>
        <li><a href="https://github.com/chrismccullough/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="fa" icon={["fab","github"]}/></a></li>
        <li><a href="https://twitter.com/cmccull" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="fa" icon={["fab","twitter"]}/></a></li>
        <li><a href="https://www.pinterest.com/chrismccull/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="fa" icon={["fab","pinterest"]}/></a></li>
    </ul>
);

export default social;
