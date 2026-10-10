import React from 'react';

import './TourCard.css';

function TourCard(props) {
    return (
        <div className='tour-card'>
            <div className='tour-image'>
                <img src={props.tourData.img} alt={props.tourData.title} />
                <span className='tour-days'>{props.tourData.days}</span>
            </div>

            <div className='tour-info'>
                <h1>{props.tourData.title}</h1>
                <p className='tour-description'>{props.tourData.description}</p>

                <div className='tour-bottom'>
                    <p className='tour-price'>{props.tourData.price}</p>
                    <a href='#' className='tour-button'> → </a>
                </div>
            </div>
        </div>
    );
}

export default TourCard;