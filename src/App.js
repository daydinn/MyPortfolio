import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Infos from './components/Infos'; // Infos-Seite importieren

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<><About /><Projects /></>} />
          <Route path="/infos" element={<Infos />} /> {/* Route für Infos-Seite */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
