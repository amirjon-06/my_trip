import React, { useState } from 'react';
import TourCard from './TourCard';
import TourModal from '../TourModal/TourModal';
import desert from '../../assets/mytrip/desert-afterglow.png';
import skyline from '../../assets/mytrip/above-the-ordinary.png';
import marina from '../../assets/mytrip/marina-after-hours.png';
import oldDubai from '../../assets/mytrip/old-dubai.png';
import palm from '../../assets/mytrip/palm-escape.png';
import abuDhabi from '../../assets/mytrip/beyond-dubai.png';

const tours = [
    { id: 1, img: desert, title: 'Desert afterglow', metadata: '6 HOURS · ADVENTURE', description: 'Dune driving, a desert sunset and dinner beneath the stars.', price: 'From $65 / person', kind: 'tour' },
    { id: 2, img: skyline, title: 'Above the ordinary', metadata: '45 MINUTES · SKYLINE', description: 'Take in Dubai from above and see the city from a new angle.', price: 'From $95 / person', kind: 'tour' },
    { id: 3, img: marina, title: 'Marina, after hours', metadata: '2 HOURS · ON THE WATER', description: 'A relaxed cruise past the Marina as the skyline lights up.', price: 'From $75 / person', kind: 'tour' },
    { id: 4, img: oldDubai, title: 'The soul of Old Dubai', metadata: '4 HOURS · CULTURE', description: 'Explore the creek, historic lanes and much-loved local souks.', price: 'From $45 / person', kind: 'tour' },
    { id: 5, img: palm, title: 'A little Palm paradise', metadata: 'HALF DAY · BEACH', description: 'Slow down by the water and enjoy a different side of Dubai.', price: 'From $70 / person', kind: 'tour' },
    { id: 6, img: abuDhabi, title: 'Beyond Dubai', metadata: 'FULL DAY · DAY TRIP', description: 'Discover Abu Dhabi, the Grand Mosque and the Corniche.', price: 'From $85 / person', kind: 'tour' }
];

function TourPackages() {
    const [selectedTour, setSelectedTour] = useState(null);
    return (
        <section className='section tours reveal' id='tour-packages' aria-labelledby='tours-title'>
            <p className='section-kicker'>03 / MAKE IT A MEMORY</p>
            <h2 id='tours-title'>Six ways to fall for Dubai.</h2>
            <p className='section-intro'>For the thrill-seekers, the slow wanderers, and everyone in between.</p>
            <div className='tour-grid'>{tours.map((tour) => <TourCard key={tour.id} tourData={tour} onOpen={setSelectedTour} />)}</div>
            <p className='section-note'>Sample itineraries and USD prices · Availability and final inclusions are confirmed when you enquire.</p>
            {selectedTour && <TourModal tour={selectedTour} onClose={() => setSelectedTour(null)} />}
        </section>
    );
}

export default TourPackages;
