import React from 'react';

function TourCard({ tourData, onOpen }) {
    return (
        <article className='tour-card'>
            <button className='tour-image' type='button' onClick={() => onOpen(tourData)} aria-label={`Explore ${tourData.title}`}>
                <img src={tourData.img} alt='' />
                <span aria-hidden='true'>↗</span>
            </button>
            <div className='tour-copy'>
                <p className='card-label'>{tourData.metadata}</p>
                <h3>{tourData.title}</h3>
                <p>{tourData.description}</p>
                <strong>{tourData.price}</strong>
                <button className='button secondary card-button' type='button' onClick={() => onOpen(tourData)}>Explore this tour <span aria-hidden='true'>↗</span></button>
            </div>
        </article>
    );
}

export default TourCard;
