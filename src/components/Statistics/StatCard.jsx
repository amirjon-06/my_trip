import React from 'react';

function StatCard({ statData }) {
    return <div className='stat'><strong>{statData.value}</strong><p>{statData.title}</p></div>;
}

export default StatCard;
