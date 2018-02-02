import React, { Component } from 'react'
import School from './School'

class Schools extends Component {
    render() {
         return (
             <p className="schools">
                 {
                     this.props.data.map((school, index) => {
                          return (
                              <School key={index} School={ school.School } Website={ school.Website } Location={ school.Location } StartDate={ school.StartDate } EndDate={ school.EndDate } Degree={ school.Degree } Studies={ school.Studies } />
                          )
                     })
                 }
             </p>
         )
     }
}

export default Schools;
