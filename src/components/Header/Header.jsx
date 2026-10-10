import React from 'react';

import './Header.css';

function Header(props) {
    return (
        <header className='header'>
            <img src={props.logo} alt='Logo' className='logo' />
            <a href='#visa-packages' className='link'>Visa Dubai</a>
            <a href='#application-process' className='link'>Этапы оформления</a>
            <a href='#tour-packages' className='link'>Тур-пакет</a>
            <a href='#statistics' className='link'>Статистика</a>
        </header>
    );
}

export default Header;
