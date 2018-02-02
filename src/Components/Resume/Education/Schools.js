import React, { Component } from 'react'
import School from './School'

class Schools extends Component {
    render() {
        const school = this.props.data.map(educationNode => {
             return (
                 <School School={ educationNode.School } Website={ educationNode.Website } Location={ educationNode.Location } StartDate={ educationNode.StartDate } EndDate={ educationNode.EndDate } Degree={ educationNode.Degree } Studies={ educationNode.Studies } />
             )
         })
         return (
             <p className="schools">
                 { school }
             </p>
         )
     }
}

export default Schools;
