import React, { useState } from 'react';
import VisaCard from './VisaCard';
import TourModal from '../TourModal/TourModal';

export const visaPackages = [
    { id: 1, title: '30-day tourist visa', days: '30 days', description: 'A short stay. A big adventure.', price: '$120', kind: 'visa' },
    { id: 2, title: '60-day tourist visa', days: '60 days', description: 'More time to make it yours.', price: '$190', kind: 'visa' },
    { id: 3, title: '90-day tourist visa', days: '90 days', description: 'Settle in. Explore a little further.', price: '$280', kind: 'visa' }
];

function VisaPackages() {
    const [selectedVisa, setSelectedVisa] = useState(null);
    return (
        <section className='section visa-section reveal' id='visa-packages' aria-labelledby='visa-title'>
            <div className='section-kicker'>01 / YOUR WAY IN</div>
            <div className='section-heading split'>
                <h2 id='visa-title'>A visa for every<br />kind of stay.</h2>
                <p>Choose your pace. We’ll handle the paperwork.<br />All options include personal application support.</p>
            </div>
            <div className='visa-grid'>
                {visaPackages.map((visa, i) => <VisaCard key={visa.id} visaData={visa} index={i} onOpen={setSelectedVisa} />)}
            </div>
            <p className='section-note'>Illustrative prices in USD · Final fees and eligibility depend on your nationality and travel dates.</p>
            {selectedVisa && <TourModal tour={selectedVisa} onClose={() => setSelectedVisa(null)} />}
        </section>
    );
}

export default VisaPackages;
