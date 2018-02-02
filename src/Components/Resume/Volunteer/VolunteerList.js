import React, { Component } from 'react'
import VolunteerItem from './VolunteerItem'

class VolunteerList extends Component {
    render() {
        let volunteerNodes = this.props.data.map(volunteerNode => {
             return (
                 <VolunteerItem Organization={ volunteerNode.Organization } Website={ volunteerNode.Website } Group={ volunteerNode.Group } Title={ volunteerNode.Title } Location={ volunteerNode.Location } StartDate={ volunteerNode.StartDate } EndDate={ volunteerNode.EndDate } Responsibilities={ volunteerNode.Responsibilities } />
             )
         })
         return (
             <p className="volunteerList">
                 { volunteerNodes }
             </p>
         )
     }
}

export default VolunteerList;
