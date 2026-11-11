import React from 'react';

const steps = [
    ['Find your fit', 'Choose a 30-, 60- or 90-day tourist visa.'],
    ['Say hello', 'Share your name and phone in the inquiry form.'],
    ['Send your documents', 'We confirm requirements and payment on WhatsApp.'],
    ['Check your inbox', 'Receive your visa by email, usually in 2–4 days.']
];

function ApplicationProcess() {
    return (
        <section className='section process reveal' id='application-process' aria-labelledby='process-title'>
            <p className='section-kicker'>02 / SIMPLE FROM THE START</p>
            <h2 id='process-title'>From “let’s go” to ready to fly.</h2>
            <ol className='process-steps'>{steps.map(([title, description], i) => <li key={title}><span className='step-number'>0{i + 1}</span><h3>{title}</h3><p>{description}</p></li>)}</ol>
        </section>
    );
}

export default ApplicationProcess;
