import React from 'react';

const skill = (props) => (
    <div className="row item">
        <div className="columns twelve">
            <h3 className="title">{props.title}</h3>

            <div className="bars">
                <ul className="skills">
                    {
                        props.skills.map((skill, index) => {
                             return (
                               <li key={index}>
                                   <span className={"bar-expand percentage" +  skill.Percentage } />
                                   <em>{skill.Skill}</em>
                               </li>
                             )
                        })
                    }
                </ul>
            </div>
        </div>
    </div>
);

export default skill;
