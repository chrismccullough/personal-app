import React from 'react';
import School from './School';

const schools = (props) => (
    <div className="schools">
        {
            props.data.map((school, index) => {
                 return (
                     <School
                         key={index}
                         school={ school.School }
                         website={ school.Website }
                         location={ school.Location }
                         startDate={ school.StartDate }
                         endDate={ school.EndDate }
                         degree={ school.Degree }
                         studies={ school.Studies } />
                 )
            })
        }
    </div>
);

export default schools;
