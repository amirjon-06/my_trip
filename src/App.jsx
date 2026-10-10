import React from 'react';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import VisaPackages from './components/VisaPackages/VisaPackages';
import ApplicationProcess from './components/ApplicationProcess/ApplicationProcess';
import TourPackages from './components/TourPackages/TourPackages';
import Statistics from './components/Statistics/Statistics';
import BeforeTrip from './components/BeforeTrip/BeforeTrip';
import Footer from './components/Footer/Footer';

import logo from './img/logo.png';

function App(props) {
    return (
        <div>
            <Header logo={logo} />

            <Hero />

            <VisaPackages />

            <ApplicationProcess />

            <TourPackages />

            <Statistics />

            <BeforeTrip />

            <Footer logo={logo} />
        </div>
    )
}

export default App;
