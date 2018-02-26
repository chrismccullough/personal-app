import React from 'react';

const school = (props) => (
    <div className="row item school">
        <div className="twelve columns">
            <ul className="stats-tabs">
                <li>
                    <h3><a href={props.website} target="_blank" rel="noopener noreferrer">{props.school}</a></h3>
                </li>
                <li>
                    <span>{props.location}</span>
                </li>
            </ul>


            <div className="info">
                <ul className="stats-tabs">
                    <li>
                        <h5>{props.degree}</h5>
                    </li>
                    <li>
                        <em className="date">{props.startDate} - {props.endDate}</em>
                    </li>
                </ul>

                <div className="studies">
                    {props.studies}
                </div>
            </div>
        </div>
    </div>
);

export default school;
