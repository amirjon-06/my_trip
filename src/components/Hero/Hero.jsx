import React from 'react';
import postcard from '../../assets/mytrip/dubai-postcard.webp';
import { useT } from '../../i18n';

function Hero() {
    const t = useT('hero');

    return (
        <main id='top'>
            <section className='hero' aria-labelledby='hero-title'>
                <div className='hero-copy'>
                    <p className='eyebrow'>25.2048° N, 55.2708° E</p>
                    <h1 id='hero-title'>
                        {t[0]}<br />
                        {t[1]}
                    </h1>
                    <h2>{t[2]}</h2>
                    <p className='hero-description'>
                        {t[3]}<br className='desktop-break' /> {t[4]}
                    </p>
                    <div className='hero-buttons'>
                        <a className='button primary' href='#visa-packages'>
                            {t[5]} <span aria-hidden='true'></span>
                        </a>
                        <a className='button secondary' href='#tour-packages'>
                            {t[6]} <span aria-hidden='true'></span>
                        </a>
                    </div>
                    <div className='hero-reassurance'>
                        <span aria-hidden='true'>✓</span>
                        <div>
                            <strong>{t[7]}</strong>
                            <small>{t[8]}</small>
                        </div>
                    </div>
                </div>
                <figure className='hero-photo'>
                    <img src={postcard} alt='Dubai skyline at sunset' fetchPriority='high' decoding='async' />
                    <figcaption>
                        <small>{t[9]}</small>
                        <strong>{t[10]}</strong>
                        <span>{t[11]}</span>
                    </figcaption>
                </figure>
            </section>
        </main>
    );
}

export default Hero;
