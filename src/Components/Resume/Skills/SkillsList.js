import React from 'react';
import Skill from './Skill';

const skillsList = (props) => (
    <div>
        {
            props.data.map((skill, index) => {
                 return (
                    <Skill key={index} title={ skill.Title } skills={ skill.Skills } />
                 )
            })
        }
    </div>
);

export default skillsList;
