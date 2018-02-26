import React from 'react';
import Company from './Company';

const companies = (props) => (
    <div className="companies">
       {
           props.Companies.map((company, index) => {
               return (
                    <Company
                       key={index}
                       company={ company.Company }
                       website={company.Website}
                       location={company.Location}
                       notables={company.Notables}
                       roles={company.Roles} />
                )
            })
       }
   </div>
);

export default companies;
