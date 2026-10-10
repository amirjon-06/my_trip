import React from 'react';

import StatCard from './StatCard';
import PopularTours from './PopularTours';

import './Statistics.css';

function Statistics(props) {
    const statistics = [
        {
            id: 1,
            value: '1234',
            title: 'Запрос на визу'
        },
        {
            id: 2,
            value: '5678',
            title: 'Тур-пакетов оформлено'
        },
        {
            id: 3,
            value: '1230',
            title: 'Успешность оформления виз'
        }
    ]

    const popular_tours = [
        {
            title: 'Dubai',
            sold: '352'
        },
        {
            title: 'Paris',
            sold: '289'
        },
        {
            title: 'New York',
            sold: '198'
        },
        {
            title: 'Tokyo',
            sold: '145'
        },
        {
            title: 'London',
            sold: '123'
        },
        {
            title: 'Sydney',
            sold: '98'
        }
    ]

    popular_tours.sort((a, b) => b.sold - a.sold);

    const maxSold = Number(popular_tours[0].sold);

    return (
        <section id='statistics'>
            <h1>Статистика</h1>
            
            <div className='statistics-container'>
                <div className='statistics'>
                    {statistics.map((el) => (
                        <StatCard key={el.id} statData={el} />
                    ))}
                </div>
                
                <div className='popular-tours'>
                    <h1>Популярные туры</h1>
                    {popular_tours.slice(0, 3).map((el, index) =>(
                        <PopularTours
                            key={index}
                            tourData={{
                                ...el,
                                percent: (Number(el.sold) / maxSold) * 100
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Statistics;