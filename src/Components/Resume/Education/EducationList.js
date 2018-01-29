'use strict';

import React, { Component } from 'react'
import EducationItem from './EducationItem'

class EducationList extends Component {
    render() {
        let educationNodes = this.props.data.map(educationNode => {
             return (
                 <EducationItem key={ educationNode.id } School={ educationNode.School } Website={ educationNode.Website } Location={ educationNode.Location } StartDate={ educationNode.StartDate } EndDate={ educationNode.EndDate } Studies={ educationNode.Studies } />
             )
         })
         return (
             <div>
                 { educationNodes }
             </div>
         )
     }
}

export default EducationList;
