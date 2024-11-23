import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Home from './pages/Home';
import Examples from './pages/Examples';
import './App.css';

const App: React.FC = () => (
  <BrowserRouter>
    <>
      <Menu />
      <main role="main" className="flex-shrink-0 main-container" style={{ marginTop: 25, marginBottom: 25 }}>
        <Routes>
          <Route path="/:name" element={<Examples />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  </BrowserRouter>
);

export default App;
