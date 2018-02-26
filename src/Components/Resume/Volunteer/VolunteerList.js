import React from 'react';
import VolunteerItem from './VolunteerItem';

const volunteerList = (props) => (
    <div className="volunteerList">
        {
            props.data.map((volunteerNode, index) => {
                 return (
                     <VolunteerItem
                         key={index}
                         organization={ volunteerNode.Organization }
                         website={ volunteerNode.Website }
                         group={ volunteerNode.Group }
                         title={ volunteerNode.Title }
                         location={ volunteerNode.Location }
                         startDate={ volunteerNode.StartDate }
                         endDate={ volunteerNode.EndDate }
                         responsibilities={ volunteerNode.Responsibilities } />
                 )
             })
        }
    </div>
);

export default volunteerList;
