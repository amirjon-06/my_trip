import React from 'react';

function VisaCard({ visaData, index, onOpen }) {
    return (
        <article className='visa-card'>
            <p className='card-label'>TOURIST VISA <span>0{index + 1}</span></p>
            <h3>{visaData.days}</h3>
            <p className='visa-description'>{visaData.description}</p>
            <strong className='visa-price'>{visaData.price}</strong>
            <small className='visa-unit'>per person · single entry</small>
            <ul className='visa-includes'>
                <li>Processing in 2–4 days</li><li>Digital visa by email</li><li>Personal application support</li>
            </ul>
            <button className='button primary card-button' type='button' onClick={() => onOpen(visaData)}>Choose this visa <span aria-hidden='true'>↗</span></button>
        </article>
    );
}

export default VisaCard;
