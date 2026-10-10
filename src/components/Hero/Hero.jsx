import React from 'react';

import './Hero.css';

function Hero(props) {
    return (
        <div className='hero'>
            <h1>
                Дубай <br />
                ждёт вас
            </h1>

            <p>
                Оформляем визы в Дубай за 2–4 дня и собираем
                тур-пакеты под любой бюджет: перелёт, отель,
                трансфер и экскурсии — в одном окне.
            </p>

            <div className='hero-buttons'>
                <a href='#visa-package' className='link'>Выбрать визу</a>
                <a href='#tour-package' className='link'>Смотреть туры</a>
            </div>
        </div>
    );
}

export default Hero;