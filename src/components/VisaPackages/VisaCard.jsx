import React from 'react';
import './VisaCard.css';

function VisaCard({ visaData, onOpen }) {
    return (
        <button type='button' className='visa-card' onClick={() => onOpen(visaData)} aria-label={`Подробнее: ${visaData.title} ${visaData.days}`}>
            <img src={visaData.img} alt='' />
            <h2>{visaData.title}</h2>
            <p>{visaData.days}</p>
            <p>{visaData.price}</p>
            <span className='visa-card-cta'>Подробнее <span aria-hidden='true'>↗</span></span>
        </button>
    );
}

export default VisaCard;
