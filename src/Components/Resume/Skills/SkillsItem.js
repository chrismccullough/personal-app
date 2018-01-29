'use strict';

import React, { Compontent } from 'react';

class SkillsItem extends React.Component {
    render() {
        let summaryNodes = this.props.Summary.map(summary => {
             return (
                 <p class="summary">{ summary.Content }</p>
             )
        })

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
            <div class="row item">
                <div class="columns twelve">
                    <h3 class="title">{this.props.Title}</h3>
                    {summaryNodes}

                    <div class="bars">
                        <ul class="skills">
                            {skillNodes}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default SkillsItem;
