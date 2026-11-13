import React from 'react';
import StatCard from './StatCard';
import PopularTours from './PopularTours';
import { useT } from '../../i18n';

const statistics = [
    { id: 1, value: '2.4K' },
    { id: 2, value: '98%' },
];

const destinations = [42, 31, 18, 9];
function Statistics() {
    const t = useT('stats');
    const titleLines = t[1].split('\n');

    return (
        <section className='statistics-section reveal' id='statistics' aria-labelledby='statistics-title'>
            <div className='stats-inner'>
                <div className='stats-overview'>
                    <p className='section-kicker'>{t[0]}</p>
                    <h2 id='statistics-title'>
                        {titleLines.map((line, index) => (
                            <React.Fragment key={index}>
                                {index > 0 && <br />}
                                {line}
                            </React.Fragment>
                        ))}
                    </h2>
                    <div className='stat-list'>
                        {statistics.map((stat) => (
                            <StatCard key={stat.id} statData={stat} />
                        ))}
                    </div>
                    <p className='stats-disclaimer'>{t[9]}</p>
                </div>
                <div className='destinations'>
                    <h3>{t[4]}</h3>
                    {destinations.map((percent, index) => (
                        <PopularTours
                            key={index}
                            tourData={{ title: t[5 + index], percent, index: index + 1 }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Statistics;
