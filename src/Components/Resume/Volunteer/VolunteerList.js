import React, { Component } from 'react'
import VolunteerItem from './VolunteerItem'

class VolunteerList extends Component {
    render() {
         return (
             <p className="volunteerList">
                 {
                     this.props.data.map((volunteerNode, index) => {
                          return (
                              <VolunteerItem key={index} Organization={ volunteerNode.Organization } Website={ volunteerNode.Website } Group={ volunteerNode.Group } Title={ volunteerNode.Title } Location={ volunteerNode.Location } StartDate={ volunteerNode.StartDate } EndDate={ volunteerNode.EndDate } Responsibilities={ volunteerNode.Responsibilities } />
                          )
                      })
                 }
             </p>
         )
     }
}

export default VolunteerList;
