import React from 'react';
//react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//components
import Home from './hoc/Home/Home';
import About from './hoc/About/About';
import Program from './hoc/Program/Program';
import WorkingSpace from './hoc/WorkingSpace/WorkingSpace';
import Contact from './hoc/Contact/Contact';
//css
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Program />} />
        <Route path="/co-working-space" element={<WorkingSpace />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
