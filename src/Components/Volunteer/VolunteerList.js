'use strict';

import React, { Component } from 'react'
import VolunteerItem from './VolunteerItem'

class VolunteerList extends Component {
    render() {
        let volunteerNodes = this.props.data.map(volunteerNode => {
             return (
                 <VolunteerItem key={ volunteerNode.id } Organization={ volunteerNode.Organization } Website={ volunteerNode.Website } Group={ volunteerNode.Group } Title={ volunteerNode.Title } Location={ volunteerNode.Location } StartDate={ volunteerNode.StartDate } EndDate={ volunteerNode.EndDate } Responsibilities={ volunteerNode.Responsibilities } />
             )
         })
         return (
             <div>
                 { volunteerNodes }
             </div>
         )
     }
}

export default VolunteerList;
