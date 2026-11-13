import React from 'react';
import { useT } from '../../i18n';

function TourCard({ tourData, onOpen }) {
    const t = useT('tours');

    return (
        <article className='tour-card'>
            <button
                className='tour-image'
                type='button'
                onClick={() => onOpen(tourData)}
                aria-label={`${t[15]}: ${tourData.title}`}
            >
                <img src={tourData.img} alt='' loading='lazy' decoding='async' />
            </button>
            <div className='tour-copy'>
                <p className='card-label'>{tourData.metadata}</p>
                <h3>{tourData.title}</h3>
                <p>{tourData.description}</p>
                <strong>{tourData.price}</strong>
                <button
                    className='button secondary card-button'
                    type='button'
                    onClick={() => onOpen(tourData)}
                >
                    {t[15]}
                </button>
            </div>
        </article>
    );
}

export default TourCard;
