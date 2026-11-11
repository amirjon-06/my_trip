import React, { useEffect, useState } from 'react';
import logo from '../../img/logo.png';
import darkLogo from '../../img/logo-dark.png';

function Icon({ name }) {
    const paths = {
        sun: <><circle cx='12' cy='12' r='4' /><path d='M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4' /></>,
        moon: <path d='M20.5 14.1A8.5 8.5 0 0 1 9.9 3.5a8.5 8.5 0 1 0 10.6 10.6Z' />,
        menu: <path d='M4 7h16M4 12h16M4 17h16' />,
        close: <path d='m6 6 12 12M18 6 6 18' />
    };
    return <svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round'>{paths[name]}</svg>;
}

function Header({ theme, setTheme, onInquiry }) {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const links = [['Visas', '#visa-packages'], ['How it works', '#application-process'], ['Tours', '#tour-packages'], ['In numbers', '#statistics']];
    const closeMenu = () => setOpen(false);
    useEffect(() => {
        const updateScrollState = () => setScrolled(window.scrollY > 8);
        updateScrollState();
        window.addEventListener('scroll', updateScrollState, { passive: true });
        return () => window.removeEventListener('scroll', updateScrollState);
    }, []);
    return (
        <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
            <div className='header-inner'>
                <a href='#top' className='brand-link' aria-label='My Trip home'><img className='brand-logo' src={theme === 'dark' ? darkLogo : logo} alt='My Trip' /></a>
                <nav id='mobile-navigation' className={`navigation ${open ? 'is-open' : ''}`} aria-label='Main navigation'>
                    {links.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
                </nav>
                <div className='header-actions'>
                    <button className='icon-button theme-toggle' type='button' onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}>
                        <span className='sun'><Icon name='sun' /></span><span className='moon'><Icon name='moon' /></span>
                    </button>
                    <button className='button primary header-cta' type='button' onClick={onInquiry}>Let’s talk <span aria-hidden='true'>↗</span></button>
                    <button className='icon-button menu-button' type='button' onClick={() => setOpen(!open)} aria-expanded={open} aria-controls='mobile-navigation' aria-label={open ? 'Close menu' : 'Open menu'}><Icon name={open ? 'close' : 'menu'} /></button>
                </div>
            </div>
        </header>
    );
}

export default Header;
