import type { FunctionComponent } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Home from './pages/Home';
import './App.css';

const App: FunctionComponent = () => (
  <BrowserRouter>
    <>
      <Menu />
      <main role="main" className="flex-shrink-0 main-container mt-5 mb-5">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  </BrowserRouter>
);

export default App;
