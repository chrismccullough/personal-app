import React from 'react';

const volunteerItem = (props) => (
    <div className="row item volunteer">
        <div className="twelve columns">
            <ul className="stats-tabs">
                <li>
                    <h3><a href={props.website} target="_blank" rel="noopener noreferrer">{props.organization} {props.group}</a></h3>
                </li>
                <li>
                    <span>{props.location}</span>
                </li>
            </ul>


                <div className="info">
                    <ul className="stats-tabs">
                        <li>
                            <h5>{props.title}</h5>
                        </li>
                        <li>
                            <em className="date">{props.startDate} - {props.endDate}</em>
                        </li>
                    </ul>
                    {
                        props.responsibilities.map((responsibility, index) => {
                             return (
                                 <p key={index}>{ responsibility.Responsibility }</p>
                             )
                        })
                    }
                </div>
        </div>
    </div>
);

export default volunteerItem;
