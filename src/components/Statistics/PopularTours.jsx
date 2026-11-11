import React from 'react';

function PopularTours({ tourData }) {
    return <div className='destination'><span className='destination-index'>0{tourData.index}</span><span className='destination-title'>{tourData.title}</span><strong>{tourData.percent}%</strong></div>;
}

export default PopularTours;
