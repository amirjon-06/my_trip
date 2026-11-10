import React, { useState } from 'react';
import VisaCard from './VisaCard';
import TourModal from '../TourModal/TourModal';
import img1 from './img/visa-1.svg';
import img2 from './img/visa-2.svg';
import img3 from './img/visa-3.svg';
import './VisaPackages.css';

function VisaPackages() {
    const [selectedVisa, setSelectedVisa] = useState(null);
    const visaPackages = [
        { id: 1, img: img1, title: 'Туристическая виза', days: '30 дней', description: 'Туристическая виза на 30 дней, проверка документов и помощь с оформлением.', price: '$80', kind: 'visa' },
        { id: 2, img: img2, title: 'Туристическая виза', days: '60 дней', description: 'Туристическая виза на 60 дней, проверка документов и помощь с оформлением.', price: '$120', kind: 'visa' },
        { id: 3, img: img3, title: 'Мультивиза', days: '90 дней', description: 'Мультивиза на 90 дней, проверка документов и сопровождение подачи.', price: '$180', kind: 'visa' }
    ];

    return (
        <section id='visa-packages'>
            <h1>Визовые пакеты</h1>
            <p>Выберите подходящий визовый пакет. В стоимость включены виза и проверка документов.</p>
            <div className='visa-packages'>
                {visaPackages.map((item) => <VisaCard key={item.id} visaData={item} onOpen={setSelectedVisa} />)}
            </div>
            {selectedVisa && <TourModal tour={selectedVisa} onClose={() => setSelectedVisa(null)} />}
        </section>
    );
}

export default VisaPackages;
