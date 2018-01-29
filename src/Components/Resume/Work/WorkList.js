'use strict';

import React, { Component } from 'react';
import WorkItem from './WorkItem';

class WorkList extends Component {
    render() {
        let workNodes = this.props.data.map(workNode => {
             return (
                 <WorkItem key={ workNode.id } Company={ workNode.Company } Website={ workNode.Website } Title={ workNode.Title } Location={ workNode.Location } StartDate={ workNode.StartDate } EndDate={ workNode.EndDate } Responsibilities={ workNode.Responsibilities } />
             )
         })
         return (
             <div>
                 { workNodes }
             </div>
         )
     }
}

export default WorkList;
