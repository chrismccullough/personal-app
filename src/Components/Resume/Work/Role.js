import React from 'react';

const role = (props) => (
    <div className="role">
        <ul className="stats-tabs">
            <li>
                <h5 className="role">{props.title}</h5>
            </li>
            <li>
                <em className="date">{props.startDate} - {props.endDate}</em>
            </li>
        </ul>

        <ul className="responsibilities disc">
            {
                props.responsibilities.map((responsibility, index) =>
                   <li key={index}>{responsibility.Responsibility}</li>
                )
            }
        </ul>
    </div>
);

export default role;
