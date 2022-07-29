import React from "react";
//react-router-dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//components
import Home from "./views/Home";
import About from "./views/About";
import Program from "./views/Programs";
import WorkingSpace from "./hoc/WorkingSpace/WorkingSpace";
import Contact from "./hoc/Contact/Contact";
import RentSpace from "./views/RentSpace";
//css
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "./App.css";
import { ScrollToTop } from "./shared/utility";
import SingleProgram from "./views/Programs/SingleProgram";
import Incubation from "./views/Incubation";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/incubation" element={<Incubation />} />
        <Route path="/programs" element={<Program />} />
        <Route path="/programs/:slug" element={<SingleProgram />} />
        <Route path="/co-working-space" element={<WorkingSpace />} />
        <Route path="/rent-space" element={<RentSpace />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
