import React from 'react';
import postcard from '../../assets/mytrip/dubai-postcard.png';

function Hero() {
    return (
        <main id='top'>
            <section className='hero' aria-labelledby='hero-title'>
                <div className='hero-copy'>
                    <p className='eyebrow'>25.2048° N, 55.2708° E</p>
                    <h1 id='hero-title'>Dubai,<br />your way.</h1>
                    <h2>Your Dubai story starts here.</h2>
                    <p className='hero-description'>From your first visa to your last desert sunset.<br className='desktop-break' /> We take care of the details. You take it all in.</p>
                    <div className='hero-buttons'>
                        <a className='button primary' href='#visa-packages'>Find your visa <span aria-hidden='true'>↗</span></a>
                        <a className='button secondary' href='#tour-packages'>Explore tours <span aria-hidden='true'>↗</span></a>
                    </div>
                    <div className='hero-reassurance'><span aria-hidden='true'>✓</span><div><strong>Visa processing in 2–4 days</strong><small>A real person with you, every step.</small></div></div>
                </div>
                <figure className='hero-photo'>
                    <img src={postcard} alt='Dubai skyline at sunset, seen from above' />
                    <figcaption><small>NOT JUST A DESTINATION.</small><strong>A whole new perspective.</strong><span>DUBAI, UNITED ARAB EMIRATES&nbsp; ↗</span></figcaption>
                </figure>
            </section>
        </main>
    );
}

export default Hero;
