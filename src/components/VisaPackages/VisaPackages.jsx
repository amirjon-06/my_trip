import React from 'react';

import VisaCard from './VisaCard';

import img1 from './img/visa-1.svg';
import img2 from './img/visa-2.svg';
import img3 from './img/visa-3.svg';

import './VisaPackages.css';

function VisaPackages(props) {
    const visaPackages = [
        {
            id: 1,
            img: img1,
            title: 'Туристическая виза',
            days: '30 дней',
            price: '$80'
        },
        {
            id: 2,
            img: img2,
            title: 'Туристическая виза',
            days: '60 дней',
            price: '$120'
        },
        {
            id: 3,
            img: img3,
            title: 'Мультивиза',
            days: '90 дней',
            price: '$180'
        }
    ];

    return (
        <section id='visa-packages'>
            <h1>Визовые пакеты</h1>
            <p>
                Выберите визовый пакет, который подходит именно вам. <br />
                В стоимость включена виза и проверка документов.
            </p>

            <div className='visa-packages'>
                {visaPackages.map((el) => (
                    <VisaCard key={el.id} visaData={el} />
                ))}
            </div>
        </section>
    );
}

export default VisaPackages;
