import React from 'react';
import Companies from './Companies';
import Data from '../../../Stores/employment';

const work = (props) => (
    <div className="row work">
        <div className="three columns header-col">
            <h2><span>Work</span></h2>
        </div>

        <div className="nine columns main-col">
            <Companies Companies={Data} />
        </div>
    </div>
);

export default work;
