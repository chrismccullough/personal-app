import React, { Component } from 'react'
import Company from './Company'

class Companies extends Component {

    render() {
         return (
             <div className="companies">
                {
                    this.props.Companies.map((company, index) => {
                        return (
                             <Company key={index} Company={ company.Company } Website={company.Website} Location={company.Location} Roles={company.Roles} />
                         )
                     })
                }
            </div>
         )
     }
}

export default Companies;
