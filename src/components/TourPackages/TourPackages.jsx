import React, { useState } from 'react';
import TourCard from './TourCard';
import TourModal from '../TourModal/TourModal';
import img1 from './img/Untitled-1.png';
import img2 from './img/Untitled-2.png';
import img3 from './img/Untitled-3.png';
import img4 from './img/Untitled-4.png';
import img5 from './img/Untitled-5.png';
import img6 from './img/Untitled-6.png';
import './TourPackages.css';

function TourPackages() {
    const [selectedTour, setSelectedTour] = useState(null);
    const tourPackages = [
        { id: 1, img: img1, title: 'Городской уикенд', description: '3 ночи в центре, виза и трансфер из аэропорта.', days: '3 ночи', price: '$500' },
        { id: 2, img: img2, title: 'Пустынное сафари', description: '5 ночей, виза и экскурсия на джипах по дюнам.', days: '5 ночей', price: '$700' },
        { id: 3, img: img3, title: 'Марина и яхты', description: '4 ночи у воды, виза и прогулка на яхте.', days: '4 ночи', price: '$1000' },
        { id: 4, img: img4, title: 'Старый Дубай', description: '3 ночи, виза и прогулка по историческому центру.', days: '3 ночи', price: '$500' },
        { id: 5, img: img5, title: 'Премиум Дубай', description: '7 ночей, отель, трансфер и лучшие экскурсии.', days: '7 ночей', price: '$1200' },
        { id: 6, img: img6, title: 'Дубай для семьи', description: '6 ночей, отель, трансфер и семейные развлечения.', days: '6 ночей', price: '$900' }
    ].map((tour) => ({ ...tour, kind: 'tour' }));

    return (
        <section id='tour-packages'>
            <h1>Тур-пакеты</h1>
            <p>Выберите тур, который подходит именно вам.</p>
            <div className='tour-packages'>
                {tourPackages.map((tour) => <TourCard key={tour.id} tourData={tour} onOpen={setSelectedTour} />)}
            </div>
            {selectedTour && <TourModal tour={selectedTour} onClose={() => setSelectedTour(null)} />}
        </section>
    );
}

export default TourPackages;
