import React from 'react';
import SkillsList from './SkillsList';
import Data from '../../../Stores/skills';

const skills = () => (
    <div className="row skills">
        <div className="three columns header-col">
            <h2><span>Skills</span></h2>
        </div>

        <div className="nine columns main-col">
            <SkillsList data={Data} />
        </div>
    </div>
);

export default skills;
