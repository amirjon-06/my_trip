import React from 'react';

import './Footer.css';

function Footer(props) {
    return (
        <footer className='footer'>
            <div className='footer-main'>
                <div className='footer-logo'>
                    <img src={props.logo} alt='Logo' />
                    <p>Визы и туры для путешествий</p>
                </div>

                <div className='footer-navigation'>
                    <h3>Навигация</h3>
                    <a href='#visa-packages'>Visa Dubai</a>
                    <a href='#application-process'>Этапы оформления</a>
                    <a href='#tour-packages'>Тур-пакет</a>
                    <a href='#statistics'>Статистика</a>
                </div>

                <div className='footer-contact'>
                    <h3>Контакты</h3>
                    <p>+992 00 000 00 00</p>
                    <p>info@mytrip.com</p>
                </div>
            </div>

            <div className='footer-bottom'>
                <p>© 2026 My Trip. Все права защищены.</p>
            </div>
        </footer>
    );
}

export default Footer;