import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'

//import pages to be used here
import Intro from './pages/intro.jsx';

function App() {
  return (
    <div className = "body">
      <Router>
        <Routes>
          <Route path="/" element={<Intro />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;