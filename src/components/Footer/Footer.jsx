import React from 'react';
import logo from '../../img/logo.webp';
import darkLogo from '../../img/logo-dark.webp';
import {useT} from '../../i18n';
function Footer({theme}){const t=useT('footer'),nav=useT('nav'),hero=useT('hero');return <footer className='footer' id='footer-inquiry'><div className='footer-main'><div className='footer-brand'><a href='#top' className='brand-link' aria-label='My Trip home'><img className='brand-logo footer-logo' src={theme==='dark'?darkLogo:logo} alt='My Trip'/></a><p>{t[0]}</p></div><nav aria-label={t[1]}><h3>{t[1]}</h3><a href='#visa-packages'>{nav[0]}</a><a href='#application-process'>{t[3]}</a><a href='#tour-packages'>{nav[2]}</a><a href='#statistics'>{nav[3]}</a></nav><div className='footer-contacts'><h3>{t[2]}</h3><a href='tel:+992000000000'>+992 00 000 00 00 →</a><a href='mailto:hello@mytrip.example'>hello@mytrip.example →</a></div></div><div className='footer-bottom'><p>© 2026 My Trip · {hero[0]} {hero[1]}</p><p>{t[4]}</p></div></footer>}
export default Footer;
