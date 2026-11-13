import React from 'react';
import { useT } from '../../i18n';

function VisaCard({ visaData, index, onOpen }) {
    const t = useT('visa');
    const titleIndex = 4 + index * 2;
    const descriptionIndex = 5 + index * 2;

    const openVisa = () => {
        onOpen({
            ...visaData,
            title: t[titleIndex],
            description: t[descriptionIndex],
        });
    };

    return (
        <article className='visa-card'>
            <p className='card-label'>
                {t[10]} <span>0{index + 1}</span>
            </p>
            <h3>{t[titleIndex]}</h3>
            <p className='visa-description'>{t[descriptionIndex]}</p>
            <strong className='visa-price'>{visaData.price}</strong>
            <small className='visa-unit'>{t[11]}</small>
            <ul className='visa-includes'>
                <li>{t[12]}</li>
                <li>{t[13]}</li>
                <li>{t[14]}</li>
            </ul>
            <button className='button primary card-button' type='button' onClick={openVisa}>
                {t[15]} <span aria-hidden='true'></span>
            </button>
        </article>
    );
}

export default VisaCard;
