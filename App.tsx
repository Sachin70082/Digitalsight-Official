
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import About from './pages/About';
import Distribution from './pages/Distribution';
import MixingMastering from './pages/MixingMastering';
import Platforms from './pages/Platforms';
import Contact from './pages/Contact';
import MusicDistributionDetail from './pages/MusicDistributionDetail';
import VideoDistributionDetail from './pages/VideoDistributionDetail';
import ContentIDDetail from './pages/ContentIDDetail';
import PrivacyPolicy from './pages/PrivacyPolicy';
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col relative">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/distribution" element={<Distribution />} />
            <Route path="/music-distribution" element={<MusicDistributionDetail />} />
            <Route path="/video-distribution" element={<VideoDistributionDetail />} />
            <Route path="/content-id" element={<ContentIDDetail />} />
            <Route path="/mixing-mastering" element={<MixingMastering />} />
            <Route path="/platforms" element={<Platforms />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
};

export default App;
