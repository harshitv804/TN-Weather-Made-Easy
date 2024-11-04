import { useState, useEffect } from 'react';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import './assets/css/global.css'
import RadarLocDropdown from './components/Sections/Nowcast/Nowcast.jsx';
import WeatherBloggers from './components/Sections/WeatherBloggers/WeatherBloggers';
import WindandHumidity from './components/Sections/WindAndHumidity/WindandHumidity.jsx';
import Forecast from './components/Sections/Forecast/Forecast.jsx';
import TropicalCyclone from './components/Sections/TropicalCyclone/TropicalCyclone.jsx';
import MJOITCZ from './components/Sections/MJOITCZ/MJOITCZ.jsx';

function App() {
  return (
    <>
    <Header/>
    <RadarLocDropdown/>
    <WindandHumidity/>
    <WeatherBloggers/>
    <Forecast/>
    <TropicalCyclone/>
    <MJOITCZ/>
    <Footer/>
    </>
  )
}

export default App
