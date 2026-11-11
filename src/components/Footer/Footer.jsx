import React from 'react';
import logo from '../../img/logo.png';
import darkLogo from '../../img/logo-dark.png';

function Footer({ theme }) {
    return (
        <footer className='footer' id='footer-inquiry'>
            <div className='footer-main'>
                <div className='footer-brand'><a href='#top' className='brand-link' aria-label='My Trip home'><img className='brand-logo footer-logo' src={theme === 'dark' ? darkLogo : logo} alt='My Trip' /></a><p>Good journeys start with good people.</p></div>
                <nav aria-label='Explore'><h3>Explore</h3><a href='#visa-packages'>Visas</a><a href='#application-process'>How it works</a><a href='#tour-packages'>Tours</a><a href='#statistics'>In numbers</a></nav>
                <div className='footer-contacts'><h3>Get in touch</h3><a href='tel:+992000000000'>+992 00 000 00 00&nbsp; ↗</a><a href='mailto:hello@mytrip.example'>hello@mytrip.example&nbsp; ↗</a></div>
            </div>
            <div className='footer-bottom'><p>© 2026 My trip · Dubai, your way.</p><p>Contact details are placeholders for this concept.</p></div>
        </footer>
    );
}

export default Footer;
