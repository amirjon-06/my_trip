import React from 'react';

import './PopularTours.css';

function PopularTours(props) {
    const sold = Number(props.tourData.sold);

    return (
        <div className='popular-tour'>
            <div className='popular-tour-info'>
                <h2>{props.tourData.title}</h2>
                <p>{sold}</p>
            </div>

            <div className='popular-tour-bar'>
                <div
                    className='popular-tour-progress'
                    style={{
                        width: `${props.tourData.percent}%`
                    }}
                ></div>
            </div>
        </div>
    );
}

export default PopularTours;