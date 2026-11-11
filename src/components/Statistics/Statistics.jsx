import React from 'react';
import StatCard from './StatCard';
import PopularTours from './PopularTours';

const statistics = [
    { id: 1, value: '2.4k+', title: 'journeys planned' },
    { id: 2, value: '98%', title: 'happy travelers' }
];
const destinations = [
    { title: 'Downtown Dubai', percent: 42 }, { title: 'Arabian Desert', percent: 31 },
    { title: 'Dubai Marina', percent: 18 }, { title: 'Old Dubai', percent: 9 }
];

function Statistics() {
    return (
        <section className='statistics-section reveal' id='statistics' aria-labelledby='statistics-title'>
            <div className='stats-inner'>
                <div className='stats-overview'>
                    <p className='section-kicker'>04 / A LITTLE PERSPECTIVE</p>
                    <h2 id='statistics-title'>Small details.<br />Big journeys.</h2>
                    <div className='stat-list'>{statistics.map((stat) => <StatCard key={stat.id} statData={stat} />)}</div>
                    <p className='stats-disclaimer'>Illustrative service figures · not live or verified</p>
                </div>
                <div className='destinations'><h3>Where everyone’s heading</h3>{destinations.map((destination, i) => <PopularTours key={destination.title} tourData={{ ...destination, index: i + 1 }} />)}</div>
            </div>
        </section>
    );
}

export default Statistics;
