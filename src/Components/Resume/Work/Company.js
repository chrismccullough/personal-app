import React from 'react';
import Notables from './Notables';
import Role from './Role';

const company = (props) => (
    <div className="row item">
        <div className="twelve columns">
            <ul className="company stats-tabs">
                <li>
                    <h3><a href={props.website} target="_blank">{props.company}</a></h3>
                </li>
                <li>
                    <span>{props.location}</span>
                </li>
            </ul>

            <Notables notables={props.notables} />

            <div className="roles">
                {
                    props.roles.map((role, index) =>
                       <Role
                            key={index}
                            title={role.Title}
                            startDate={role.StartDate}
                            endDate={role.EndDate}
                            responsibilities={role.Responsibilities}
                        />
                    )
                }
            </div>
        </div>
    </div>
);

export default company;
