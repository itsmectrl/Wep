import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PowerfulFeatures from './components/PowerfulFeatures';
import GreatSound from './components/GreatSound';
import BeautifulInterface from './components/BeautifulInterface';
import AddYourMusic from './components/AddYourMusic';
import MoreFeatures from './components/MoreFeatures';
import CreatorVideos from './components/CreatorVideos';
import Reviews from './components/Reviews';
import TechnicalArchitecture from './components/TechnicalArchitecture';
import DownloadHub from './components/DownloadHub';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <main>
      <Header />
      <Hero />
      <div className="relative z-40 rounded-tr-[200px] bg-gradient-to-b from-[#222324] to-[#0a0a0a] max-sm:rounded-tr-[100px]">
        <PowerfulFeatures />
        <GreatSound />
        <BeautifulInterface />
        <AddYourMusic />
      </div>
      <MoreFeatures />
      <CreatorVideos />
      <Reviews />
      <TechnicalArchitecture />
      <DownloadHub />
      <FAQ />
      <Footer />
    </main>
  );
}
