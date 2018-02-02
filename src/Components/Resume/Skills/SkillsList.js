import React, { Component } from 'react';
import Skill from './Skill';

class SkillsList extends Component {
    render() {
         return (
             <div>
                 {
                     this.props.data.map((skill, index) => {
                          return (
                             <Skill key={index} Title={ skill.Title } Skills={ skill.Skills } />
                          )
                     })
                 }
             </div>
         )
     }
}

export default SkillsList;
