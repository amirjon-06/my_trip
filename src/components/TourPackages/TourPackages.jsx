import React from 'react';

import TourCard from './TourCard';

import img1 from './img/Untitled-1.png';
import img2 from './img/Untitled-2.png';
import img3 from './img/Untitled-3.png';
import img4 from './img/Untitled-4.png';
import img5 from './img/Untitled-5.png';
import img6 from './img/Untitled-6.png';

import './TourPackages.css';

function TourPackages(props) {

    const tourPackages = [
        {
            id: 1,
            img: img1,
            title: 'Городской уикенд',
            description: '3 ночи в центре, виза, трансфер из аэропорта',
            days: '3 ночи',
            price: '$500'
        },
        {
            id: 2,
            img: img2,
            title: 'Пустынное сафари',
            description: '5 ночей, виза, экскурсия на джипах по дюнам',
            days: '5 ночей',
            price: '$700'
        },
        {
            id: 3,
            img: img3,
            title: 'Марина и яхты',
            description: '4 ночи у воды, виза, прогулка на яхте',
            days: '4 ночи',
            price: '$1000'
        },
        {
            id: 4,
            img: img4,
            title: 'Старый Дубай',
            description: '3 ночи, виза, прогулка по историческому центру',
            days: '3 ночи',
            price: '$500'
        },
        {
            id: 5,
            img: img5,
            title: 'Премиум Дубай',
            description: '7 ночей, отель, трансфер и лучшие экскурсии',
            days: '7 ночей',
            price: '$1200'
        },
        {
            id: 6,
            img: img6,
            title: 'Дубай для семьи',
            description: '6 ночей, отель, трансфер и семейные развлечения',
            days: '6 ночей',
            price: '$900'
        }
    ];

    return (
        <section id='tour-packages'>
            <h1>Тур-пакеты</h1>
            <p>Выберите тур-пакет, который подходит именно вам.</p>
            
            <div className='tour-packages'>
                {tourPackages.map((el) => (
                    <TourCard key={el.id} tourData={el} />
                ))}
            </div>
        </section>
    );
}

export default TourPackages;