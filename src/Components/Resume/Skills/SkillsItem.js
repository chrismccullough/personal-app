import React, { Component } from 'react'

class SkillsItem extends Component {
    render() {

        let handleMouseEnter = function() {
            return false;
        }

         let skillNodes = this.props.Skills.map(skill => {
              return (
                <li>
                    <span
                        className={"bar-expand percentage" +  skill.Percentage }
                        style={{background : '#313131' }}
                        onMouseEnter={handleMouseEnter()}/>
                    <em>{skill.Skill}</em>
                </li>
              )
         })

        return (
            <div className="row item">
                <div className="columns twelve">
                    <h3 className="title">{this.props.Title}</h3>
                    <p>{this.props.Summary}</p>

                    <div className="bars">
                        <ul className="skills">
                            {skillNodes}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default SkillsItem;
