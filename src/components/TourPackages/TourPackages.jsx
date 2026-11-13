import React, { useState } from 'react';
import TourCard from './TourCard';
import TourModal from '../TourModal/TourModal';
import { useT } from '../../i18n';
import desert from '../../assets/mytrip/desert-afterglow.webp';
import skyline from '../../assets/mytrip/above-the-ordinary.webp';
import marina from '../../assets/mytrip/marina-after-hours.webp';
import oldDubai from '../../assets/mytrip/old-dubai.webp';
import palm from '../../assets/mytrip/palm-escape.webp';
import abuDhabi from '../../assets/mytrip/beyond-dubai.webp';

const tours = [
    { id: 1, img: desert, metadata: '6 HOURS · ADVENTURE', price: 'From $65 / person' },
    { id: 2, img: skyline, metadata: '45 MINUTES · SKYLINE', price: 'From $95 / person' },
    { id: 3, img: marina, metadata: '2 HOURS · ON THE WATER', price: 'From $75 / person' },
    { id: 4, img: oldDubai, metadata: '4 HOURS · CULTURE', price: 'From $45 / person' },
    { id: 5, img: palm, metadata: 'HALF DAY · BEACH', price: 'From $70 / person' },
    { id: 6, img: abuDhabi, metadata: 'FULL DAY · DAY TRIP', price: 'From $85 / person' },
];

function TourPackages() {
    const [selectedTour, setSelectedTour] = useState(null);
    const t = useT('tours');

    return (
        <section className='section tours reveal' id='tour-packages' aria-labelledby='tours-title'>
            <p className='section-kicker'>{t[0]}</p>
            <h2 id='tours-title'>{t[1]}</h2>
            <p className='section-intro'>{t[2]}</p>
            <div className='tour-grid'>
                {tours.map((tour, index) => {
                    const item = {
                        ...tour,
                        price: tour.price.replace('From ', ''),
                        title: t[3 + index * 2],
                        description: t[4 + index * 2],
                        kind: 'tour',
                    };

                    return <TourCard key={tour.id} tourData={item} onOpen={setSelectedTour} />;
                })}
            </div>
            <p className='section-note'>{t[16]}</p>
            {selectedTour && <TourModal tour={selectedTour} onClose={() => setSelectedTour(null)} />}
        </section>
    );
}

export default TourPackages;
