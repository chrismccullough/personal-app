import React, { Component } from 'react';
import SkillsItem from './SkillsItem';

class SkillsList extends Component {
    render() {
        let skillNodes = this.props.data.map(skillNode => {
             return (
                <SkillsItem key={ skillNode.id } Title={ skillNode.Title } Summary={ skillNode.Summary } Skills={ skillNode.Skills } />
             )
         })
         return (
             <div>
                 { skillNodes }
             </div>
         )
     }
}

export default SkillsList;
