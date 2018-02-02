import React, { Component } from 'react'
import Company from './Company'

class Companies extends Component {

    render() {
        const company = this.props.Companies.map(company => {
            return (
                 <Company Company={ company.Company } Website={company.Website} Location={company.Location} Roles={company.Roles} />
             )
         })

         return (
             <div className="companies">
                { company }
            </div>
         )
     }
}

export default Companies;
