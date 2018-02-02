import React, { Component } from 'react'

class Skill extends Component {
    render() {
        return (
            <div className="row item">
                <div className="columns twelve">
                    <h3 className="title">{this.props.Title}</h3>

                    <div className="bars">
                        <ul className="skills">
                            {
                                this.props.Skills.map((skill, index) => {
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
    }
}

export default Skill;
