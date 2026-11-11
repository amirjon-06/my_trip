import React from 'react';

const groups = [
    { eyebrow: '01 / THE PAPERWORK', title: 'For your visa', items: ['A clear passport scan, usually valid for 6+ months', 'A recent passport-style photo', 'Travel dates and your contact details'] },
    { eyebrow: '02 / THE ADVENTURE', title: 'For your trip', items: ['Check your visa, flights and accommodation', 'Arrange travel insurance and airport transfers', 'Pack sun protection and modest clothing for cultural sites'] }
];

function BeforeTrip() {
    return (
        <section className='section before reveal' aria-labelledby='before-title'>
            <p className='section-kicker'>05 / BEFORE YOU GO</p>
            <h2 id='before-title'>Ready, set, Dubai.</h2>
            <p className='section-intro'>A little preparation makes room for a lot of adventure.</p>
            <div className='before-grid'>{groups.map((group) => <article key={group.title}>
                <p className='card-label'>{group.eyebrow}</p><h3>{group.title}</h3>
                <ul>{group.items.map((item) => <li key={item}><span aria-hidden='true'>✓</span>{item}</li>)}</ul>
            </article>)}</div>
            <p className='section-note'>A practical starting point, not an official document list. We’ll confirm the exact requirements for your nationality and trip.</p>
        </section>
    );
}

export default BeforeTrip;
