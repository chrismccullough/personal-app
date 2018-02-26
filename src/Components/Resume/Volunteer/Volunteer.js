import React from 'react';
import VolunteerList from './VolunteerList';
import Data from '../../../Stores/volunteer';

const volunteer = () => (
    <div className="row volunteer">
        <div className="three columns header-col">
            <h2><span>Volunteering</span></h2>
        </div>

        <div className="nine columns main-col">
            <VolunteerList data={Data} />
        </div>
    </div>
);

export default volunteer;
