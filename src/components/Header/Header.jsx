import React, { useEffect, useRef, useState } from 'react';
import logo from '../../img/logo.webp';
import darkLogo from '../../img/logo-dark.webp';
import { useLanguage, useT } from '../../i18n';

function Icon({ name }) {
    const paths = {
        sun: <><circle cx='12' cy='12' r='4' /><path d='M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4' /></>,
        moon: <path d='M20.5 14.1A8.5 8.5 0 0 1 9.9 3.5a8.5 8.5 0 1 0 10.6 10.6Z' />,
        menu: <path d='M4 7h16M4 12h16M4 17h16' />,
        close: <path d='m6 6 12 12M18 6 6 18' />,
        chevron: <path d='m7 10 5 5 5-5' />,
    };

    return (
        <svg viewBox='0 0 24 24' aria-hidden='true' fill='none' stroke='currentColor' strokeWidth='1.8' strokeLinecap='round' strokeLinejoin='round'>
            {paths[name]}
        </svg>
    );
}

function Header({ theme, setTheme, onInquiry }) {
    const { lang, setLang } = useLanguage();
    const t = useT('nav');
    const [open, setOpen] = useState(false);
    const [languageOpen, setLanguageOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const languageRef = useRef(null);
    const links = [[t[0], '#visa-packages'], [t[1], '#application-process'], [t[2], '#tour-packages'], [t[3], '#statistics']];

    useEffect(() => {
        const update = () => setScrolled(window.scrollY > 8);
        update();
        window.addEventListener('scroll', update, { passive: true });
        return () => window.removeEventListener('scroll', update);
    }, []);

    useEffect(() => {
        const outside = (event) => {
            if (!languageRef.current || !languageRef.current.contains(event.target)) setLanguageOpen(false);
        };
        const keyboard = (event) => {
            if (event.key === 'Escape') setLanguageOpen(false);
        };
        document.addEventListener('pointerdown', outside);
        document.addEventListener('keydown', keyboard);
        return () => {
            document.removeEventListener('pointerdown', outside);
            document.removeEventListener('keydown', keyboard);
        };
    }, []);

    const chooseLanguage = (value) => {
        setLang(value);
        setLanguageOpen(false);
    };

    return (
        <header className={['site-header', scrolled && 'is-scrolled'].filter(Boolean).join(' ')}>
            <div className='header-inner'>
                <a href='#top' className='brand-link' aria-label='My Trip home'>
                    <img className='brand-logo' src={(theme === 'dark' && darkLogo) || logo} alt='My Trip' />
                </a>
                <nav id='mobile-navigation' className={['navigation', open && 'is-open'].filter(Boolean).join(' ')} aria-label={t[0]}>
                    {links.map(([label, href]) => (
                        <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
                    ))}
                </nav>
                <div className='header-actions'>
                    <div className='language-picker' ref={languageRef}>
                        <button className={['language-select', languageOpen && 'is-open'].filter(Boolean).join(' ')} type='button' aria-label='Choose language' aria-haspopup='menu' aria-expanded={languageOpen} onClick={() => setLanguageOpen((value) => !value)}>
                            {lang.toUpperCase()}<Icon name='chevron' />
                        </button>
                        {languageOpen && (
                            <div className='language-menu' role='menu' aria-label='Choose language'>
                                {[["tj", 'Тоҷикӣ'], ['ru', 'Русский'], ['en', 'English']].map(([value, label]) => (
                                    <button key={value} type='button' role='menuitemradio' aria-checked={lang === value} className={['language-option', lang === value && 'is-selected'].filter(Boolean).join(' ')} onClick={() => chooseLanguage(value)}>
                                        <span>{label}</span><small>{value.toUpperCase()}</small>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                    <button className='icon-button theme-toggle' type='button' onClick={() => setTheme((theme === 'light' && 'dark') || 'light')} aria-label='Toggle color theme'>
                        <span className='sun'><Icon name='sun' /></span>
                        <span className='moon'><Icon name='moon' /></span>
                    </button>
                    <button className='button primary header-cta' type='button' onClick={onInquiry}>{t[4]}</button>
                    <button className='icon-button menu-button' type='button' onClick={() => setOpen(!open)} aria-expanded={open} aria-controls='mobile-navigation' aria-label={(open && 'Close menu') || 'Open menu'}>
                        <Icon name={(open && 'close') || 'menu'} />
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
