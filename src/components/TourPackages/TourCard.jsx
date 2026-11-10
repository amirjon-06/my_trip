import React from 'react';
import './TourCard.css';

function TourCard({ tourData, onOpen }) {
    const openWithKeyboard = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            onOpen(tourData);
        }
    };

    return (
        <article className='tour-card' onClick={() => onOpen(tourData)} onKeyDown={openWithKeyboard} role='button' tabIndex={0} aria-label={`Подробнее: ${tourData.title}`}>
            <div className='tour-image'>
                <img src={tourData.img} alt={tourData.title} />
                <span className='tour-days'>{tourData.days}</span>
            </div>
            <div className='tour-info'>
                <h2>{tourData.title}</h2>
                <p className='tour-description'>{tourData.description}</p>
                <div className='tour-bottom'>
                    <p className='tour-price'>{tourData.price}</p>
                    <span className='tour-button' aria-hidden='true'>↗</span>
                </div>
            </div>
        </article>
    );
}

export default TourCard;
