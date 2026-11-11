import React, { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import VisaPackages from './components/VisaPackages/VisaPackages';
import ApplicationProcess from './components/ApplicationProcess/ApplicationProcess';
import TourPackages from './components/TourPackages/TourPackages';
import Statistics from './components/Statistics/Statistics';
import BeforeTrip from './components/BeforeTrip/BeforeTrip';
import Footer from './components/Footer/Footer';
import TourModal from './components/TourModal/TourModal';
import ScrollBeam from './components/ScrollBeam/ScrollBeam';

function App() {
    const [generalInquiryOpen, setGeneralInquiryOpen] = useState(false);
    const [theme, setTheme] = useState(() => {
        const saved = window.localStorage.getItem('my-trip-theme');
        return saved === 'dark' || saved === 'light'
            ? saved
            : (window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    });

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        document.documentElement.style.colorScheme = theme;
        window.localStorage.setItem('my-trip-theme', theme);
    }, [theme]);

    useEffect(() => {
        if (!('IntersectionObserver' in window)) {
            document.querySelectorAll('.reveal').forEach((node) => node.classList.add('visible'));
            return undefined;
        }
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.reveal').forEach((node) => observer.observe(node));
        return () => observer.disconnect();
    }, []);

    return (
        <div className='app-shell' id='page-scroll-area'>
            <Header theme={theme} setTheme={setTheme} onInquiry={() => setGeneralInquiryOpen(true)} />
            <Hero />
            <VisaPackages />
            <ApplicationProcess />
            <TourPackages />
            <Statistics />
            <BeforeTrip />
            <Footer theme={theme} />
            {generalInquiryOpen && <TourModal tour={{ title: 'Trip planning inquiry', price: 'Let’s talk', description: 'Tell us a little about your Dubai plans and continue the conversation on WhatsApp.', kind: 'inquiry' }} onClose={() => setGeneralInquiryOpen(false)} />}
            <ScrollBeam />
        </div>
    );
}

export default App;
