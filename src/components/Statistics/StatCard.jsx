import React from 'react';

import './StatCard.css';

function StatCard(props) {
    return (
        <div className='stat-card'>
            <h1>{props.statData.value}</h1>
            <p>{props.statData.title}</p>
        </div>
    );
}

export default StatCard;