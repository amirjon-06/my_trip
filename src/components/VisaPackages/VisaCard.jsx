import React from 'react';

import './VisaCard.css';

function VisaCard(props) {
    return (
        <div className='visa-card'>
            <img src={props.visaData.img} alt='Visa Avatar' />
            <h1>{props.visaData.title}</h1>
            <p>{props.visaData.days}</p>
            <p>{props.visaData.price}</p>
        </div>
    );
}

export default VisaCard;
