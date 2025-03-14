import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import OurStory from './pages/OurStory';
import Menu from './pages/Menu';
import Banquet from './pages/Banquet';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import ScrollToTopButton from './pages/ScrollToTopButton';
import OrderOnline from './pages/OrderOnline';  

function App() {
  return (
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/banquet" element={<Banquet />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/order-online" element={<OrderOnline/>}
          />
        </Routes>
        <Footer />
        <ScrollToTopButton />
      </div>
  );
}

export default App;